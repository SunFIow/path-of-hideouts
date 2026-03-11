import { AppProvider } from '@/context/app-context';
import { ThemeProvider } from '@/context/theme-provider';
import Logger from '@/lib/Logger';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
	subsets: ['latin'],
	variable: '--font-manrope'
});

const cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-cormorant'
});

export const metadata: Metadata = {
	title: 'Path of Hideouts',
	description: 'Import Path of Exile hideouts, save reusable modules, and remix them into new hideouts.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	Logger.log('Layout');

	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${manrope.variable} ${cormorant.variable}`}>
				<AppProvider>
					<ThemeProvider defaultTheme='system' enableSystem disableTransitionOnChange>
						{children}
					</ThemeProvider>
				</AppProvider>
			</body>
		</html>
	);
}
