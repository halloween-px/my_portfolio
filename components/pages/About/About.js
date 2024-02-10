'use client'

import {useMainContext} from "@/components/context/MainContext";
import Title from "@/components/shared/Title/Title";
import InfoList from "@/components/shared/InfoList/InfoList";
import ButtonMain from "@/components/shared/Ui/BtnPrimary";

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
                    frontend разработкай второй год.
                </p>
                <p className={'mt-4 mb-2'}><strong>В мои задачи на текущем месте работы входят:</strong></p>
                <ul>
                    <li>Верстка макетов figma для eCommerce-проектов различной сложности.</li>
                    <li>Разработка интерактивных элементов, калькуляторов, конфигураторов и интеграция с внешними сервисами (нативный JavaScript).  Создание легко масштабируемых и оптимизированных компонентов.</li>
                    <li>Реализация клиентской логики</li>
                    <li>Адаптация интерфейсов для различных устройств и браузеров</li>
                    <li>Интеграция с бэкендом и работа с  REST API</li>
                    <li>Взаимодействие с командой дизайнеров, backend разработчиком, менеджерами.</li>
                </ul>
                <p className={'mt-3'}>
                    В свободное от работы время занимаюсь изучением ReactJs, NextJs, Express
                </p>
            </div>
            <div className='pt-5 mt-5 about-content'>
                <Title title={'Навыки'} />
                <ul>
                    <li>Глубокие знания HTML5, CSS3. Кроссбраузерная верстка сложных компонентов. Опыт работы с препроцессорами стилей SASS, LESS. Опыт создания CSS-анимаций.</li>
                    <li>Хорошие знания JavaScript, понимание работы React</li>
                    <li>Понимание и опыт работы с инструментом управления состоянием Redux</li>
                    <li>Опыт работы с Node.js</li>
                    <li>Опыт работы с Bootstrap</li>
                    <li>Опыт работы с Tailwind</li>
                    <li>Опыт использования Pixel Perfect</li>
                    <li>Опыт использования сборщика Webpack</li>
                    <li>Опыт работы с системой контроля Git</li>
                </ul>
            </div>
        </section>
    )
}

export default AboutPage
