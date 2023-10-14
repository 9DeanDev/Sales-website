import Styles from './MaybeULike.module.scss'
import Products from './Products';
import classnames from 'classnames'
import img1 from '../../assets/MBULProducts/Washing Machine/img1.png'
import img2 from '../../assets/MBULProducts/Washing Machine/img2.jpg'
import img3 from '../../assets/MBULProducts/Washing Machine/img3.png'
import img4 from '../../assets/MBULProducts/Washing Machine/img4.jpg'
import img5 from '../../assets/MBULProducts/Washing Machine/img5.jpg'
import img6 from '../../assets/MBULProducts/Washing Machine/img6.jpg'
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
            img1: img1, title1: 'Sữa Tắm Trắng Da Giữ Ẩm Hatomugi Nhật Bản 800ml', ratings1: 10,
            price1: '5.999.000đ', dateShipping1: 'Giao thứ 6, 13/10',
            img2: img2, title2: 'Sữa Tắm Nước Hoa Enchanteur Charming 650g', ratings2: 9,
            price2: '5.950.000đ', dateShipping2: 'Giao thứ 6, 13/10',
            img3: img3, title3: 'Sữa Tắm Purité De Prôvence Hoa Hồng - 1010200291 (850ml)', ratings3: 7,
            price3: '1.999.000đ', dateShipping3: 'Giao thứ 6, 13/10',
            img4: img4, title4: 'Combo Sữa tắm dưỡng ẩm Senka Perfect Whip hương hoa hồng, đinh hương 500ml và Sữa rửa mặt chiết xuất đất sét trắng Senka Perfect Whip Clay 120g',
            ratings4: 10, price4: '4.520.000đ', dateShipping4: 'Giao thứ 6, 13/10',
            img5: img5, title5: 'Sữa Tắm White Conc Body Nhật Bản Dưỡng Da Trắng Hồng, 360ml', ratings5: 8,
            price5: '999.000đ', dateShipping5: 'Giao thứ 6, 13/10',
            img6: img6, title6: 'Sữa Tắm Romano Attitude 650g', ratings6: 10,
            price6: '4.999.000đ', dateShipping6: 'Giao thứ 6, 13/10'
        },
        {
            types: 'Bình giữ nhiệt',
            img1: img1, title1: 'Sữa Tắm Trắng Da Giữ Ẩm Hatomugi Nhật Bản 800ml', ratings1: 10,
            price1: '5.999.000đ', dateShipping1: 'Giao thứ 6, 13/10',
            img2: img2, title2: 'Sữa Tắm Nước Hoa Enchanteur Charming 650g', ratings2: 9,
            price2: '5.950.000đ', dateShipping2: 'Giao thứ 6, 13/10',
            img3: img3, title3: 'Sữa Tắm Purité De Prôvence Hoa Hồng - 1010200291 (850ml)', ratings3: 7,
            price3: '1.999.000đ', dateShipping3: 'Giao thứ 6, 13/10',
            img4: img4, title4: 'Combo Sữa tắm dưỡng ẩm Senka Perfect Whip hương hoa hồng, đinh hương 500ml và Sữa rửa mặt chiết xuất đất sét trắng Senka Perfect Whip Clay 120g',
            ratings4: 10, price4: '4.520.000đ', dateShipping4: 'Giao thứ 6, 13/10',
            img5: img5, title5: 'Sữa Tắm White Conc Body Nhật Bản Dưỡng Da Trắng Hồng, 360ml', ratings5: 8,
            price5: '999.000đ', dateShipping5: 'Giao thứ 6, 13/10',
            img6: img6, title6: 'Sữa Tắm Romano Attitude 650g', ratings6: 10,
            price6: '4.999.000đ', dateShipping6: 'Giao thứ 6, 13/10'
        },
        {
            types: 'Adapter Sạc',
            img1: img1, title1: 'Sữa Tắm Trắng Da Giữ Ẩm Hatomugi Nhật Bản 800ml', ratings1: 10,
            price1: '5.999.000đ', dateShipping1: 'Giao thứ 6, 13/10',
            img2: img2, title2: 'Sữa Tắm Nước Hoa Enchanteur Charming 650g', ratings2: 9,
            price2: '5.950.000đ', dateShipping2: 'Giao thứ 6, 13/10',
            img3: img3, title3: 'Sữa Tắm Purité De Prôvence Hoa Hồng - 1010200291 (850ml)', ratings3: 7,
            price3: '1.999.000đ', dateShipping3: 'Giao thứ 6, 13/10',
            img4: img4, title4: 'Combo Sữa tắm dưỡng ẩm Senka Perfect Whip hương hoa hồng, đinh hương 500ml và Sữa rửa mặt chiết xuất đất sét trắng Senka Perfect Whip Clay 120g',
            ratings4: 10, price4: '4.520.000đ', dateShipping4: 'Giao thứ 6, 13/10',
            img5: img5, title5: 'Sữa Tắm White Conc Body Nhật Bản Dưỡng Da Trắng Hồng, 360ml', ratings5: 8,
            price5: '999.000đ', dateShipping5: 'Giao thứ 6, 13/10',
            img6: img6, title6: 'Sữa Tắm Romano Attitude 650g', ratings6: 10,
            price6: '4.999.000đ', dateShipping6: 'Giao thứ 6, 13/10'
        },
        {
            types: 'Hộp đựng thực phẩm',
            img1: img1, title1: 'Sữa Tắm Trắng Da Giữ Ẩm Hatomugi Nhật Bản 800ml', ratings1: 10,
            price1: '5.999.000đ', dateShipping1: 'Giao thứ 6, 13/10',
            img2: img2, title2: 'Sữa Tắm Nước Hoa Enchanteur Charming 650g', ratings2: 9,
            price2: '5.950.000đ', dateShipping2: 'Giao thứ 6, 13/10',
            img3: img3, title3: 'Sữa Tắm Purité De Prôvence Hoa Hồng - 1010200291 (850ml)', ratings3: 7,
            price3: '1.999.000đ', dateShipping3: 'Giao thứ 6, 13/10',
            img4: img4, title4: 'Combo Sữa tắm dưỡng ẩm Senka Perfect Whip hương hoa hồng, đinh hương 500ml và Sữa rửa mặt chiết xuất đất sét trắng Senka Perfect Whip Clay 120g',
            ratings4: 10, price4: '4.520.000đ', dateShipping4: 'Giao thứ 6, 13/10',
            img5: img5, title5: 'Sữa Tắm White Conc Body Nhật Bản Dưỡng Da Trắng Hồng, 360ml', ratings5: 8,
            price5: '999.000đ', dateShipping5: 'Giao thứ 6, 13/10',
            img6: img6, title6: 'Sữa Tắm Romano Attitude 650g', ratings6: 10,
            price6: '4.999.000đ', dateShipping6: 'Giao thứ 6, 13/10'
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