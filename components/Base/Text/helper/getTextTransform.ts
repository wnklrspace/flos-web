import { TransformTypes } from '../Types';

function getTextTransform(transform: TransformTypes | undefined) {
	switch (transform) {
		case 'uppercase':
			return `
				text-transform: uppercase;
		`;
		case 'lowercase':
			return `
				text-transform: lowercase;
		`;

		default:
			``;
	}
}

export default getTextTransform;
