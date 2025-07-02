import { Metadata, NextPage } from 'next';
import Feed from '@/screens/Feed';

export const metadata: Metadata = {
	title:
		'Collection of random thoughts, images, drawings, snippets, shorts and ideas',
	description:
		'A collection feed of random things, thoughts, images, drawings, snippets, shorts and ideas.',
};

const Home: NextPage = () => {
	return <Feed />;
};

export default Home;
