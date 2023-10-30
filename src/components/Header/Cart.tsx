import { connect, useSelector } from 'react-redux';
import Styles from './Cart.module.scss'
import { FiShoppingCart } from 'react-icons/fi';
import { RootState } from '../../app/store';

type Props = {
    // dataRedux: any
}

const Cart = (props: Props) => {
    const count = useSelector((state: RootState) => state.counter.value)
    // console.log('Cart side:', dataRedux)
    // console.log('Props:', props.dataRedux)
    return (
        <div className={Styles.container}>
            <div>
                {/* <span>0</span> */}
                <FiShoppingCart />(
                {/* {props.dataRedux} */}
                {count}
                )
            </div>

        </div>
    )
}
// const mapStateToProps = (state: any) => {
//     return {
//         dataRedux: state
//     }
// }
export default
    // connect(mapStateToProps)
    // (
    Cart
    // )
    ;