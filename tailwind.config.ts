import type { Config } from "tailwindcss";
import type { PluginCreator } from "tailwindcss/types/config";

const shapeRendering: PluginCreator = ({ addUtilities }) => {
	addUtilities({
		".shape-auto": {
			"shape-rendering": "auto",
		},
		".shape-optimize-speed": {
			"shape-rendering": "optimizeSpeed",
		},
		".shape-crisp-edges": {
			"shape-rendering": "crispEdges",
		},
		".shape-geometric-precision": {
			"shape-rendering": "geometricPrecision",
		},
	});
};

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [shapeRendering],
};
export default config;
