import { DAILY_TYPE, Daily } from '../../../../types/dailies';
import { MEDIA_TYPE } from '../../../../types/media';

const Content: Daily = {
	type: DAILY_TYPE.IMAGE,
	title: 'November 4, 2023',
	description: 'ausgerutscht',
	media: {
		type: MEDIA_TYPE.IMAGE,
		url: '/dailies/2023/11/04.jpeg',
		alt: 'Drawing of a men who is laying on the floor nakedly saying that he will take the stairs the next time.',
		width: 1000,
		height: 1280,
	},
};

export default Content;
