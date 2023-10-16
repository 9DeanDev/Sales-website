import { connect } from 'react-redux';
import Styles from './Cart.module.scss'
import { FiShoppingCart } from 'react-icons/fi';

type Props = {
    dataRedux: any
}

const Cart = (props: Props) => {
    // console.log('Cart side:', dataRedux)
    console.log('Props:', props.dataRedux)
    return (
        <div className={Styles.container}>
            <div>
                {/* <span>0</span> */}
                <FiShoppingCart />({props.dataRedux})
            </div>

        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        dataRedux: state
    }
}
export default connect(mapStateToProps)(Cart);