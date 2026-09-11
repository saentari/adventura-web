// Generates src/content/legal/*.ts from the Flutter app's markdown.
//
// The app at ../adventura ships the privacy policy and terms as markdown
// assets, rendered in Settings. This site renders the same two documents at
// /privacy and /terms. They are one text with two readers, and the app is the
// source of truth because that is where the practices being described live.
//
// This exists because "edit the app's copy and re-sync by hand" was the
// standing instruction in those files' header comments, and it did not work:
// the site spent six months serving a privacy policy three revisions behind
// the app's and a terms that predated cloud sync, still describing Adventura
// as a mobile app for character tracking. Worse, its terms had lost the SRD
// attribution blocks — a CC-BY licence obligation — to a one-line paraphrase.
// None of that was noticed because nothing looked.
//
//   npm run sync:legal     rewrite the TS files from the app's markdown
//   npm run check:legal    fail if they disagree (runs as part of `npm run check`)
//
// The check is deliberately a no-op when ../adventura is absent, so a fresh
// clone of this repo alone still builds. It says so loudly rather than
// passing quietly, because a guard that silently stops guarding is how the
// drift happened in the first place.

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// Overridable so the repos need not be siblings, but siblings is the default
// because that is how they are checked out.
const appDir = process.env.ADVENTURA_APP_DIR
	? resolve(process.env.ADVENTURA_APP_DIR)
	: resolve(repoRoot, "..", "adventura");

const appTexts = join(appDir, "assets", "texts");
const legalDir = join(repoRoot, "src", "content", "legal");

const JOBS = [
	{
		markdown: "privacy_policy.md",
		target: "adventura-privacy.ts",
		constName: "adventuraPrivacy",
		route: "/privacy",
		what: "privacy policy",
	},
	{
		markdown: "terms_and_conditions.md",
		target: "adventura-terms.ts",
		constName: "adventuraTerms",
		route: "/terms",
		what: "terms & conditions",
	},
];

/**
 * Escapes markdown for a template literal.
 *
 * Backslashes first, or the escapes added below get escaped a second time.
 * The documents genuinely contain all three: a trailing `\` is markdown's
 * hard line break, and it sits on line 3 of both files.
 */
function escapeForTemplateLiteral(markdown) {
	return markdown
		.replaceAll("\\", "\\\\")
		.replaceAll("`", "\\`")
		.replaceAll("${", "\\${");
}

function render(job, markdown) {
	const body = escapeForTemplateLiteral(markdown.replace(/\n+$/, ""));

	return (
		`// Generated from adventura/assets/texts/${job.markdown} — do not edit.\n` +
		`// Edit the app's copy, then run \`npm run sync:legal\`.\n` +
		`// Served at ${job.route}.\n` +
		`const ${job.constName} = \`${body}\`;\n` +
		`\n` +
		`export default ${job.constName};\n`
	);
}

function main() {
	const checkOnly = process.argv.includes("--check");

	if (!existsSync(appTexts)) {
		// Not an error: this repo has to build on its own. Loud, though.
		console.warn(
			`[sync-legal] SKIPPED — no app checkout at ${appDir}\n` +
				`[sync-legal] /privacy and /terms were NOT verified against the app.\n` +
				`[sync-legal] Clone saentari/adventura beside this repo, or set ADVENTURA_APP_DIR.`,
		);
		return;
	}

	const stale = [];

	for (const job of JOBS) {
		const markdown = readFileSync(join(appTexts, job.markdown), "utf8");
		const expected = render(job, markdown);
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
		console.log(`[sync-legal] ${job.target} — rewritten from ${job.markdown}`);
	}

	if (stale.length > 0) {
		console.error(
			`\n[sync-legal] ${stale.length} legal page(s) disagree with the app:\n` +
				stale.map((job) => `  ${job.route}  <-  ${job.markdown}`).join("\n") +
				`\n\nThe app is the source of truth. Run \`npm run sync:legal\` and commit the result.\n` +
				`If the app's copy is the wrong one, fix it there first.\n`,
		);
		process.exit(1);
	}
}

main()
