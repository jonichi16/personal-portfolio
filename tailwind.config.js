/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			maxHeight: {
				102: '420px'
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-4deg)' },
					'50%': { transform: 'rotate(4deg)' }
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite'
			}
		}
	},
	plugins: []
}
