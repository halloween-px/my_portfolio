import LayoutsMain from '/components/pages/LayoutsMain'
import '../styles/app.scss'
import { Inter } from 'next/font/google'
import ThemeProvider from '/components/shared/ThemeSwither/ThemeSwitcherProvider'
import { MainProvider } from '/components/context/MainContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'portfolio',
	description: 'My portfolio',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} overflow-hidden`}>
				<MainProvider>
					<ThemeProvider>
						<LayoutsMain>{children}</LayoutsMain>
					</ThemeProvider>
				</MainProvider>
			</body>
		</html>
	)
}
