"use client";

import Markdown from "react-markdown";

interface MarkdownPageProps {
	content: string;
}

/**
 * Long-form pages — support, privacy, terms.
 *
 * Set in a card on the page background, the same relationship every other
 * surface on the site has. The measure is capped well below the site's content
 * width: legal prose at 16px gets hard to track back across a 1200px line.
 */
export default function MarkdownPage({ content }: MarkdownPageProps) {
	return (
		<div className="mx-auto max-w-3xl px-4 py-4 medium:px-6">
			<article className="rounded-md border border-line-soft bg-card px-5 py-8 shadow-[var(--shadow-card)] medium:px-10 medium:py-12">
				<Markdown
					components={{
						h1: ({ children }) => (
							<h1 className="mb-6 font-brand text-header-lg text-ink">
								{children}
							</h1>
						),
						h2: ({ children }) => (
							<h2 className="mt-10 mb-4 font-brand text-header text-ink">
								{children}
							</h2>
						),
						h3: ({ children }) => (
							<h3 className="mt-6 mb-3 text-header-sm font-bold text-ink">
								{children}
							</h3>
						),
						p: ({ children }) => (
							<p className="mb-4 text-body text-ink-muted">{children}</p>
						),
						ul: ({ children }) => (
							<ul className="mb-4 ml-6 list-disc text-body text-ink-muted">
								{children}
							</ul>
						),
						ol: ({ children }) => (
							<ol className="mb-4 ml-6 list-decimal text-body text-ink-muted">
								{children}
							</ol>
						),
						li: ({ children }) => <li className="mb-1">{children}</li>,
						strong: ({ children }) => (
							<strong className="font-bold text-ink">{children}</strong>
						),
						em: ({ children }) => (
							<em className="italic text-ink-muted">{children}</em>
						),
						a: ({ children, href }) => {
							// Site-internal links stay in the tab; anything else is a
							// departure and is marked as one.
							const internal = href?.startsWith("/");
							return (
								<a
									href={href}
									className="text-link underline transition-colors hover:text-link-hover"
									target={internal ? undefined : "_blank"}
									rel={internal ? undefined : "noopener noreferrer"}
								>
									{children}
								</a>
							);
						},
						hr: () => <hr className="my-8 border-line" />,
						blockquote: ({ children }) => (
							<blockquote className="my-4 border-l-2 border-line pl-4 text-body italic text-ink-muted">
								{children}
							</blockquote>
						),
						code: ({ children }) => (
							<code className="rounded-xs bg-surface px-1.5 py-0.5 text-body-sm text-ink">
								{children}
							</code>
						),
					}}
				>
					{content}
				</Markdown>
			</article>
		</div>
	);
}
