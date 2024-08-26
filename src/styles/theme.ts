import plugin from 'tailwindcss/plugin';

const theme = plugin(
	({ addBase, addUtilities }) => {
		addBase({
			html: { fontSize: '62.5%' },
			body: {
				backgroundColor: 'hsl(var(--color-background))',
				color: 'hsl(var(--color-foreground))',
				WebkitFontSmoothing: 'antialiased',
				MozOsxFontSmoothing: 'grayscale',
			},
			'input,\ntextarea,\nbutton': { fontFamily: 'inherit' },
			button: { cursor: 'pointer' },
			a: { color: 'inherit', textDecoration: 'none' },
			'ul,\nol,\ndl,\np,\na': { '@apply font-normal text-xs md:text-base': {} },
			'h1,\nh2,\nh3,\nh4,\nh5': { '@apply font-bold': {} },
			h1: { '@apply text-2xl md:text-4xl': {} },
			h2: { '@apply text-xl md:text-3xl': {} },
			h3: { '@apply text-lg md:text-2xl': {} },
			h4: { '@apply text-base md:text-xl': {} },
			h5: { '@apply text-sm md:text-lg': {} },

			'.hero-ring': {
				'@apply absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border-2 border-[#1e40af] dark:border-[#6ee7b7] shadow-[0_0_80px_inset] dark:shadow-[#6ee7b7] shadow-[#1e40af]':
					{},
			},
		});

		addBase({
			':root': {
				'--color-background': '0deg 0% 100%',
				'--color-foreground': '224deg 71% 4%',

				'--color-card': '0deg 0% 100%',
				'--color-card-foreground': '224deg 71% 4%',

				'--color-popover': '0deg 0% 100%',
				'--color-popover-foreground': '224deg 71% 4%',

				'--color-primary': '262deg 83% 58%',
				'--color-primary-foreground': '210deg 20% 98%',

				'--color-secondary': '220deg 14% 96%',
				'--color-secondary-foreground': '221deg 39% 11%',

				'--color-muted': '220deg 14% 95%',
				'--color-muted-foreground': '220deg 9% 46%',

				'--color-accent': '220deg 14% 96%',
				'--color-accent-foreground': '221deg 39% 11%',

				'--color-success': '142deg 71% 51%',
				'--color-success-foreground': '141deg 78% 12%',

				'--color-warning': '60deg 71% 51%',
				'--color-warning-foreground': '60deg 50% 17%',

				'--color-info': '198deg 87% 54%',
				'--color-info-foreground': '198deg 87% 97%',

				'--color-destructive': '0deg 84% 60%',
				'--color-destructive-foreground': '210deg 20% 98%',

				'--color-border': '220deg 13% 91%',
				'--color-input': '220deg 13% 91%',
				'--color-ring': '262deg 83% 58%',

				'--color-chart-1': '12deg 76% 61%',
				'--color-chart-2': '173deg 58% 39%',
				'--color-chart-3': '197deg 37% 24%',
				'--color-chart-4': '43deg 74% 66%',
				'--color-chart-5': '27deg 87% 67%',
			},

			'.dark': {
				'--color-background': '224deg 71% 4%',
				'--color-foreground': '210deg 20% 98%',

				'--color-card': '224deg 71% 4%',
				'--color-card-foreground': '210deg 20% 98%',

				'--color-popover': '224deg 71% 4%',
				'--color-popover-foreground': '210deg 20% 98%',

				'--color-primary': '263deg 70% 50%',
				'--color-primary-foreground': '210deg 20% 98%',

				'--color-secondary': '215deg 28% 17%',
				'--color-secondary-foreground': '210deg 20% 98%',

				'--color-muted': '215deg 28% 17%',
				'--color-muted-foreground': '218deg 11% 65%',

				'--color-accent': '215deg 28% 17%',
				'--color-accent-foreground': '210deg 20% 98%',

				'--color-success': '142deg 71% 51%',
				'--color-success-foreground': '142deg 78% 8%',

				'--color-warning': '60deg 71% 51%',
				'--color-warning-foreground': '60deg 5% 4%',

				'--color-info': '198deg 87% 54%',
				'--color-info-foreground': '198deg 87% 7%',

				'--color-destructive': '0deg 84% 60%',
				'--color-destructive-foreground': '210deg 20% 98%',

				'--color-border': '215deg 28% 17%',
				'--color-input': '215deg 28% 17%',
				'--color-ring': '263deg 70% 50%',

				'--color-chart-1': '220deg 70% 50%',
				'--color-chart-2': '160deg 60% 45%',
				'--color-chart-3': '30deg 80% 55%',
				'--color-chart-4': '280deg 65% 60%',
				'--color-chart-5': '340deg 75% 55%',
			},
		});
		addUtilities({
			'.mask-gradient': {
				'mask-image':
					'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
			},
		});
	},

	{
		theme: {
			extend: {
				keyframes: {
					technologies: {
						'0%': { transform: 'translateX(0)' },
						'100%': { transform: 'translateX(calc(-50% - 20px))' },
					},
					tape: {
						'0%': { transform: 'translateX(0)' },
						'100%': { transform: 'translateX(calc(-91% - -44px))' },
					},
					orbit: {
						to: {
							transform: 'rotate(360deg)',
						},
					},
					'orbit-pulse': {
						'0%': { transform: 'rotate(0deg)', opacity: '1' },
						'10%': { opacity: '.3' },
						'90%': { opacity: '.3' },
						'100%': { transform: 'rotate(360deg)', opacity: '1' },
					},
					'spin-reverse': {
						from: { transform: 'rotate(360deg)' },
					},
				},
				animation: {
					technologies: 'technologies 15s linear infinite',
					tape: 'tape 15s linear infinite',
					'spin-reverse': 'spin-reverse 15s linear infinite',
					orbit: 'orbit 120s linear infinite',
					'orbit-pulse': 'orbit-pulse 5s linear infinite',
				},
				screens: {
					xs: '380px',
					'2xl': '1440px',
					'3xl': '2560px',
				},
			},
			fontSize: {
				xs: ['1.2rem', { lineHeight: '1.6rem' }],
				sm: ['1.4rem', { lineHeight: '2rem' }],
				base: ['1.6rem', { lineHeight: '2.4rem' }],
				lg: ['1.8rem', { lineHeight: '2.8rem' }],
				xl: ['2rem', { lineHeight: '2.8rem' }],
				'2xl': ['2.4rem', { lineHeight: '3.2rem' }],
				'3xl': ['3rem', { lineHeight: '3.6rem' }],
				'4xl': ['3.6rem', { lineHeight: '4rem' }],
				'5xl': ['4.8rem', { lineHeight: '4rem' }],
				'6xl': ['6rem', { lineHeight: '4.8rem' }],
				'7xl': ['7.2rem', { lineHeight: '6rem' }],
			},
			borderRadius: {
				none: '0rem',
				sm: '0.2rem',
				DEFAULT: '0.4rem',
				md: '0.6rem',
				lg: '0.8rem',
				xl: '1.2rem',
				'2xl': '1.6rem',
				'3xl': '2.4rem',
				full: '999rem',
			},
			spacing: {
				0: '0rem',
				0.1: '0.1rem',
				0.5: '0.2rem',
				1: '0.4rem',
				1.5: '0.6rem',
				2: '0.8rem',
				2.5: '1rem',
				3: '1.2rem',
				3.5: '1.4rem',
				4: '1.6rem',
				5: '2rem',
				6: '2.4rem',
				7: '2.8rem',
				8: '3.2rem',
				9: '3.6rem',
				10: '4rem',
				11: '4.4rem',
				12: '4.8rem',
				14: '5.6rem',
				16: '6.4rem',
				18: '7.2rem',
				20: '8rem',
				24: '9.6rem',
				28: '11.2rem',
				32: '12.8rem',
				36: '14.4rem',
				40: '16rem',
				44: '17.6rem',
				48: '19.2rem',
				52: '20.8rem',
				56: '22.4rem',
				60: '24rem',
				64: '25.6rem',
				72: '28.8rem',
				80: '32rem',
				96: '38.4rem',
				98: '51.2rem',
				100: '64rem',
			},
			colors: {
				background: 'hsl(var(--color-background) / <alpha-value>)',
				foreground: 'hsl(var(--color-foreground) / <alpha-value>)',

				border: 'hsl(var(--color-border) / <alpha-value>)',
				input: 'hsl(var(--color-input) / <alpha-value>)',
				ring: 'hsl(var(--color-ring) / <alpha-value>)',

				primary: {
					DEFAULT: 'hsl(var(--color-primary) / <alpha-value>)',
					foreground: 'hsl(var(--color-primary-foreground) / <alpha-value>)',
				},

				secondary: {
					DEFAULT: 'hsl(var(--color-secondary) / <alpha-value>)',
					foreground: 'hsl(var(--color-secondary-foreground) / <alpha-value>)',
				},

				card: {
					DEFAULT: 'hsl(var(--color-card) / <alpha-value>)',
					foreground: 'hsl(var(--color-card-foreground) / <alpha-value>)',
				},

				popover: {
					DEFAULT: 'hsl(var(--color-popover) / <alpha-value>)',
					foreground: 'hsl(var(--color-popover-foreground) / <alpha-value>)',
				},

				muted: {
					DEFAULT: 'hsl(var(--color-muted) / <alpha-value>)',
					foreground: 'hsl(var(--color-muted-foreground) / <alpha-value>)',
				},

				accent: {
					DEFAULT: 'hsl(var(--color-accent) / <alpha-value>)',
					foreground: 'hsl(var(--color-accent-foreground) / <alpha-value>)',
				},

				destructive: {
					DEFAULT: 'hsl(var(--color-destructive) / <alpha-value>)',
					foreground:
						'hsl(var(--color-destructive-foreground) / <alpha-value>)',
				},

				success: {
					DEFAULT: 'hsl(var(--color-success) / <alpha-value>)',
					foreground: 'hsl(var(--color-success-foreground) / <alpha-value>)',
				},

				warning: {
					DEFAULT: 'hsl(var(--color-warning) / <alpha-value>)',
					foreground: 'hsl(var(--color-warning-foreground) / <alpha-value>)',
				},

				info: {
					DEFAULT: 'hsl(var(--color-info) / <alpha-value>)',
					foreground: 'hsl(var(--color-info-foreground) / <alpha-value>)',
				},

				chart1: 'hsl(var(--color-chart-1) / <alpha-value>)',
				chart2: 'hsl(var(--color-chart-2) / <alpha-value>)',
				chart3: 'hsl(var(--color-chart-3) / <alpha-value>)',
				chart4: 'hsl(var(--color-chart-4) / <alpha-value>)',
				chart5: 'hsl(var(--color-chart-5) / <alpha-value>)',
			},
		},
	},
);

export default theme;
