import ModalProduct from '../Modal/ModalProduct'
import Styles from './ImgPD.module.scss'

type Props = {}

const ImgPD = (props: Props) => {
    return (
        <div className={Styles.container}>
            <div>
                <ModalProduct />
            </div>
            <div>
                <p>
                    Đặc điểm nổi bật
                </p>
                <ul>
                    <li>
                        Thiết kế thời trang, hiện đại và nhỏ gọn, dễ dàng mang theo.
                    </li>
                    <li>
                        Kết nối linh hoạt qua Bluetooth với các thiết bị di động.
                    </li>
                    <li>
                        Chất âm mạnh mẽ với driver toàn dải kép và công suất lớn.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ImgPD