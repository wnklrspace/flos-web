import { WhiteSpaceTypes } from '../Types';

function getTextWhiteSpace(whiteSpace: WhiteSpaceTypes | undefined) {
	switch (whiteSpace) {
		case 'pre-line':
			return `
				white-space: pre-line;
		`;
		case 'nowrap':
			return `
				white-space: nowrap;
		`;
		case 'pre-wrap':
			return `
				white-space: pre-wrap;
		`;

		default:
			``;
	}
}

export default getTextWhiteSpace;
