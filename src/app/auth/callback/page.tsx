"use client";

import Image from "next/image";
import GoldDivider from "@/components/GoldDivider";
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
			<div className="min-h-[60vh] flex items-center justify-center px-6 py-16">
				<div className="max-w-md w-full text-center">
					<div className="mb-6 text-5xl">&#x2694;&#xFE0F;</div>

					<h1 className="font-heading text-3xl font-bold mb-2 text-foreground">
						Password Updated
					</h1>

					<GoldDivider />

					<p className="mt-4 text-foreground-muted leading-relaxed">
						Your password has been changed successfully. You can now sign in
						with your new password.
					</p>

					<div className="mt-8 space-y-4">
						<p className="text-foreground-muted text-sm">
							Open Adventura on your device to sign in.
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
							<a
								href={LINKS.appStore}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src="/images/apple_app_store.png"
									alt="Download on the App Store"
									width={150}
									height={50}
									className="hover:opacity-80 transition-opacity"
								/>
							</a>
							<a
								href={LINKS.playStore}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src="/images/google_play.png"
									alt="Get it on Google Play"
									width={168}
									height={50}
									className="hover:opacity-80 transition-opacity"
								/>
							</a>
						</div>

						<p className="text-foreground-muted text-sm">
							or{" "}
							<a
								href={LINKS.webApp}
								className="text-gold hover:text-gold-light underline transition-colors"
							>
								continue in your browser
							</a>
						</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-[60vh] flex items-center justify-center px-6 py-16">
			<div className="max-w-md w-full text-center">
				<div className="mb-6 text-5xl">&#x2694;&#xFE0F;</div>

				<h1 className="font-heading text-3xl font-bold mb-2 text-foreground">
					Set New Password
				</h1>

				<GoldDivider />

				<p className="mt-4 text-foreground-muted leading-relaxed">
					Enter your new password below.
				</p>

				<form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
					<div>
						<label className="block text-sm font-medium text-foreground-muted mb-2">
							New Password
						</label>
						<div className="relative">
							<input
								type={showPassword ? "text" : "password"}
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
									setError(null);
								}}
								placeholder="At least 6 characters"
								disabled={isLoading}
								className="w-full px-4 py-3 bg-background-surface border border-accent-border rounded-lg text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:border-gold/50 transition-colors disabled:opacity-50"
								autoFocus
							/>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-muted hover:text-foreground transition-colors"
							>
								{showPassword ? "Hide" : "Show"}
							</button>
						</div>
					</div>

					<div>
						<label className="block text-sm font-medium text-foreground-muted mb-2">
							Confirm Password
						</label>
						<input
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
							className="w-full px-4 py-3 bg-background-surface border border-accent-border rounded-lg text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:border-gold/50 transition-colors disabled:opacity-50"
						/>
					</div>

					{error && (
						<p className="text-red-400 text-sm text-center">{error}</p>
					)}

					<button
						type="submit"
						disabled={isLoading}
						className="w-full px-5 py-3 bg-gold text-background font-medium rounded-lg hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{isLoading ? "Updating..." : "Update Password"}
					</button>
				</form>
			</div>
		</div>
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
		<div className="min-h-[60vh] flex items-center justify-center px-6 py-16">
			<div className="max-w-md w-full text-center">
				<div className="mb-6 text-5xl">&#x2694;&#xFE0F;</div>

				<h1 className="font-heading text-3xl font-bold mb-2 text-foreground">
					{title}
				</h1>

				<GoldDivider />

				<p className="mt-4 text-foreground-muted leading-relaxed">
					{message}
				</p>

				{deepLinkAttempted ? (
					<div className="mt-8 space-y-4">
						<p className="text-foreground-muted text-sm">
							Open Adventura on your device to continue.
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
							<a
								href={LINKS.appStore}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src="/images/apple_app_store.png"
									alt="Download on the App Store"
									width={150}
									height={50}
									className="hover:opacity-80 transition-opacity"
								/>
							</a>
							<a
								href={LINKS.playStore}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src="/images/google_play.png"
									alt="Get it on Google Play"
									width={168}
									height={50}
									className="hover:opacity-80 transition-opacity"
								/>
							</a>
						</div>

						<p className="text-foreground-muted text-sm">
							or{" "}
							<a
								href={LINKS.webApp}
								className="text-gold hover:text-gold-light underline transition-colors"
							>
								continue in your browser
							</a>
						</p>
					</div>
				) : (
					<p className="mt-8 text-foreground-muted text-sm animate-pulse">
						Redirecting to Adventura...
					</p>
				)}
			</div>
		</div>
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
				<div className="min-h-[60vh] flex items-center justify-center">
					<p className="text-foreground-muted animate-pulse">Loading...</p>
				</div>
			}
		>
			<AuthCallbackContent />
		</Suspense>
	);
}
