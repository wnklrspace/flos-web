import { DAILY_TYPE, Daily } from '../../../../types/dailies';
import { MEDIA_TYPE } from '../../../../types/media';

const DetachedSelf: Daily = {
	type: DAILY_TYPE.IMAGE,
	title: 'November 23, 2023',
	description: 'Detached self perceived perception about once self.',
	media: {
		type: MEDIA_TYPE.IMAGE,
		url: '/dailies/2023/11/23.jpeg',
		alt: 'Drawing of a person with a detached head',
		width: 960,
		height: 1280,
	},
};

export default DetachedSelf;
