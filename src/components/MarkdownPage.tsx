"use client";

import Markdown from "react-markdown";

interface MarkdownPageProps {
	content: string;
}

export default function MarkdownPage({ content }: MarkdownPageProps) {
	return (
		<div className="max-w-3xl mx-auto px-6 py-16">
			<article>
				<Markdown
					components={{
						h1: ({ children }) => (
							<h1 className="font-heading text-3xl font-bold mb-6 text-foreground">
								{children}
							</h1>
						),
						h2: ({ children }) => (
							<h2 className="font-heading text-xl font-semibold mt-10 mb-4 text-foreground">
								{children}
							</h2>
						),
						h3: ({ children }) => (
							<h3 className="font-heading text-lg font-medium mt-6 mb-3 text-foreground">
								{children}
							</h3>
						),
						p: ({ children }) => (
							<p className="mb-4 text-foreground-muted leading-relaxed">
								{children}
							</p>
						),
						ul: ({ children }) => (
							<ul className="mb-4 ml-6 list-disc text-foreground-muted">
								{children}
							</ul>
						),
						ol: ({ children }) => (
							<ol className="mb-4 ml-6 list-decimal text-foreground-muted">
								{children}
							</ol>
						),
						li: ({ children }) => <li className="mb-1">{children}</li>,
						strong: ({ children }) => (
							<strong className="font-semibold text-foreground">
								{children}
							</strong>
						),
						em: ({ children }) => (
							<em className="italic text-foreground-muted">
								{children}
							</em>
						),
						a: ({ children, href }) => (
							<a
								href={href}
								className="text-gold hover:text-gold-light hover:underline transition-colors"
								target="_blank"
								rel="noopener noreferrer"
							>
								{children}
							</a>
						),
						hr: () => <hr className="my-8 border-border" />,
						blockquote: ({ children }) => (
							<blockquote className="border-l-4 border-gold/30 pl-4 my-4 italic text-foreground-muted">
								{children}
							</blockquote>
						),
					}}
				>
					{content}
				</Markdown>
			</article>
		</div>
	);
}
