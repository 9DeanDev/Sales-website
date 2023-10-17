import Styles from './MaybeULike.module.scss'
import Products from './Products';
import classnames from 'classnames'
import img1 from '../../assets/MBULProducts/Washing Machine/img1.png'
import img2 from '../../assets/MBULProducts/Washing Machine/img2.jpg'
import img3 from '../../assets/MBULProducts/Washing Machine/img3.png'
import img4 from '../../assets/MBULProducts/Washing Machine/img4.jpg'
import img5 from '../../assets/MBULProducts/Washing Machine/img5.jpg'
import img6 from '../../assets/MBULProducts/Washing Machine/img6.jpg'

import img21 from '../../assets/MBULProducts/Average Thermostats/img1.jpg'
import img22 from '../../assets/MBULProducts/Average Thermostats/img2.jpg'
import img23 from '../../assets/MBULProducts/Average Thermostats/img3.jpg'
import img24 from '../../assets/MBULProducts/Average Thermostats/img4.jpg'
import img25 from '../../assets/MBULProducts/Average Thermostats/img5.jpg'
import img26 from '../../assets/MBULProducts/Average Thermostats/img6.jpg'

import img31 from '../../assets/MBULProducts/Adapter/img1.jpg'
import img32 from '../../assets/MBULProducts/Adapter/img2.png'
import img33 from '../../assets/MBULProducts/Adapter/img3.jpg'
import img34 from '../../assets/MBULProducts/Adapter/img4.jpg'
import img35 from '../../assets/MBULProducts/Adapter/img5.png'
import img36 from '../../assets/MBULProducts/Adapter/img6.png'

import img41 from '../../assets/MBULProducts/Food Containers/img1.jpg'
import img42 from '../../assets/MBULProducts/Food Containers/img2.jpg'
import img43 from '../../assets/MBULProducts/Food Containers/img3.jpg'
import img44 from '../../assets/MBULProducts/Food Containers/img4.jpg'
import img45 from '../../assets/MBULProducts/Food Containers/img5.jpg'
import img46 from '../../assets/MBULProducts/Food Containers/img6.jpg'

import { useState } from 'react';
type Props = {}

