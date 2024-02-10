'use client'
import { createContext, useContext } from 'react'
import { routes } from '/config/routing/routing'

const MainContext = createContext({})

export const MainProvider = ({ children }) => {
	const userParams = {
		img: '/my_portfolio/resources/avatar.jpg',
		phones: '+7(996)973-26-06',
		email: 'koryakhovruslan9498@mail.ru',
		telegramm: 'https://t.me/Abracadabrucum',
		skype: 'live:koryakhovruslan9498',
		name: 'Руслан',
		family: 'Коряхов',
		surname: 'Евгеньевич',
		birthdate: '24.11.1994',
		town: 'Калуга',
		experience: {
			layout: ['html', 'css', 'scss', 'bootstrap', 'tailwind'],
			client: ['js', 'react', 'next', 'redux',],
			server: ['nodejs', 'express']
		},
	}

	const portfolios = [
		{
			id: 1,
			subtitle: "Корпоративный сайт",
			title: "Театр кукол",
			image: '/my_portfolio/portfolio/puppet.jpg',
			link: 'https://puppet40.ru/',
		},
		{
			id: 2,
			subtitle: "Корпоративный сайт",
			title: "Калуга Инк",
			image: '/my_portfolio/portfolio/tatu.jpg',
			link: 'https://kalugaink.ru/'
		},
		{
			id: 3,
			subtitle: "Интернет магазин",
			title: "Gansta Style Russian",
			link: "https://gangstastylerussian.store/",
			image: '/my_portfolio/portfolio/gansta.jpg',
		},
		{
			id: 4,
			subtitle: "Лендинг",
			title: "АльянсГрупп",
			link: 'https://alyance-grup.ru/',
			image: '/my_portfolio/portfolio/alyance.jpg',
		},
		{
			id: 5,
			subtitle: "Лендинг",
			title: "Алла Михайлова",
			link: 'https://allamikhailova.ru/',
			image: '/my_portfolio/portfolio/mikhailova.jpg',
		},
		{
			id: 6,
			subtitle: "Корпоративный сайт",
			title: "BestFood",
			link: 'https://bestfood.catering/',
			image: '/my_portfolio/portfolio/bestFood.jpg',
		},
	]

	const navigation = [
		{
			title: 'Главная',
			icon: '/my_portfolio/icons/home.png',
			href: routes.main,
		},
		{
			title: 'Обо мне',
			icon: '/my_portfolio/icons/about.png',
			href: routes.about,
		},
		{
			title: 'Портфолио',
			icon: '/my_portfolio/icons/portfolio.png',
			href: routes.portfolios,
		},
	]

	const paramsInfo = {
		phone: {
			title: '+7 (996) 973-26-06',
			link: 'tel:+7 (996) 973-26-06',
		},
		social: [
			{
				title: 'vkontakte',
				icon: '/my_portfolio/icons/vk.svg',
				link: '#',
			},
			{
				title: 'telegram',
				icon: '/my_portfolio/icons/telegram.svg',
				link: 'https://t.me/agvento1',
			},
		],
	}

	const value = {
		userParams,
		navigation,
		paramsInfo,
		portfolios,
	}

	return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}

export const useMainContext = () => useContext(MainContext)
