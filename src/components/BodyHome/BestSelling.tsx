import Styles from './BestSelling.module.scss'
import Products from './Products';
import { useState } from 'react';
import classnames from 'classnames'
import img1 from '../../assets/BSProducts/Sữa tắm/img1.png'
import img2 from '../../assets/BSProducts/Sữa tắm/img2.png'
import img3 from '../../assets/BSProducts/Sữa tắm/img3.png'
import img4 from '../../assets/BSProducts/Sữa tắm/img4.png'
import img5 from '../../assets/BSProducts/Sữa tắm/img5.jpg'
import img6 from '../../assets/BSProducts/Sữa tắm/img6.jpg'

import img11 from '../../assets/BSProducts/Dầu gội/img1.jpg'
import img12 from '../../assets/BSProducts/Dầu gội/img2.png'
import img13 from '../../assets/BSProducts/Dầu gội/img3.jpg'
import img14 from '../../assets/BSProducts/Dầu gội/img4.png'
import img15 from '../../assets/BSProducts/Dầu gội/img5.jpg'
import img16 from '../../assets/BSProducts/Dầu gội/img6.png'

import img21 from '../../assets/BSProducts/Kem và sữa dưỡng da/img1.jpg'
import img22 from '../../assets/BSProducts/Kem và sữa dưỡng da/img2.jpg'
import img23 from '../../assets/BSProducts/Kem và sữa dưỡng da/img3.png'
import img24 from '../../assets/BSProducts/Kem và sữa dưỡng da/img4.jpg'
import img25 from '../../assets/BSProducts/Kem và sữa dưỡng da/img5.webp'
import img26 from '../../assets/BSProducts/Kem và sữa dưỡng da/img6.jpg'

import img31 from '../../assets/BSProducts/Máy tính bảng/img1.png'
import img32 from '../../assets/BSProducts/Máy tính bảng/img2.jpg'
import img33 from '../../assets/BSProducts/Máy tính bảng/img3.jpg'
import img34 from '../../assets/BSProducts/Máy tính bảng/img4.jpg'
import img35 from '../../assets/BSProducts/Máy tính bảng/img5.jpg'
import img36 from '../../assets/BSProducts/Máy tính bảng/img6.jpg'
import classNames from 'classnames';
type Props = {}

