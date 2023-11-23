import { Inter, IBM_Plex_Mono } from 'next/font/google';
import StyledComponentsRegistry from './registry';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: '400' });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className={ibmPlexMono.className}>
					<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
				</div>
			</body>
		</html>
	);
}
