// Generates src/content/legal/*.ts from saentari-web's legal sources.
//
// Adventura's privacy policy and terms are written once, in saentari-web
// (src/content/legal/adventura-*.ts), which also serves them at
// saentari.com/adventura. This site renders the same two documents at
// /privacy and /terms, the addresses the app and the store listings link to.
// The app keeps no copy: it links here.
//
// This exists because "edit the source and re-sync by hand" was the standing
// instruction in those files' header comments, and it did not work: the site
// spent six months serving a privacy policy three revisions behind and a
// terms that predated cloud sync, still describing Adventura as a mobile app
// for character tracking. Worse, its terms had lost the SRD attribution
// blocks — a CC-BY licence obligation — to a one-line paraphrase. None of
// that was noticed because nothing looked.
//
//   npm run sync:legal     rewrite the TS files from saentari-web's sources
//   npm run check:legal    fail if they disagree (runs as part of `npm run check`)
//
// The check is deliberately a no-op when ../saentari-web is absent, so a
// fresh clone of this repo alone still builds. It says so loudly rather than
// passing quietly, because a guard that silently stops guarding is how the
// drift happened in the first place.

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// Overridable so the repos need not be siblings, but siblings is the default
// because that is how they are checked out.
const sourceRepo = process.env.SAENTARI_WEB_DIR
	? resolve(process.env.SAENTARI_WEB_DIR)
	: resolve(repoRoot, "..", "saentari-web");

const sourceDir = join(sourceRepo, "src", "content", "legal");
const legalDir = join(repoRoot, "src", "content", "legal");

const JOBS = [
	{
		source: "adventura-privacy.ts",
		target: "adventura-privacy.ts",
		constName: "adventuraPrivacy",
		route: "/privacy",
	},
	{
		source: "adventura-terms.ts",
		target: "adventura-terms.ts",
		constName: "adventuraTerms",
		route: "/terms",
	},
];

/**
 * The body of the source's template literal, exactly as written there.
 *
 * It is already escaped for a template literal, so it is copied across as it
 * stands rather than unescaped and escaped again, which could only add ways
 * for the two to differ.
 */
function templateBody(job, source) {
	const match = source.match(/=\s*`([\s\S]*)`;\s*\n\s*export default/);
	if (!match) {
		throw new Error(`[sync-legal] no template literal in ${job.source}`);
	}
	return match[1];
}

function render(job, body) {
	return (
		`// Generated from saentari-web/src/content/legal/${job.source} — do not edit.\n` +
		`// Edit it there, then run \`npm run sync:legal\`.\n` +
		`// Served at ${job.route}.\n` +
		`const ${job.constName} = \`${body}\`;\n` +
		`\n` +
		`export default ${job.constName};\n`
	);
}

function main() {
	const checkOnly = process.argv.includes("--check");

	if (!existsSync(sourceDir)) {
		// Not an error: this repo has to build on its own. Loud, though.
		console.warn(
			`[sync-legal] SKIPPED — no saentari-web checkout at ${sourceRepo}\n` +
				`[sync-legal] /privacy and /terms were NOT verified against their source.\n` +
				`[sync-legal] Clone saentari/saentari-web beside this repo, or set SAENTARI_WEB_DIR.`,
		);
		return;
	}

	const stale = [];

	for (const job of JOBS) {
		const source = readFileSync(join(sourceDir, job.source), "utf8");
		const expected = render(job, templateBody(job, source));
		const target = join(legalDir, job.target);
		const current = existsSync(target) ? readFileSync(target, "utf8") : null;

		if (current === expected) {
			console.log(`[sync-legal] ${job.target} — in sync`);
			continue;
		}

		if (checkOnly) {
			stale.push(job);
			continue;
		}

		writeFileSync(target, expected, "utf8");
		console.log(`[sync-legal] ${job.target} — rewritten from saentari-web's ${job.source}`);
	}

	if (stale.length > 0) {
		console.error(
			`\n[sync-legal] ${stale.length} legal page(s) disagree with saentari-web:\n` +
				stale.map((job) => `  ${job.route}  <-  ${job.source}`).join("\n") +
				`\n\nsaentari-web is the source of truth. Run \`npm run sync:legal\` and commit the result.\n` +
				`If saentari-web's copy is the wrong one, fix it there first.\n`,
		);
		process.exit(1);
	}
}

main();
