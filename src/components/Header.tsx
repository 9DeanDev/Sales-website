import { HNav1, HNav2 } from './HNav'
import Styles from './Header.module.scss'
import SearchBar from './SearchBar';
import Logo from './Logo';
import Cart from './Cart';
type Props = {}

const Header = (props: Props) => {
    return (
        <div className={`${Styles.container} `}>
            {/* <div className='container'> */}
            <div className={`${Styles.left} col-1`}>
                <Logo />
            </div>
            <div className={`${Styles.center} col-7`}>
                <SearchBar />
                <HNav2 />
            </div >
            <div className={`${Styles.right} col-4`}>
                <HNav1 />
                <Cart />
            </div>
            {/* </div> */}

            {/* <HNav /> */}
        </div >
    )
}

export default Header