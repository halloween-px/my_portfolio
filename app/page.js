'use client'
import { useMainContext } from '@/components/context/MainContext'

const Hero = () => {
	const { userParams } = useMainContext()

	return (
		<div className='h-full flex items-center relative'>
			<div className='p-12'>
				<h5 className='text-base-600 mb-4 tracking-[2px] uppercase text-main'>
					Frontend developer
				</h5>
				<h2 className='text-[32px] font-bold'>
					Привет, меня зовут
					<span className='text-main'>{userParams.name}</span>
					<br /> Добро пожаловать
				</h2>
			</div>
			<img
				src='/my_portfolio/resources/main.png'
				className='w-auto h-[335px] absolute top-[50%] right-[15px] translate-y-[-50%]'
				alt=''
			/>
		</div>
	)
}

export default Hero
