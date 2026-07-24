export default function GoldDivider() {
	return (
		<div className="flex items-center justify-center gap-4 py-2">
			<div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
			<div className="h-1.5 w-1.5 rotate-45 bg-gold/60" />
			<div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
		</div>
	);
}
