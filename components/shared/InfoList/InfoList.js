import cls from './InfoList.module.scss';

const InfoList = ({params}) => {
    return (
        <>
            <ul className={`${cls.listArea} flex flex-col`}>
                {!!params.name &&
                    <li className={`${cls.listItem}`}>
                        <span className={`${cls.title}`}>Имя:</span>
                        <span>{params.name}</span>
                    </li>
                }
                {!!params.family &&
                    <li className={`${cls.listItem}`}>
                        <span className={`${cls.title}`}>Фамилия:</span>
                        <span>{params.family}</span>
                    </li>
                }
                {!!params.birthdate &&
                    <li className={`${cls.listItem}`}>
                        <span className={`${cls.title}`}>День рождения:</span>
                        <span>{params.birthdate}</span>
                    </li>
                }
                {!!params.town &&
                    <li className={`${cls.listItem}`}>
                        <span className={`${cls.title}`}>Город:</span>
                        <span>{params.town}</span>
                    </li>
                }
                {!!params.phone &&
                    <li className={`${cls.listItem}`}>
                        <span className={`${cls.title}`}>Телефон:</span>
                        {params.phone.map((el) => {
                            return (
                                <a href="#" className={`${cls.phone}`}>{el}</a>
                            )
                        })}
                    </li>
                }
                {!!params.email &&
                    <li className={`${cls.listItem}`}>
                        <span className={`${cls.title}`}>Почта:</span>
                        <a href="#">{params.email}</a>
                    </li>
                }
                {!!params.telegramm &&
                    <li className={`${cls.listItem}`}>
                        <span className={`${cls.title}`}>Телеграм:</span>
                        <a href="#">{params.telegramm}</a>
                    </li>
                }
                {!!params.skype &&
                    <li className={`${cls.listItem}`}>
                        <span className={`${cls.title}`}>Скайп: </span>
                        <a href="#">{params.skype}</a>
                    </li>
                }
            </ul>
        </>
    )
}

export default InfoList;