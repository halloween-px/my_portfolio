import cls from './Title.module.scss';

const Title = ({ title }) => {
    return (
        <h3 className={cls.title}>
            {title}
        </h3>
    )
}

export default Title