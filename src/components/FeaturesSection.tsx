import GoldDivider from "./GoldDivider";

const features = [
	{
		title: "Character Creation",
		description:
			"Build your hero from the ground up. Choose species, class, background, and abilities with full SRD support.",
		icon: (
			<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
			</svg>
		),
	},
	{
		title: "Character Management",
		description:
			"Track stats, inventory, spells, and more. Everything organized and always at your fingertips.",
		icon: (
			<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
			</svg>
		),
	},
	{
		title: "5E Compatible",
		description:
			"Built on the Systems Reference Document with species, classes, spells, and equipment you know and love.",
		icon: (
			<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
			</svg>
		),
	},
	{
		title: "Spells & Equipment",
		description:
			"Browse, search, and equip from the complete SRD spell list and equipment catalog.",
		icon: (
			<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
			</svg>
		),
	},
	{
		title: "PDF Export",
		description:
			"Export beautifully formatted character sheets as PDF, ready for your table.",
		icon: (
			<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
			</svg>
		),
	},
	{
		title: "Offline First",
		description:
			"All your data stays on your device. No account required, no cloud dependency.",
		icon: (
			<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
			</svg>
		),
	},
];

export default function FeaturesSection() {
	return (
		<section className="py-24 px-6">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
						Everything You Need for Your Quest
					</h2>
					<GoldDivider />
					<p className="mt-4 text-foreground-muted text-lg max-w-2xl mx-auto">
						From character creation to the final encounter, Adventura has you covered.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="bg-background-alt border border-border rounded-2xl p-8 hover:border-gold/30 transition-all group"
						>
							<div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/15 transition-colors">
								{feature.icon}
							</div>
							<h3 className="font-heading text-lg font-semibold text-foreground mb-2">
								{feature.title}
							</h3>
							<p className="text-foreground-muted leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
