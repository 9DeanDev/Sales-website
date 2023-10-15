import Styles from './Cart.module.scss'
import { FiShoppingCart } from 'react-icons/fi';

type Props = {}

const Cart = (props: Props) => {
    return (
        <div className={Styles.container}>
            <div>
                {/* <span>0</span> */}
                <FiShoppingCart />(0)
            </div>

        </div>
    )
}

export default Cart