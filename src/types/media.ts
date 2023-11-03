enum MEDIA_TYPE {
	IMAGE = 'image',
	VIDEO = 'video',
}

interface Media {
	type: MEDIA_TYPE;
	url: string;
	alt: string;
}

interface ImageMedia extends Media {
	type: MEDIA_TYPE.IMAGE;
}

interface VideoMedia extends Media {
	type: MEDIA_TYPE.VIDEO;
}

type MediaContent = ImageMedia | VideoMedia;

export type { Media, MediaContent };
export { MEDIA_TYPE };
