import Styles from './VNav.module.scss'
import VNavChild from './VNavChild'
import img1 from '../../assets/VnavImg/img1.png'
import img2 from '../../assets/VnavImg/img2.png'
import img3 from '../../assets/VnavImg/img3.png'
import img4 from '../../assets/VnavImg/img4.png'
import img5 from '../../assets/VnavImg/img5.png'
import img6 from '../../assets/VnavImg/img6.png'
import img7 from '../../assets/VnavImg/img7.png'
import img8 from '../../assets/VnavImg/img8.png'
import img9 from '../../assets/VnavImg/img9.png'
import img10 from '../../assets/VnavImg/img10.png'
import img11 from '../../assets/VnavImg/img11.png'
import img12 from '../../assets/VnavImg/img12.png'
import img13 from '../../assets/VnavImg/img13.png'
import img14 from '../../assets/VnavImg/img14.png'
import img15 from '../../assets/VnavImg/img15.png'
import img16 from '../../assets/VnavImg/img16.png'
import img17 from '../../assets/VnavImg/img17.png'
import img18 from '../../assets/VnavImg/img18.png'
import img19 from '../../assets/VnavImg/img19.png'
import img20 from '../../assets/VnavImg/img20.png'
import img21 from '../../assets/VnavImg/img21.png'
import img22 from '../../assets/VnavImg/img22.jpg'
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
            <VNavChild img={img6} text='Thời trang nam' />
            <VNavChild img={img7} text='Giày - dép nữ' />
            <VNavChild img={img8} text='Túi thời trang nữ' />
            <VNavChild img={img9} text='Giày - Dép nam' />
            <VNavChild img={img10} text='Túi thời trang nam' />
            <VNavChild img={img11} text='Laptop - Máy Vi Tính - Linh kiện' />
            <VNavChild img={img12} text='Nhà Cửa - Đời Sống' />
            <VNavChild img={img13} text='Cross Border - Hàng Quốc Tế' />
            <VNavChild img={img14} text='Bách Hóa Online' />
            <VNavChild img={img15} text='Thiết Bị Số - Phụ Kiện Số' />
            <VNavChild img={img16} text='Voucher - Dịch vụ' />
            <VNavChild img={img17} text='Ô Tô - Xe Máy - Xe Đạp' />
            <VNavChild img={img18} text='Nhà Sách Tiki' />
            <VNavChild img={img19} text='Điện Tử - Điện Lạnh' />
            <VNavChild img={img20} text='Thể Thao - Dã Ngoại' />
            <VNavChild img={img21} text='Máy Ảnh - Máy Quay Phim' />
            <VNavChild img={img22} text='Sản phẩm Tài chính - Bảo hiểm' />
        </div>
    )
}

export default VNav