/* eslint-disable @next/next/no-img-element */
"use client";

import { LINKS } from "@/lib/links";
import { getSupabase } from "@/lib/supabase";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const DEEP_LINK_BASE = "com.saentari.adventura://login-callback";

/**
 * Whether this browser can plausibly open the native app.
 *
 * The custom-scheme deep link only resolves on a device with Adventura
 * installed, so firing it on a desktop browser does nothing visible and leaves
 * the user staring at store badges for an app they cannot run. Desktop visitors
 * are sent to the web app instead.
 */
function isMobileBrowser(): boolean {
	if (typeof navigator === "undefined") return false;
	return /android|iphone|ipad|ipod/i.test(navigator.userAgent);
}

function getContent(flow: string | null) {
	switch (flow) {
		case "signup":
			return {
				title: "Email Verified",
				message: "Your email address has been verified. You can now sign in.",
			};
		case "recovery":
			return {
				title: "Reset Your Password",
				message:
					"Your reset link has been verified. Open the app to set a new password.",
			};
		default:
			return {
				title: "Authentication Successful",
				message: "You can continue in the app.",
			};
	}
}

/** Shell every state on this route shares: one centred card on the page. */
function CallbackCard({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="mx-auto flex min-h-[70vh] max-w-content items-center justify-center px-4 py-4 medium:px-6">
			<div className="w-full max-w-md rounded-md border border-line-soft bg-card px-6 py-10 text-center shadow-[var(--shadow-card)]">
				<h1 className="font-brand text-header-lg text-ink">{title}</h1>
				{children}
			</div>
		</div>
	);
}

/** The two store badges plus the browser fallback, shown once the deep link
 *  has had its chance and nothing happened. */
function AppHandoff() {
	return (
		<div className="mt-8 space-y-4">
			<p className="text-body-sm text-ink-muted">
				Open Adventura on your device to continue.
			</p>

			<div className="flex flex-col items-center justify-center gap-3 medium:flex-row">
				<a
					href={LINKS.appStore}
					target="_blank"
					rel="noopener noreferrer"
					className="transition-opacity hover:opacity-80"
				>
					<img
						src="/images/apple_app_store.png"
						alt="Download on the App Store"
						width={150}
						height={50}
					/>
				</a>
				<a
					href={LINKS.playStore}
					target="_blank"
					rel="noopener noreferrer"
					className="transition-opacity hover:opacity-80"
				>
					<img
						src="/images/google_play.png"
						alt="Get it on Google Play"
						width={168}
						height={50}
					/>
				</a>
			</div>

			<p className="text-body-sm text-ink-muted">
				or{" "}
				<a
					href={LINKS.webApp}
					className="text-link underline transition-colors hover:text-link-hover"
				>
					continue in your browser
				</a>
			</p>
		</div>
	);
}

const FIELD_CLASSES =
	"w-full rounded-sm border border-line bg-surface px-4 py-3 text-body text-ink placeholder:text-ink-muted focus:border-link focus:outline-none disabled:opacity-50";

