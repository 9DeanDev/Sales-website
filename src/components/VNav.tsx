import Styles from './VNav.module.scss'
import VNavChild from './VNavChild'
import img1 from '../assets/VnavImg/img1.png'
import img2 from '../assets/VnavImg/img2.png'
import img3 from '../assets/VnavImg/img3.png'
import img4 from '../assets/VnavImg/img4.png'
import img5 from '../assets/VnavImg/img5.png'
type Props = {}

const VNav = (props: Props) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.title}>
                Danh mục
            </div>
            <VNavChild img={img1} text='Đồ Chơi - Mẹ & Bé' />
            <VNavChild img={img2} text='Điện Thoại - Máy Tính Bảng' />
            <VNavChild img={img3} text='NGON' />
            <VNavChild img={img4} text='Điện Gia Dụng' />
            <VNavChild img={img5} text='Thời Trang Nữ' />
        </div>
    )
}

export default VNav