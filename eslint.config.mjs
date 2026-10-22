import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

/**
 * Flat config, importing `eslint-config-next` directly.
 *
 * It used to go through `@eslint/eslintrc`'s `FlatCompat`, which threw
 * "Converting circular structure to JSON" while loading its own schema — so
 * it failed before linting a single file, meaning `eslint` had been dead in
 * this repo rather than merely noisy.
 *
 * `eslint-config-next` 16 ships a native flat config, so the eslintrc shim is
 * not needed at all. `core-web-vitals` already bundles the base and TypeScript
 * configs, which is why it is the only import here.
 */
const eslintConfig = [
	...nextCoreWebVitals,
	{
		ignores: [
			".next/**",
			"out/**",
			".wrangler/**",
			"next-env.d.ts",
		],
	},
];

export default eslintConfig;
