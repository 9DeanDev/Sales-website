import Styles from './HNavChild.module.scss'

type Props = {
    icon?: React.ReactNode;
    text?: string;
}

const HNavChild = ({ icon, text }: Props) => {
    return (
        <a href='' className={Styles.container}>
            <div className={Styles.icon}>
                {icon}
            </div>
            <div className={Styles.text}>
                {text}
            </div>
        </a>
    )
}

export default HNavChild