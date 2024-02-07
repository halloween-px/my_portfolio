import Link from "next/link";
import { useMainContext } from "../../context/MainContext";

const Navigation = () => {
    const { navigation } = useMainContext();
    return (
        <ul className="list h-full flex flex-wrap">
            {navigation.map((el, index) => {
                return (
                    <li key={`navigation${index}`}>
                        <Link href={el.href} className="flex w-[100px] flex-col overflow-hidden group/item items-center justify-center gap-y-2">
                            <span className="h-[20px] block w-auto">
                                <img src={`${el.icon}`} className="image-full" alt="" />
                            </span>
                            <span className="text-tiny-500 block translate-y-[200%] transition-base group-hover/item:translate-y-[0%]">
                                {el.title}
                            </span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Navigation;