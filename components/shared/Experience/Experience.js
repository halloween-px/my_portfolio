import {useMainContext} from "@/components/context/MainContext";

const Experience = () => {
    const {userParams} = useMainContext();
    return (
        <div className={'experience mb-auto mt-auto pb-[60px]'}>
            <ul className={'flex gap-2 justify-center flex-wrap'}>
                {userParams.experience.layout.map((el, index) => {
                    return <li key={index}>{el}</li>
                })}
            </ul>
            <ul className={'flex gap-2 justify-center flex-wrap'}>
                {userParams.experience.client.map((el, index) => {
                    return <li key={index}>{el}</li>
                })}
            </ul>
            <ul className={'flex gap-2 justify-center flex-wrap'}>
                {userParams.experience.server.map((el, index) => {
                    return <li key={index}>{el}</li>
                })}
            </ul>
        </div>
    )
}

export default Experience;