const MaybeULike = (props: Props) => {
    const [selectIndex, setSelectIndex] = useState(0)
    const handleClickTypes = (index: number) => {
        setSelectIndex(index)
    }
    const defaultTabs = [
        {
            types: 'Máy giặt',
            img1: img1, title1: 'Máy giặt Hatomugi Nhật Bản 800ml', ratings1: 9,
            price1: '5.999.000đ', dateShipping1: 'Giao thứ 6, 13/10',
            img2: img2, title2: 'Máy giặt Enchanteur Charming 650g', ratings2: 10,
            price2: '5.950.000đ', dateShipping2: 'Giao thứ 6, 13/10',
            img3: img3, title3: 'Máy giặt Purité De Prôvence Hoa Hồng - 1010200291 (850ml)', ratings3: 8,
            price3: '1.999.000đ', dateShipping3: 'Giao thứ 6, 13/10',
            img4: img4, title4: 'Combo Sữa tắm dưỡng ẩm Senka Perfect Whip hương hoa hồng, đinh hương 500ml và Sữa rửa mặt chiết xuất đất sét trắng Senka Perfect Whip Clay 120g',
            ratings4: 10, price4: '4.520.000đ', dateShipping4: 'Giao thứ 6, 13/10',
            img5: img5, title5: 'Máy giặt White Conc Body Nhật Bản Dưỡng Da Trắng Hồng, 360ml', ratings5: 9,
            price5: '999.000đ', dateShipping5: 'Giao thứ 6, 13/10',
            img6: img6, title6: 'Máy giặt Romano Attitude 650g', ratings6: 10,
            price6: '4.999.000đ', dateShipping6: 'Giao thứ 6, 13/10'
        },
        {
            types: 'Bình giữ nhiệt',
            img1: img21, title1: 'Bình Giữ Nhiệt Bằng Thép Không Gỉ Lock&Lock Vacuum Bottle LHC6180FU (800ML)', ratings1: 9,
            price1: '99.000đ', dateShipping1: 'Giao thứ 6, 13/10',
            img2: img22, title2: 'Bình Giữ Nhiệt Lock&Lock RigaTumbler (London) LHC4160GRY  897ml - màu Gray', ratings2: 9,
            price2: '95.000đ', dateShipping2: 'Giao thứ 6, 13/10',
            img3: img23, title3: 'Bình Giữ Nhiệt Locknlock Bucket Tumbler 540ml LHC4269DPIK', ratings3: 9,
            price3: '99.000đ', dateShipping3: 'Giao thứ 6, 13/10',
            img4: img24, title4: 'Bình giữ nhiệt Lock&Lock Belt Bottle LHC4267MIT 490ml - Màu',
            ratings4: 10, price4: '45.000đ', dateShipping4: 'Giao thứ 6, 13/10',
            img5: img25, title5: 'Bình Giữ Nhiệt Lock&Lock Energetic One-Touch Tumbler LHC3249 - 550ML', ratings5: 8,
            price5: '299.000đ', dateShipping5: 'Giao thứ 6, 13/10',
            img6: img26, title6: 'Ca giữ nhiệt Flat Table Mug LocknLock LHC4320 - Dung tích 730ml - Tay cầm thoải mái - Miệng ca rộng - Nắp trong suốt', ratings6: 10,
            price6: '149.000đ', dateShipping6: 'Giao thứ 6, 13/10'
        },
        {
            types: 'Adapter Sạc',
            img1: img31, title1: 'Adapter Sạc 1 Cổng USB Type-C 20W Apple MHJE3ZA/A', ratings1: 9,
            price1: '99.000đ', dateShipping1: 'Giao thứ 6, 13/10',
            img2: img32, title2: 'Adapter Sạc Anker 313 / 311 Charger Gen 2 30W 1 Cổng Type-C A2639 - Hàng Chính Hãng', ratings2: 8,
            price2: '55.000đ', dateShipping2: 'Giao thứ 6, 13/10',
            img3: img33, title3: 'Adapter Sạc Anker 511 Charger Nano 3 30W 1 Cổng Type-C A2147 - Hàng Chính Hãng', ratings3: 9,
            price3: '19.000đ', dateShipping3: 'Giao thứ 6, 13/10',
            img4: img34, title4: 'Adapter Sạc ANKER 511 Nano Pro 20W Type-C Sạc Nhanh Tích Hợp PIQ 3.0 A2637 Tương Thích iPhone 13 series và iPhone 12 series, Galaxy, Pixel 4/3, iPad / iPad mini - Hàng Chính Hãng',
            ratings4: 10, price4: '40.000đ', dateShipping4: 'Giao thứ 6, 13/10',
            img5: img35, title5: 'Adapter Sạc 2 Cổng Tích Hợp Type-C In/Out Hỗ Trợ Sạc Nhanh PD Power Delivery 61W RAVPower RP-PC105 - Hàng Chính Hãng', ratings5: 8,
            price5: '99.000đ', dateShipping5: 'Giao thứ 6, 13/10',
            img6: img36, title6: 'Adapter Sạc 1 Cổng Type-C 30W Công Nghệ GaN Hỗ Trợ Sạc Nhanh PD Power Delivery RAVPower RP-PC120 Với Đầu AC Gập - Hàng Chính Hãng', ratings6: 9,
            price6: '49.000đ', dateShipping6: 'Giao thứ 6, 13/10'
        },
        {
            types: 'Hộp đựng thực phẩm',
            img1: img41, title1: 'Hộp cơm điện Lock&Lock EJR216 - Hàng Chính Hãng', ratings1: 10,
            price1: '599.000đ', dateShipping1: 'Giao thứ 6, 13/10',
            img2: img42, title2: 'Hộp Nhựa Đựng Thực Phẩm, Hộp Bảo Quản Thực Phẩm Tủ Lạnh VinBuy 2 Lớp Có Khay Giúp Ráo Nước, Bảo Quản Tiện Lợi, Nắp Chống Rò Rỉ Nước', ratings2: 9,
            price2: '950.000đ', dateShipping2: 'Giao thứ 6, 13/10',
            img3: img43, title3: 'Hộp Đựng Thực Phẩm, Hộp Bảo Quản Thực Phẩm Tủ Lạnh,Vòng Xoay Ghi Chú Thời Gian Bảo Quản Tiện Lợi', ratings3: 9,
            price3: '199.000đ', dateShipping3: 'Giao thứ 6, 13/10',
            img4: img44, title4: 'Hộp Đựng Thực Phẩm Tủ Lạnh Inox 304 Có Nắp Đậy Đa Năng Tiện Lợi 13.5*10.5*5.8cm - Gia dụng An Tâm',
            ratings4: 10, price4: '520.000đ', dateShipping4: 'Giao thứ 6, 13/10',
            img5: img45, title5: 'Hộp nhựa đựng thực phẩm (Bộ 8 hộp VS Lock)', ratings5: 8,
            price5: '99.000đ', dateShipping5: 'Giao thứ 6, 13/10',
            img6: img46, title6: 'Hộp đựng đồ tủ lạnh - Set 5 hộp đựng đồ tủ lạnh có nắp đậy, 2 lớp cao cấp - 5 hộp đựng thực phẩm', ratings6: 8,
            price6: '499.000đ', dateShipping6: 'Giao thứ 6, 13/10'
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
            {/* // return (
    //     <div className={Styles.container}>
    //         <div className={Styles.title}>
    //             Bạn có thể thích
    //         </div>
    //         <div className={Styles.types}>
    //             <div className={Styles.typeChild} >
    //                 Bông tắm
    //             </div>
    //             <div className={Styles.typeChild}>
    //                 Bình giữ nhiệt
    //             </div>
    //             <div className={Styles.typeChild}>
    //                 Adapter Sạc
    //             </div>
    //             <div className={Styles.typeChild}>
    //                 Hộp đựng thực phẩm
    //             </div>
    //         </div>
    //         <div className={Styles.products}>
    //             <Products img={img1} title='Sữa Tắm Trắng Da Giữ Ẩm Hatomugi Nhật Bản 800ml' ratings={10} */}
            {/* //                 price='95.000đ' dateShipping='Giao thứ 6, 13/10' />
    //             <Products img={img2} title='Sữa Tắm Nước Hoa Enchanteur Charming 650g' ratings={9} */}
            {/* //                 price='195.000đ' dateShipping='Giao thứ 6, 13/10' />
    //             <Products img={img3} title='Sữa Tắm Purité De Prôvence Hoa Hồng - 1010200291 (850ml)' ratings={7} */}
            {/* //                 price='235.000đ' dateShipping='Giao thứ 6, 13/10' />
    //             <Products img={img4} title='Combo Sữa tắm dưỡng ẩm Senka Perfect Whip hương hoa hồng, đinh hương 500ml và Sữa rửa mặt chiết xuất đất sét trắng Senka Perfect Whip Clay 120g' ratings={10} */}
            {/* //                 price='452.000đ' dateShipping='Giao thứ 6, 13/10' />
    //             <Products img={img5} title='Sữa Tắm White Conc Body Nhật Bản Dưỡng Da Trắng Hồng, 360ml' ratings={8} */}
            {/* //                 price='234.000đ' dateShipping='Giao thứ 6, 13/10' />
    //             <Products img={img6} title='Sữa Tắm Romano Attitude 650g' ratings={10} */}
            {/* //                 price='199.000đ' dateShipping='Giao thứ 6, 13/10' /> */}
            {/* //         </div> */}
        </div>
    )
}
export default MaybeULike;