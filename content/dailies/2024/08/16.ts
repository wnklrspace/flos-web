import { DAILY_TYPE, Daily } from '../../../../types/dailies';
import { MEDIA_TYPE } from '../../../../types/media';

const Begegnungen: Daily = {
	type: DAILY_TYPE.TEXT,
	text: [
		`weil wir uns nicht kennen, aber schön, dass es uns beiden so geht`,
		`Wir reden und tanzen und reden und es ist klar, dass wir uns heute nicht näher kommen. Fair enough, denke ich mir. Ich genieße diesen Moment mit dir, denke ich mir. Es fühlt sich leicht an, die Musik ist nicht schlecht und dir beim tanzen zuzusehen macht mich gerade glücklich. Das reicht doch oder?`,
		`Ich denke mir, dass ich dich gerne küssen würde und du sagst mir, dass du mich gerne küssen würdest. Du schaust zu mir und für eine Weile nicht wieder weg. Diese Art von Blick, bei dem ich nervös werde, wenn ich jemanden nicht kenne und schön finde und ich kenne dich nicht und finde dich schön. In diesem Moment fühlt sich das vertraut an. Als würdest du meiner Unsicherheit Halt geben. Du sagst mir, dass du mich in deinen Erinnerungen behalten möchtest. Dass du dir mein Gesicht merken möchtest, weil du den Moment und mich schön findest und die Befürchtung hast, mich zu schnell wieder zu vergessen, weil wir uns nicht kennen und in ein paar Stunden wieder zu Fremden werden." Die paar Stunden sind jetzt ein paar Wochen her und ich denke noch an dich, denke ich mir und schließ meine Notizen wieder.`,
	],
	title: 'August 16, 2024',
};

const BegegnungenVisual: Daily = {
	type: DAILY_TYPE.IMAGE,
	title: 'August 16, 2024',
	description:
		'"weil wir uns nicht kennen, aber schön, dass es uns beiden so geht" on canvas',
	media: {
		type: MEDIA_TYPE.IMAGE,
		url: '/dailies/2024/08/begegnungen.jpg',
		alt: 'A collage',
		width: 1080,
		height: 1920,
	},
};

export { Begegnungen, BegegnungenVisual };
