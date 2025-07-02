import { Analytics } from '@vercel/analytics/react';
import StyledComponentsRegistry from './registry';
import Header from '@/components/Header';
import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<StyledComponentsRegistry>
			<html lang='en'>
				<body>
					<Header />
					<main>{children}</main>
				</body>
			</html>
			<Analytics />
		</StyledComponentsRegistry>
	);
}
