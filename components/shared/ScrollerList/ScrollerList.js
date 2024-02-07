"use client"
import cls from './ScrollerList.module.scss';

const ScrollerList = ({ info }) => {
    return (
        <div className={`${cls.list}`}>
            <div className={`relative`}>
                {info.map((item, index) => {
                    return (
                        <div className='mb-10' key={index}>
                            <div className={`${cls.content}`}>
                                <div className="title">{item.title}</div>
                                <div className="text">{item.text}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ScrollerList;