const BestSelling = (props: Props) => {
    const [selectIndex, setSelectIndex] = useState(0)
    const handleClickTypes = (index: number) => {
        setSelectIndex(index)
    }
    const defaultTabs = [
        {
            types: 'Sữa tắm',
            img1: img1, title1: 'Sữa Tắm Trắng Da Giữ Ẩm Hatomugi Nhật Bản 800ml', ratings1: 10,
            price1: '95.000đ', dateShipping1: 'Giao thứ 6, 13/10',
            img2: img2, title2: 'Sữa Tắm Nước Hoa Enchanteur Charming 650g', ratings2: 9,
            price2: '195.000đ', dateShipping2: 'Giao thứ 6, 13/10',
            img3: img3, title3: 'Sữa Tắm Purité De Prôvence Hoa Hồng - 1010200291 (850ml)', ratings3: 7,
            price3: '235.000đ', dateShipping3: 'Giao thứ 6, 13/10',
            img4: img4, title4: 'Combo Sữa tắm dưỡng ẩm Senka Perfect Whip hương hoa hồng, đinh hương 500ml và Sữa rửa mặt chiết xuất đất sét trắng Senka Perfect Whip Clay 120g',
            ratings4: 10, price4: '452.000đ', dateShipping4: 'Giao thứ 6, 13/10',
            img5: img5, title5: 'Sữa Tắm White Conc Body Nhật Bản Dưỡng Da Trắng Hồng, 360ml', ratings5: 9,
            price5: '234.000đ', dateShipping5: 'Giao thứ 6, 13/10',
            img6: img6, title6: 'Sữa Tắm Romano Attitude 650g', ratings6: 10,
            price6: '199.000đ', dateShipping6: 'Giao thứ 6, 13/10'
        },
        {
            types: 'Dầu gội',
            img1: img11, title1: 'Dầu Gội Chống Gàu Selsun (100ml)', ratings1: 9,
            price1: '155.000đ', dateShipping1: 'Giao thứ 6, 13/10',
            img2: img12, title2: 'Dầu Gội Clear Sạch Gàu Dầu Gội Sạch Gàu Mát Lạnh Bạc Hà 3X Sức Mạnh Đánh Bay Gàu, Ngứa, Vi Khuẩn 1.4kg', ratings2: 9,
            price2: '95.000đ', dateShipping2: 'Giao thứ 6, 13/10',
            img3: img13, title3: 'Dầu Gội Đầu Clear Men Cool Sport Dầu Gội Bạc Hà Mát Lạnh Cực Đỉnh Suốt Ngày Dài Đánh Bay Gàu, Ngứa & Vi Khuẩn 900g', ratings3: 9,
            price3: '235.000đ', dateShipping3: 'Giao thứ 6, 13/10',
            img4: img14, title4: 'Dầu Gội Clear Sạch Gàu Dầu Gội Sạch Gàu Mát Lạnh Bạc Hà 3X Sức Mạnh Đánh Bay Gàu, Ngứa, Vi Khuẩn 1.4kg',
            ratings4: 10, price4: '452.000đ', dateShipping4: 'Giao thứ 6, 13/10',
            img5: img15, title5: 'Dầu gội TRESEMME Salon Detox Dưỡng tóc chắc khỏe bóng mượt Gừng và Trà xanh Giúp detox tóc sạch sâu 850g', ratings5: 9,
            price5: '334.000đ', dateShipping5: 'Giao thứ 6, 13/10',
            img6: img16, title6: 'Dầu Gội Dove Ngăn Gãy Rụng Tóc Tinh Chất Dưỡng Tóc Bioserum Cho Tóc Chắc Khỏe X5 640G', ratings6: 10,
            price6: '69.000đ', dateShipping6: 'Giao thứ 6, 13/10'
        },
        {
            types: 'Kem và sữa dưỡng da',
            img1: img21, title1: 'Kem Dưỡng Phục Hồi Da AVENE Cicalfate Repair Cream 100ml', ratings1: 9,
            price1: '99.000đ', dateShipping1: 'Giao thứ 6, 13/10',
            img2: img22, title2: 'Kem dưỡng phục hồi đa công dụng và làm dịu da La Roche-Posay Cicaplast Baume B5+ 40ml', ratings2: 9,
            price2: '199.000đ', dateShipping2: 'Giao thứ 6, 13/10',
            img3: img23, title3: `Bộ Đôi Kem Dưỡng Da Ngày Và Đêm Trắng Hồng Rạng Rỡ Pond's White Beauty (50g)`, ratings3: 7,
            price3: '199.000đ', dateShipping3: 'Giao thứ 6, 13/10',
            img4: img24, title4: 'Kem Vi Dưỡng Chống Lão Hóa Ban Đêm OLAY Regenerist (50G)',
            ratings4: 10, price4: '452.000đ', dateShipping4: 'Giao thứ 6, 13/10',
            img5: img25, title5: `Kem dưỡng da ban đêm POND'S dưỡng ẩm da cho da sáng mịn căng mướt 50g`, ratings5: 8,
            price5: '299.000đ', dateShipping5: 'Giao thứ 6, 13/10',
            img6: img26, title6: 'Kem dưỡng ẩm Hada Labo Advanced Nourish Hyaluronic Acid Cream (50g)', ratings6: 9,
            price6: '99.000đ', dateShipping6: 'Giao thứ 6, 13/10'
        },
        {
            types: 'Máy tính bảng',
            img1: img31, title1: 'Apple iPad 10.2-inch ( 9th Gen) Wi-Fi 2021', ratings1: 8,
            price1: '595.000đ', dateShipping1: 'Giao thứ 6, 13/10',
            img2: img32, title2: 'Máy tính bảng Samsung Galaxy Tab S7 FE WIFI (4GB/64GB) - Hàng chính hãng - Đã kích hoạt bảo hành điện tử', ratings2: 9,
            price2: '1095.000đ', dateShipping2: 'Giao thứ 6, 13/10',
            img3: img33, title3: 'Apple iPad mini (6th Gen) Wi-Fi 2021', ratings3: 7,
            price3: '2350.000đ', dateShipping3: 'Giao thứ 6, 13/10',
            img4: img34, title4: 'Apple iPad Air (5th Gen) Wi-Fi 2022',
            ratings4: 10, price4: '452.000đ', dateShipping4: 'Giao thứ 6, 13/10',
            img5: img35, title5: 'Máy Tính Bảng Samsung Galaxy Tab A7 Lite T225 3GB/32GB - Hàng Chính Hãng  ', ratings5: 8,
            price5: '2349.000đ', dateShipping5: 'Giao thứ 6, 13/10',
            img6: img36, title6: 'Máy tính bảng Kindle File HD 8 (10th generation - 2020) Hàng nhập khẩu', ratings6: 8,
            price6: '1999.000đ', dateShipping6: 'Giao thứ 6, 13/10'
        },
    ]

    return (
        <div className={Styles.container}>
            <div className={Styles.title}>
                Sản phẩm bán chạy
            </div>
            <div className={Styles.types}>
                {defaultTabs.map((item, index) => {
                    return (
                        <div className={classnames(Styles.typeChild, selectIndex === index ? Styles.active : '')}
                            key={index} onClick={() => handleClickTypes(index)} >
                            {item.types}
                        </div>
                    )
                })}
            </div>
            <div className={Styles.products}>
                <Products img={defaultTabs[selectIndex].img1} title={defaultTabs[selectIndex].title1} ratings={defaultTabs[selectIndex].ratings1}
                    price={defaultTabs[selectIndex].price1} dateShipping={defaultTabs[selectIndex].dateShipping1} />
                <Products img={defaultTabs[selectIndex].img2} title={defaultTabs[selectIndex].title2} ratings={defaultTabs[selectIndex].ratings2}
                    price={defaultTabs[selectIndex].price2} dateShipping={defaultTabs[selectIndex].dateShipping2} />
                <Products img={defaultTabs[selectIndex].img3} title={defaultTabs[selectIndex].title3} ratings={defaultTabs[selectIndex].ratings3}
                    price={defaultTabs[selectIndex].price3} dateShipping={defaultTabs[selectIndex].dateShipping3} />
                <Products img={defaultTabs[selectIndex].img4} title={defaultTabs[selectIndex].title4} ratings={defaultTabs[selectIndex].ratings4}
                    price={defaultTabs[selectIndex].price4} dateShipping={defaultTabs[selectIndex].dateShipping4} />
                <Products img={defaultTabs[selectIndex].img5} title={defaultTabs[selectIndex].title5} ratings={defaultTabs[selectIndex].ratings5}
                    price={defaultTabs[selectIndex].price5} dateShipping={defaultTabs[selectIndex].dateShipping5} />
                <Products img={defaultTabs[selectIndex].img6} title={defaultTabs[selectIndex].title6} ratings={defaultTabs[selectIndex].ratings6}
                    price={defaultTabs[selectIndex].price6} dateShipping={defaultTabs[selectIndex].dateShipping6} />
            </div>
            {/* <div className={Styles.types}>
                <div className={Styles.typeChild} >
                    Sữa tắm
                </div>
                <div className={Styles.typeChild}>
                    Dầu gội
                </div>
                <div className={Styles.typeChild}>
                    Kem và sữa dưỡng da
                </div>
                <div className={Styles.typeChild}>
                    Máy tính bảng
                </div>
            </div> */}
            {/* <div className={Styles.products}>
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
            </div> */}
        </div>
    )
}
export default BestSelling;