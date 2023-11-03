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
		red: 'var(--color-red)',
	},
};

export default theme;
