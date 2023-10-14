import Styles from './DetailsPD.module.scss'

type Props = {}

const DetailsPD = (props: Props) => {
    return (
        <div className={Styles.container}>
            <div>
                <p>
                    <img src='' />
                    Thương hiệu: Soundcore by Anker
                </p>
                <p>
                    Loa Bluetooth Anker SoundCore Motion B - A3109 - Hàng Chính Hãng
                </p>
                <p>
                    4.7
                    (390)
                    <span>
                        Đã bán 1503
                    </span>
                </p>
                <p>
                    1.120.000đ
                    <span>
                        -20%
                    </span>
                </p>
                <p>
                    Màu sắc
                </p>
                <div>
                    <img src='' />
                    Đen
                </div>
            </div>
            <div>
                <p>
                    Thông tin vận chuyển
                </p>
                <p>
                    Giao đến Q. Hải Châu, P. Hải Châu I, Đà Nẵng
                </p>
                <p>
                    Giao Thứ hai
                </p>
                <p>
                    Trước 24h, 16/10: 12.000₫ 42.000₫
                </p>
            </div>
        </div>
    )
}

export default DetailsPD