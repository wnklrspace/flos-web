import { TextAlignTypes } from '../Types';

function getTextAlignment(textAlign: TextAlignTypes) {
	switch (textAlign) {
		case 'left':
			return `
				text-align: left;
		`;
		case 'center':
			return `
				text-align: center;
		`;
		case 'right':
			return `
				text-align: right;
		`;
		case 'justify':
			return `
				text-align: justify;
		`;

		default:
			``;
	}
}

export default getTextAlignment;
