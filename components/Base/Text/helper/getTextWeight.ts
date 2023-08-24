import { WeightTypes } from '../Types';

function getTextWeight(weight: WeightTypes) {
	switch (weight) {
		case 'bold':
			return `
				font-weight: 700;
		`;
		case 'semi':
			return `
				font-weight: 500;
		`;
		case 'regular':
			return `
				font-weight: 400;
		`;
		case 'light':
			return `
				font-weight: 200;
		`;

		default:
			``;
	}
}

export default getTextWeight;
