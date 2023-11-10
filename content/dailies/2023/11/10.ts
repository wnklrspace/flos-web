import { DAILY_TYPE, Daily } from '../../../../types/dailies';
import { MEDIA_TYPE } from '../../../../types/media';

const LittlePoem: Daily = {
	type: DAILY_TYPE.IMAGE,
	title: 'November 10, 2023',
	description: 'written at 03:05, uploaded at 03:14',
	media: {
		type: MEDIA_TYPE.IMAGE,
		url: '/dailies/2023/11/10.jpg',
		alt: 'Little poem',
		width: 1200,
		height: 1200,
	},
};

export default LittlePoem;
