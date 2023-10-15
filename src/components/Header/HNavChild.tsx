import { Link } from 'react-router-dom';
import Styles from './HNavChild.module.scss'

type Props = {
    icon?: React.ReactNode;
    text?: React.ReactNode;
    img?: string;
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
        <Link to='/ProductDetails' className={Styles.container2}>
            <div className={Styles.icon}>
                {icon}
            </div>
            <div className={Styles.text}>
                {text}
            </div>
        </Link>
    )
}

const HNavChild3 = ({ icon, text, img }: Props) => {
    return (
        <Link to='/ProductDetails' className={Styles.container3}>
            <div className={Styles.img}>
                <img src={img} />
            </div>
            <div className={Styles.text}>
                {text}
            </div>
        </Link>
    )
}
export { HNavChild1, HNavChild2, HNavChild3 };