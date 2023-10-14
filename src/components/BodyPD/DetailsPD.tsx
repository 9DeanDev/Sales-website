import Rating from '../Rating/Rating'
import Styles from './DetailsPD.module.scss'
import { TbTruckDelivery } from 'react-icons/tb';


type Props = {}

const DetailsPD = (props: Props) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.details}>
                <div className={Styles.brand}>
                    <img src='' />
                    Thương hiệu: Soundcore by Anker
                </div>
                <h5 className={Styles.name}>
                    Sữa Tắm Trắng Da Giữ Ẩm Hatomugi Nhật Bản 800ml
                </h5>
                <div className={Styles.vote}>
                    4.7
                    <div>
                        <Rating ratings={10} />
                    </div>
                    (390)
                    <div className={Styles.bar}>

                    </div>
                    <div>
                        Đã bán 1503
                    </div>
                </div>
                <h3 className={Styles.price}>
                    95.000đ
                </h3>
            </div>
            <div className={Styles.transport}>
                <b className={Styles.title}>
                    Thông tin vận chuyển
                </b>
                <div className={Styles.address}>
                    Giao đến Q. Hải Châu, P. Hải Châu I, Đà Nẵng
                </div>
                <div className={Styles.time}>
                    <TbTruckDelivery />
                    <span>
                        Giao Thứ hai
                    </span>
                </div>
                <div className={Styles.plan}>
                    Trước 24h, 16/10: 12.000₫ <span>42.000₫</span>
                </div>
            </div>
        </div>
    )
}

export default DetailsPD