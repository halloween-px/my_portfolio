/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./modules/**/*.{js,ts,jsx,tsx,mdx}',
		'./themes/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				main: '#dba423',
			},
			height: {
				sidebar: '66px',
			},
			width: {
				'left-sidebar': '300px',
				'right-sidebar': '100px',
			},
		},

		borderRadius: {
			DEFAULT: '4px',
			none: '0',
			sm: '6px',
			md: '12px',
			lg: '16px',
			full: '9999px',
			large: '18',
		},

		fontSize: {
			'xl-700': [
				'24px',
				{
					lineHeight: '130%',
					fontWeight: '700',
				},
			],
			'xl-600': [
				'24px',
				{
					lineHeight: '140%',
					fontWeight: '600',
				},
			],
			'lg-700': [
				'22px',
				{
					lineHeight: '140%',
					fontWeight: '700',
				},
			],
			'lg-600': [
				'22px',
				{
					lineHeight: '140%',
					fontWeight: '600',
				},
			],
			'lg-500': [
				'22px',
				{
					lineHeight: '140%',
					fontWeight: '500',
				},
			],
			'lg-400': [
				'22px',
				{
					lineHeight: '140%',
					fontWeight: '500',
				},
			],
			'body-700': [
				'18px',
				{
					lineHeight: '140%',
					fontWeight: '700',
				},
			],
			'body-600': [
				'18px',
				{
					lineHeight: '140%',
					fontWeight: '600',
				},
			],
			'body-500': [
				'18px',
				{
					lineHeight: '140%',
					fontWeight: '500',
				},
			],
			'body-400': [
				'18px',
				{
					lineHeight: '140%',
					fontWeight: '400',
				},
			],
			'base-400': [
				'16px',
				{
					lineHeight: '140%',
					fontWeight: '400',
				},
			],
			'base-500': [
				'16px',
				{
					lineHeight: '140%',
					fontWeight: '500',
				},
			],
			'base-600': [
				'16px',
				{
					lineHeight: '140%',
					fontWeight: '600',
				},
			],
			'small-400': [
				'14px',
				{
					lineHeight: '140%',
					fontWeight: '400',
				},
			],
			'small-500': [
				'14px',
				{
					lineHeight: '140%',
					fontWeight: '500',
				},
			],
			'small-600': [
				'14px',
				{
					lineHeight: '140%',
					fontWeight: '600',
				},
			],
			'subtle-500': [
				'12px',
				{
					lineHeight: '16px',
					fontWeight: '500',
				},
			],
			'subtle-600': [
				'12px',
				{
					lineHeight: '16px',
					fontWeight: '600',
				},
			],
			'tiny-500': [
				'10px',
				{
					lineHeight: '140%',
					fontWeight: '500',
				},
			],
		},
	},
	plugins: [],
}
