import Styles from './SearchBar.module.scss'
import { AiOutlineSearch } from 'react-icons/ai';

type Props = {}

const SearchBar = (props: Props) => {
    return (
        <div style={{ padding: '0 50px' }}>
            <div className={`${Styles.container} row`}>
                {/* <div> */}
                <div className={`${Styles.icon} col-1`}>
                    <AiOutlineSearch />
                </div>
                <input className={`${Styles.input} col-9`} placeholder='Bạn tìm gì hôm nay' />
                <a href='' className={`${Styles.text} col-2`}>
                    Tìm kiếm
                </a>
                {/* </div> */}
            </div>
        </div>

    )
}

export default SearchBar