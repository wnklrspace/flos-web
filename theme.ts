const breakpoints = {
	xs: 380,
	s: 576,
	m: 768,
	l: 992,
	xl: 1200,
	xxl: 1400,
	xxxl: 1640,
};

const theme = {
	breakpointsVariables: breakpoints,
	breakpoints: {
		xs: `@media only screen and (min-width: ${breakpoints.xs}px)`,
		s: `@media only screen and (min-width: ${breakpoints.s}px)`,
		m: `@media only screen and (min-width: ${breakpoints.m}px)`,
		l: `@media only screen and (min-width: ${breakpoints.l}px)`,
		xl: `@media only screen and (min-width: ${breakpoints.xl}px)`,
		xxl: `@media only screen and (min-width: ${breakpoints.xxl}px)`,
		xxxl: `@media only screen and (min-width: ${breakpoints.xxxl}px)`,
	},
	fontSize: {
		xxxl: '7.2rem',
		xxl: '4.8rem',
		xl: '3.2rem',
		l: '1.8rem',
		m: '1.4rem',
		s: '1.2rem',
		xs: '1rem',
		xxs: '.8rem',
	},
	colors: {
		white: 'var(--color-white)',
		black: 'var(--color-black)',
		darkGray: 'var(--color-gray-dark)',
		gray: 'var(--color-gray)',
		yellow: {
			100: 'var(--color-yellow-100)',
			125: 'var(--color-yellow-125)',
		},
		blue: {
			100: 'var(--color-blue-100)',
			125: 'var(--color-blue-125)',
		},
		darkBlue: {
			100: 'var(--color-darkblue-100)',
			125: 'var(--color-darkblue-125)',
		},
		orange: {
			100: 'var(--color-orange-100)',
			125: 'var(--color-orange-125)',
		},
		green: {
			100: 'var(--color-green-100)',
			125: 'var(--color-green-125)',
		},
		red: {
			125: 'var(--color-red-125)',
			100: 'var(--color-red-100)',
			75: 'var(--color-red-75)',
			50: 'var(--color-red-50)',
			25: 'var(--color-red-25)',
		},
	},
};

export default theme;
