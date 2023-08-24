import theme from '../../../../theme';
import { SizeTypes } from '../Types';

function getTextSize(size: SizeTypes) {
	switch (size) {
		case 'landing':
			return `
				font-size: ${theme.fontSize.l};

				${theme.breakpoints.s} {
						font-size: ${theme.fontSize.xl}};
				}

					${theme.breakpoints.m} {
						font-size: ${theme.fontSize.xxl}};
					}

					${theme.breakpoints.l} {
						font-size: ${theme.fontSize.xxxl}};
						line-height: 1;
					}
		`;
		case 'xxxl':
			return `
			font-size: ${theme.fontSize.l};

			${theme.breakpoints.s} {
					font-size: ${theme.fontSize.xl}};
			}

				${theme.breakpoints.m} {
					font-size: ${theme.fontSize.xxl}};
				}

				${theme.breakpoints.l} {
					font-size: ${theme.fontSize.xxxl}};
					line-height: 1;
				}
		`;
		case 'xxl':
			return `
				font-size: ${theme.fontSize.l};
				letter-spacing: -0.06vw;

				${theme.breakpoints.m} {
					font-size: ${theme.fontSize.xl}};
				}

				${theme.breakpoints.l} {
						font-size: ${theme.fontSize.xxl};
					}
		`;
		case 'xl':
			return `
				font-size: ${theme.fontSize.m};

				${theme.breakpoints.m} {
						font-size: ${theme.fontSize.l};
					}

				${theme.breakpoints.l} {
						font-size: ${theme.fontSize.xl};
					}
		`;
		case 'l':
			return `
				font-size: ${theme.fontSize.s};

				${theme.breakpoints.m} {
						font-size: ${theme.fontSize.m};
					}

				${theme.breakpoints.l} {
						font-size: ${theme.fontSize.l};
					}
		`;
		case 'm':
			return `
				font-size: ${theme.fontSize.xs};

				${theme.breakpoints.m} {
						font-size: ${theme.fontSize.s};
					}

				${theme.breakpoints.l} {
						font-size: ${theme.fontSize.m};
					}
		`;
		case 's':
			return `
				font-size: ${theme.fontSize.xs};

				${theme.breakpoints.m} {
						font-size: ${theme.fontSize.s};
					}
		`;
		default:
			``;
	}
}

export default getTextSize;
