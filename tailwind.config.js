module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
	important: true,
  plugins: [],
  variants: {},
	theme: {
		extend: {
      fontFamily: {
        'primary': ['var(--primary-font-family)'],
			},
      fontSize: {
        'h1': ['var(--h1-font-size)', {
          lineHeight: 'var(--h1-line-height)',
          fontWeight: 'var(--h1-font-weight)'
        }],
        'h2': ['var(--h2-font-size)', {
          lineHeight: 'var(--h2-line-height)',
          fontWeight: 'var(--h2-font-weight)'
        }],
        'h3': ['var(--h3-font-size)', {
          lineHeight: 'var(--h3-line-height)',
          fontWeight: 'var(--h3-font-weight)'
        }],
        'h4': ['var(--h4-font-size)', {
          lineHeight: 'var(--h4-line-height)',
          fontWeight: 'var(--h4-font-weight)'
        }],
        'h5': ['var(--h5-font-size)', {
          lineHeight: 'var(--h5-line-height)',
          fontWeight: 'var(--h5-font-weight)'
        }],
        'h6': ['var(--h6-font-size)', {
          lineHeight: 'var(--h6-line-height)',
          fontWeight: 'var(--h6-font-weight)'
        }],
        'body': ['var(--body-font-size)', {
          lineHeight: 'var(--body-line-height)',
          fontWeight: 'var(--body-font-weight)'
        }],
        'label': ['var(--label-font-size)', {
          lineHeight: 'var(--label-line-height)',
          fontWeight: 'var(--label-font-weight)'
        }],
        'small': ['var(--small-font-size)', {
          lineHeight: 'var(--small-line-height)',
          fontWeight: 'var(--small-font-weight)'
        }]
      },
			colors: {
        'inherit': 'inherit',
				'black': 'var(--color-black)',
				'gray-001': 'var(--color-gray-001)',
				'gray-002': 'var(--color-gray-002)',
				'gray-003': 'var(--color-gray-003)',
				'gray-004': 'var(--color-gray-004)',
				'gray-005': 'var(--color-gray-005)',
				'white': 'var(--color-white)',
				'primary': 'var(--color-primary)',
				'secondary': 'var(--color-secondary)'
			},
      spacing: {
				'margin': 'var(--margin)',
				'default': 'var(--gap)',
				'x0.5': 'calc(var(--gap) / 2)',
				'x1': 'calc(var(--gap) * 1)',
				'x1.5': 'calc(var(--gap) * 1.5)',
				'x2': 'calc(var(--gap) * 2)',
				'x2.5': 'calc(var(--gap) * 2.5)',
				'x3': 'calc(var(--gap) * 3)',
				'x3.5': 'calc(var(--gap) * 3.5)',
				'x4': 'calc(var(--gap) * 4)',
				'x4.5': 'calc(var(--gap) * 4.5)',
				'x5': 'calc(var(--gap) * 5)',
				'x5.5': 'calc(var(--gap) * 5.5)',
				'x6': 'calc(var(--gap) * 6)',
				'x6.5': 'calc(var(--gap) * 6.5)',
				'x7': 'calc(var(--gap) * 7)',
				'x7.5': 'calc(var(--gap) * 7.5)',
				'x8': 'calc(var(--gap) * 8)',
				'x8.5': 'calc(var(--gap) * 8.5)',
				'x9': 'calc(var(--gap) * 9)',
				'x9.5': 'calc(var(--gap) * 9.5)',
				'x10': 'calc(var(--gap) * 10)',
				'x10.5': 'calc(var(--gap) / 10.5)',
				'x11': 'calc(var(--gap) * 11)',
				'x11.5': 'calc(var(--gap) / 11.5)',
				'x12': 'calc(var(--gap) * 12)',
				'x12.5': 'calc(var(--gap) / 12.5)',
				'x13': 'calc(var(--gap) * 13)',
				'x13.5': 'calc(var(--gap) / 13.5)',
				'x14': 'calc(var(--gap) * 14)',
				'x14.5': 'calc(var(--gap) / 14.5)',
				'x15': 'calc(var(--gap) * 15)',
				'x15.5': 'calc(var(--gap) / 15.5)',
				'x16': 'calc(var(--gap) * 16)',
				'x16.5': 'calc(var(--gap) / 16.5)',
				'x17': 'calc(var(--gap) * 17)',
				'x17.5': 'calc(var(--gap) / 17.5)',
				'x18': 'calc(var(--gap) * 18)',
				'x18.5': 'calc(var(--gap) / 18.5)',
				'x19': 'calc(var(--gap) * 19)',
				'x19.5': 'calc(var(--gap) / 19.5)',
				'x20': 'calc(var(--gap) * 20)',
				'x20.5': 'calc(var(--gap) / 20.5)',
      },
			borderWidth: {
				'1': '1px'
			},
			gridTemplateColumns: {
				'auto': 'auto',
				'min': 'min-content',
				'max': 'max-content',
			},
			gridTemplateRows: {
				'auto': 'auto',
				'min': 'min-content',
				'max': 'max-content',
			},
			screens: {
				'mobile-sm': '360px',
				'mobile-md': '516px',
				'tablet': '768px',
				'laptop': '1024px',
				'desktop': '1280px',
				'tv': '1920px',
			},
			borderRadius: {
				'default': 'var(--border-radius)'
			}
		},
	}
}