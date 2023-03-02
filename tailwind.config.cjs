/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				lightTheme: {
					primary: '#FFFFFF',

					secondary: '#6DCC81',

					accent: '#46B1C9',

					neutral: '#232E34',

					'base-100': '#fff',

					info: '#86BBE5',

					success: '#187C5B',

					warning: '#FCD900',

					error: '#EF3F36'
				},
				darkTheme: {
					primary: '#FFFFFF',

					secondary: '#6DCC81',

					accent: '#46B1C9',

					neutral: '#232E34',

					'base-100': '#000',

					info: '#86BBE5',

					success: '#187C5B',

					warning: '#FCD900',

					error: '#EF3F36'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
