'use client';

import { ThemeProvider as NextThemesProvider, ThemeProviderProps as NextThemesProviderProps } from 'next-themes';

export function ThemeProvider({ children, ...props }: Readonly<NextThemesProviderProps>) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
