'use client'

import {useMainContext} from "/components/context/MainContext";
import Title from "/components/shared/Title/Title";
import InfoList from "/components/shared/InfoList/InfoList";
import ButtonMain from "/components/shared/Ui/BtnPrimary";

const AboutPage = () => {
	const { userParams } = useMainContext()

	return (
		<section className='about p-6'>
			<div className='container'>
				<div className='flex gap-6'>
					<div className='w-2/4'>
						<div className='image-area'>
							<img
								src={`${userParams.img}`}
								className='image-full rounded-sm'
								alt='#'
							/>
						</div>
					</div>
					<div className='w-2/4'>
						<Title title={'Обо Мне'} />
						<InfoList params={userParams} />
						<ButtonMain text={'Скачать резюме'} />
					</div>
				</div>
			</div>
			<div className='about-content pt-5 mt-5'>
				<p>
					Здравствуйте! Меня зовут Руслан, рабоют в веб студии Vegas. Занимаюсь
					frontend разработкай второй год , в портфолио более 50 проектов.
				</p>
				<p>
					В свободное от работы время занимаюсь изучением ReactJs, NextJs,
					Express
				</p>
			</div>
			<div className='pt-5 mt-5'>
				<Title title={'Навыки'} />
				{/*<ScrollerList info={userParams.experience} />*/}
			</div>
		</section>
	)
}

export default AboutPage
