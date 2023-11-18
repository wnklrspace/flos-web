import { DAILY_TYPE, Daily } from '../../../../types/dailies';
import { MEDIA_TYPE } from '../../../../types/media';

const Burning: Daily = {
	type: DAILY_TYPE.IMAGE,
	title: 'November 17, 2023',
	description: 'Und für was brennst du?',
	media: {
		type: MEDIA_TYPE.IMAGE,
		url: '/dailies/2023/11/17.jpeg',
		alt: 'Little poem',
		width: 939,
		height: 1280,
	},
};

export default Burning;
