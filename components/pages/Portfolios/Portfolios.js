'use client'
import Title from "@/components/shared/Title/Title";
import CardPortfolio from "@/components/pages/Portfolios/CardPortfolio";
import {useMainContext} from "@/components/context/MainContext";

const Portfolio = () => {
    const {portfolios} = useMainContext();
    return (
        <section className={'portfolios p-6'}>
            <div className="container">
                <Title title={'Мои работы'}/>
                <div className="grid grid-cols-3 gap-4">
                    {portfolios.map((item, index) => {
                        return <CardPortfolio item={item} key={index}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;