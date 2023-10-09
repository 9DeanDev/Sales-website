import Styles from './Logo.module.scss'
import logo from '../assets/logotiki.png'
type Props = {}

const Logo = (props: Props) => {
    return (
        <div className={Styles.container}>
            <img src={logo} />
        </div>
    )
}

export default Logo