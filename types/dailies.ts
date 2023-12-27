enum DAILY_TYPE {
	AUDIO = 'audio',
	IMAGE = 'image',
	RECOMMENDATION = 'recommendation',
	TEXT = 'text',
}

interface DailyContent {
	type: DAILY_TYPE;
	title: string;
}

interface DailyImageContent extends DailyContent {
	type: DAILY_TYPE.IMAGE;
	description: string;
	media: {
		type: 'image';
		url: string;
		alt: string;
		width?: number;
		height?: number;
	};
}

interface DailyRecommendationContent extends DailyContent {
	type: DAILY_TYPE.RECOMMENDATION;
	recommendation: {
		title: string;
		url: string;
		description: string;
	};
}

interface DailyTextContent extends DailyContent {
	type: DAILY_TYPE.TEXT;
	text: string[];
	title: string;
}

interface DailyAudioContent extends DailyContent {
	type: DAILY_TYPE.AUDIO;
	text: string;
	file: string;
}

type Daily =
	| DailyImageContent
	| DailyRecommendationContent
	| DailyTextContent
	| DailyAudioContent;

export type {
	Daily,
	DailyContent,
	DailyImageContent,
	DailyRecommendationContent,
	DailyTextContent,
};
export { DAILY_TYPE };