function PasswordResetForm({ tokenHash }: { tokenHash: string }) {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setError(null);

		if (password.length < 6) {
			setError("Password must be at least 6 characters.");
			return;
		}
		if (password !== confirmPassword) {
			setError("Passwords do not match.");
			return;
		}

		setIsLoading(true);

		try {
			const { error: verifyError } = await getSupabase().auth.verifyOtp({
				token_hash: tokenHash,
				type: "recovery",
			});
			if (verifyError) throw verifyError;

			const { error: updateError } = await getSupabase().auth.updateUser({
				password,
			});
			if (updateError) throw updateError;

			setSuccess(true);
		} catch (err) {
			const message =
				err instanceof Error ? err.message : "Something went wrong.";
			setError(message);
		} finally {
			setIsLoading(false);
		}
	}

	if (success) {
		return (
			<CallbackCard title="Password Updated">
				<p className="mt-4 text-body text-ink-muted">
					Your password has been changed successfully. You can now sign in with
					your new password.
				</p>
				<AppHandoff />
			</CallbackCard>
		);
	}

	return (
		<CallbackCard title="Set New Password">
			<p className="mt-4 text-body text-ink-muted">
				Enter your new password below.
			</p>

			<form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
				<div>
					<label
						htmlFor="new-password"
						className="mb-2 block text-body-sm font-medium text-ink"
					>
						New Password
					</label>
					<div className="relative">
						<input
							id="new-password"
							type={showPassword ? "text" : "password"}
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
								setError(null);
							}}
							placeholder="At least 6 characters"
							disabled={isLoading}
							className={FIELD_CLASSES}
							autoFocus
						/>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="absolute top-1/2 right-3 -translate-y-1/2 text-body-sm text-ink-muted transition-colors hover:text-ink"
						>
							{showPassword ? "Hide" : "Show"}
						</button>
					</div>
				</div>

				<div>
					<label
						htmlFor="confirm-password"
						className="mb-2 block text-body-sm font-medium text-ink"
					>
						Confirm Password
					</label>
					<input
						id="confirm-password"
						type={showPassword ? "text" : "password"}
						value={confirmPassword}
						onChange={(e) => {
							setConfirmPassword(e.target.value);
							setError(null);
						}}
						placeholder="Re-enter your password"
						disabled={isLoading}
						onKeyDown={(e) => {
							if (e.key === "Enter") handleSubmit(e);
						}}
						className={FIELD_CLASSES}
					/>
				</div>

				{error && (
					<p role="alert" className="text-center text-body-sm text-danger">
						{error}
					</p>
				)}

				<button
					type="submit"
					disabled={isLoading}
					className="w-full rounded-[10px] border border-button-line bg-button px-5 py-3 text-body font-medium text-button-ink transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50"
				>
					{isLoading ? "Updating..." : "Update Password"}
				</button>
			</form>
		</CallbackCard>
	);
}

function DeepLinkRedirect() {
	const searchParams = useSearchParams();
	const [deepLinkAttempted, setDeepLinkAttempted] = useState(false);

	const flow = searchParams.get("flow") ?? searchParams.get("type");

	useEffect(() => {
		const params = searchParams.toString();

		// Desktop: the native deep link cannot resolve, so continue into the web
		// app, carrying any params through for it to act on.
		if (!isMobileBrowser()) {
			window.location.href = params
				? `${LINKS.webApp}/?${params}`
				: LINKS.webApp;
			return;
		}

		const deepLink = params ? `${DEEP_LINK_BASE}?${params}` : DEEP_LINK_BASE;
		window.location.href = deepLink;

		const timer = setTimeout(() => setDeepLinkAttempted(true), 1500);
		return () => clearTimeout(timer);
	}, [searchParams]);

	const { title, message } = getContent(flow);

	return (
		<CallbackCard title={title}>
			<p className="mt-4 text-body text-ink-muted">{message}</p>

			{deepLinkAttempted ? (
				<AppHandoff />
			) : (
				<p className="mt-8 animate-pulse text-body-sm text-ink-muted">
					Redirecting to Adventura...
				</p>
			)}
		</CallbackCard>
	);
}

function AuthCallbackContent() {
	const searchParams = useSearchParams();
	const tokenHash = searchParams.get("token_hash");
	const type = searchParams.get("type");

	if (tokenHash && type === "recovery") {
		return <PasswordResetForm tokenHash={tokenHash} />;
	}

	return <DeepLinkRedirect />;
}

export default function AuthCallbackPage() {
	return (
		<Suspense
			fallback={
				<div className="flex min-h-[70vh] items-center justify-center">
					<p className="animate-pulse text-body text-ink-muted">Loading...</p>
				</div>
			}
		>
			<AuthCallbackContent />
		</Suspense>
	);
}
