import Styles from './Logo.module.scss'
import logo from '../assets/logotiki.png'
type Props = {}

const Logo = (props: Props) => {
    return (
        <a href='' className={Styles.container}>
            <img src={logo} />
        </a>
    )
}

export default Logo