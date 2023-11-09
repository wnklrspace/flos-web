import { DAILY_TYPE, Daily } from '../../../../types/dailies';
import { MEDIA_TYPE } from '../../../../types/media';

const USO: Daily = {
	type: DAILY_TYPE.IMAGE,
	title: 'November 9, 2023',
	description: 'USO (Unbekanntes Steck Objekt)',
	media: {
		type: MEDIA_TYPE.IMAGE,
		url: '/dailies/2023/11/09.jpeg',
		alt: 'Drawing of a USO (Unbekanntes Steck Objekt)',
		width: 960,
		height: 1280,
	},
};

export default USO;
