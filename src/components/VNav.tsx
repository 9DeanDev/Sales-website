import Styles from './VNav.module.scss'
import VNavChild from './VNavChild'
import img1 from '../assets/VnavImg/img1.png'
import img2 from '../assets/VnavImg/img2.png'
import img3 from '../assets/VnavImg/img3.png'
import img4 from '../assets/VnavImg/img4.png'
import img5 from '../assets/VnavImg/img5.png'
import img6 from '../assets/VnavImg/img6.png'
import img7 from '../assets/VnavImg/img7.png'
import img8 from '../assets/VnavImg/img8.png'
import img9 from '../assets/VnavImg/img9.png'
import img10 from '../assets/VnavImg/img10.png'
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
            <VNavChild img={img6} text='Giày - Dép nam' />
            <VNavChild img={img7} text='Túi thời trang nam' />
            <VNavChild img={img8} text='Balo và vali' />
            <VNavChild img={img9} text='Phụ kiện thời trang' />
            <VNavChild img={img10} text='Đồng hồ và trang sức' />
            <VNavChild img={img10} text='Đồng hồ và trang sức' />
            <VNavChild img={img10} text='Đồng hồ và trang sức' />
            <VNavChild img={img10} text='Đồng hồ và trang sức' />
            <VNavChild img={img10} text='Đồng hồ và trang sức' />
            <VNavChild img={img10} text='Đồng hồ và trang sức' />
            <VNavChild img={img10} text='Đồng hồ và trang sức' />
            <VNavChild img={img10} text='Đồng hồ và trang sức' />
            <VNavChild img={img10} text='Đồng hồ và trang sức' />
            <VNavChild img={img10} text='Đồng hồ và trang sức' />
            <VNavChild img={img10} text='Đồng hồ và trang sức' />
            <VNavChild img={img10} text='Đồng hồ và trang sức' />

        </div>
    )
}

export default VNav