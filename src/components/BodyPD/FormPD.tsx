import { useState } from 'react'
import Styles from './FormPD.module.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
type Props = {}

const FormPD = (props: Props) => {
    let [numberPD, setNumberPD] = useState(1)
    const handleDecreaseNum = () => {
        if (numberPD > 1)
            setNumberPD(numberPD - 1)
    }
    const handleIncreaseNum = () => {
        setNumberPD(numberPD + 1)
    }
    const handleClickBuy = () => {
        toast.success('Order Success')
    }
    const handleClickAddToCart = () => {
        toast.success('Added to cart')
    }
    return (
        <div className={Styles.container}>
            <div className={Styles.number}>
                <b>
                    Số lượng
                </b>
                <div className={Styles.changeNumber}>
                    <button className={Styles.decreaseBtn} onClick={() => handleDecreaseNum()}>
                        -
                    </button>
                    <input value={numberPD}>

                    </input>
                    <button className={Styles.increaseBtn} onClick={() => handleIncreaseNum()} >
                        +
                    </button>
                </div>
                <div>Tạm tính</div>
                <h3>
                    {(95.000 * numberPD).toFixed(3)}đ
                </h3>
            </div>
            <div className={Styles.btn}>
                <button className={Styles.buyBtn} onClick={() => handleClickBuy()}>
                    Mua ngay
                </button>
                <button className={Styles.addToCartBtn} onClick={() => handleClickAddToCart()}>
                    Thêm vào giỏ
                </button>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>

    )
}

export default FormPD