import Link from "next/link";


const CardPortfolio = ({item}) => {
    return (
        <Link href={item.link} className="link-area w-full" target="_blank">
           <span className="portfolios-item">
                    <span className="image-area">
                        <img src={`${item.image}`} alt="#"/>
                    </span>
                    <span className="body-area">
                        <span className="subtitle">{item.subtitle}</span>
                        <span className="title">{item.title}</span>
                    </span>
                </span>
        </Link>
    )
}

export default CardPortfolio;