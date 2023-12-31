import { Metadata, NextPage } from 'next';
import HomeScreen from '@/screens/HomeScreen';

export const metadata: Metadata = {
	title: 'Flo does partly exist',
	description: 'Generated by a computer; displayed on a screen.',
};

const Home: NextPage = () => {
	return <HomeScreen />;
};

export default Home;
