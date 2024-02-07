import { useMainContext } from "../../context/MainContext";
import cls from './RightSidebar.module.scss';

const RightSidebar = () => {
    const {paramsInfo} = useMainContext();

    return (
        <section className={`${cls.infoblock} py-6`}>
            <ul className='flex flex-col justify-center w-full'>
                <li className='flex flex-col justify-center items-center'>
                    <span className="text-xl-700">24</span>
                    <span className="text-main">Сентября</span>
                </li>
                <li className='mt-auto flex justify-center'>
                    <span className={`${cls.textArea}`}>Связь со мной</span>
                </li>
                <li className='mt-4 mb-4'>
                    <span className={`${cls.line} bg-main`}></span>
                </li>
                <li className={`${cls.listSocial} flex flex-col mb-auto items-center gap-y-3`}>
                    {paramsInfo.social.map((soc) => {
                        return (
                            <a href={`${soc.link}`} className="w-[30px] block h-auto" key={soc.title}>
                                <img src={soc.icon} alt="" />
                            </a>
                        )
                    })}
                </li>
            </ul>

            <div className={'d-flex'}></div>
        </section>
    )
}

export default RightSidebar;