import Styles from './FormPD.module.scss'

type Props = {}

const FormPD = (props: Props) => {
    return (
        <div className={Styles.container}>
            <div>
                <img src='' />
                <span>
                    Đen
                </span>
            </div>
            <p>
                Số lượng
            </p>
            <div>
                <span>
                    -
                </span>
                <input>

                </input>
                <span>
                    +
                </span>
            </div>
            <p>Tạm tính</p>
            <p>
                1.120.000đ
            </p>
            <button>
                Mua ngay
            </button>
            <button>
                Thêm vào giỏ
            </button>
        </div>
    )
}

export default FormPD