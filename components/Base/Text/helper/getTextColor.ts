import theme from '../../../../theme';
import { TextColorTypes } from '../Types';

function getTextColor(textColor: TextColorTypes, hasHoverEffect: boolean) {
	switch (textColor) {
		case 'black':
			return `
				color: ${theme.colors.black};

				${
					hasHoverEffect &&
					`
					cursor: pointer;

					&:hover {
						color: ${theme.colors.darkGray};
					};
				`
				}

				`;
		case 'white':
			return `color: ${theme.colors.white};
			${
				hasHoverEffect &&
				`
				cursor: pointer;

				&:hover {
					color: ${theme.colors.darkGray};
				};
			`
			}
			`;
		case 'gray':
			return `color: ${theme.colors.darkGray};

			${
				hasHoverEffect &&
				`
				cursor: pointer;

				&:hover {
					color: ${theme.colors.black};
				};
			`
			}`;
		default:
			return ``;
	}
}

export default getTextColor;
