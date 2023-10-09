import { HNav1, HNav2 } from './HNav'
import Styles from './Header.module.scss'
import SearchBar from './SearchBar';
import Logo from './Logo';
type Props = {}

const Header = (props: Props) => {
    return (
        <div className={`${Styles.container} row`}>
            <div className={`${Styles.left} col-1`}>
                <Logo />
            </div>
            <div className={`${Styles.cent} col-7`}>
                <SearchBar />
                <HNav2 />
            </div >
            <div className={`${Styles.righ} col-4`}>
                <HNav1 />
            </div>
            {/* <HNav /> */}
        </div >
    )
}

export default Header