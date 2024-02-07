'use client'
import { useContext } from 'react'
import { ThemeContext } from './ThemeSwitcherProvider'

export const useTheme = () => {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = () => {
		const themes = theme === 'dark' ? 'light' : 'dark'
		setTheme(themes)
		localStorage.setItem('theme', themes)
	}

	return {
		theme,
		toggleTheme,
	}
}
