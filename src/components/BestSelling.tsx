import Styles from './BestSelling.module.scss'
import Products from './Products';
import img1 from '../assets/BSProducts/Sữa tắm/img1.png'
import img2 from '../assets/BSProducts/Sữa tắm/img2.png'
import img3 from '../assets/BSProducts/Sữa tắm/img3.png'
import img4 from '../assets/BSProducts/Sữa tắm/img4.png'
import img5 from '../assets/BSProducts/Sữa tắm/img5.jpg'
import img6 from '../assets/BSProducts/Sữa tắm/img6.jpg'
type Props = {}

const BestSelling = (props: Props) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.title}>
                Sản phẩm bán chạy
            </div>
            <div className={Styles.types}>
                <div className={Styles.typeChild} >
                    Bông tắm
                </div>
                <div className={Styles.typeChild}>
                    Bình giữ nhiệt
                </div>
                <div className={Styles.typeChild}>
                    Adapter Sạc
                </div>
                <div className={Styles.typeChild}>
                    Hộp đựng thực phẩm
                </div>
            </div>
            <div className={Styles.products}>
                <Products img={img1} title='Sữa Tắm Trắng Da Giữ Ẩm Hatomugi Nhật Bản 800ml' ratings={10}
                    price='95.000đ' dateShipping='Giao thứ 6, 13/10' />
                <Products img={img2} title='Sữa Tắm Nước Hoa Enchanteur Charming 650g' ratings={9}
                    price='195.000đ' dateShipping='Giao thứ 6, 13/10' />
                <Products img={img3} title='Sữa Tắm Purité De Prôvence Hoa Hồng - 1010200291 (850ml)' ratings={7}
                    price='235.000đ' dateShipping='Giao thứ 6, 13/10' />
                <Products img={img4} title='Combo Sữa tắm dưỡng ẩm Senka Perfect Whip hương hoa hồng, đinh hương 500ml và Sữa rửa mặt chiết xuất đất sét trắng Senka Perfect Whip Clay 120g' ratings={10}
                    price='452.000đ' dateShipping='Giao thứ 6, 13/10' />
                <Products img={img5} title='Sữa Tắm White Conc Body Nhật Bản Dưỡng Da Trắng Hồng, 360ml' ratings={8}
                    price='234.000đ' dateShipping='Giao thứ 6, 13/10' />
                <Products img={img6} title='Sữa Tắm Romano Attitude 650g' ratings={10}
                    price='199.000đ' dateShipping='Giao thứ 6, 13/10' />
            </div>
        </div>
    )
}
export default BestSelling;