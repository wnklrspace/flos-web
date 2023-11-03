enum DAILY_TYPE {
	IMAGE = 'image',
	RECOMMENDATION = 'recommendation',
	TEXT = 'text',
}

interface DailyContent {
	type: DAILY_TYPE;
	title: string;
	description: string;
}

interface DailyImageContent extends DailyContent {
	type: DAILY_TYPE.IMAGE;
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
	text: string;
}

type Daily = DailyImageContent | DailyRecommendationContent | DailyTextContent;

export type {
	Daily,
	DailyContent,
	DailyImageContent,
	DailyRecommendationContent,
	DailyTextContent,
};
export { DAILY_TYPE };
