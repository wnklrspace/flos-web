import { DAILY_TYPE, Daily } from '../../../../types/dailies';
import { MEDIA_TYPE } from '../../../../types/media';

const Vegetable: Daily = {
	type: DAILY_TYPE.IMAGE,
	title: 'November 5, 2023',
	description: 'almost 27, almost old vegetable',
	media: {
		type: MEDIA_TYPE.IMAGE,
		url: '/dailies/2023/11/05.jpeg',
		alt: 'Drawing of a mixture between a men and a vegetable.',
		width: 960,
		height: 1280,
	},
};

export default Vegetable;
