import Styles from './HNavChild.module.scss'

type Props = {
    icon?: React.ReactNode;
    text?: React.ReactNode;
}

const HNavChild1 = ({ icon, text }: Props) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.icon}>
                {icon}
            </div>
            <div className={Styles.text}>
                {text}
            </div>
        </div>
    )
}
const HNavChild2 = ({ icon, text }: Props) => {
    return (
        <a href='' className={Styles.container2}>
            <div className={Styles.icon}>
                {icon}
            </div>
            <div className={Styles.text}>
                {text}
            </div>
        </a>
    )
}
export { HNavChild1, HNavChild2 };