import Styles from './Products.module.scss'
import LabelReal from '../../assets/BSProducts/Sữa tắm/LabelReal.png'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

type Props = {
    img?: string;
    title?: string;
    ratings?: number;
    price?: string;
    dateShipping?: string;
}

const Products = ({ img, title, ratings, price, dateShipping }: Props) => {
    return (
        <div className={Styles.container}>
            <Link to='/ProductDetails' className={Styles.link}>
                <div className={Styles.img}>
                    <img src={img} />
                </div>
                <div className={Styles.content}>
                    <div className={Styles.label}>
                        <img src={LabelReal} />
                    </div>
                    <div className={Styles.title}>
                        {title}
                    </div>
                    <div className={Styles.ratings}>
                        <Rating ratings={ratings} />
                    </div>
                    <div className={Styles.price}>
                        {price}
                    </div>
                </div>
                <div className={Styles.dateShipping}>
                    {dateShipping}
                </div>
            </Link>
        </div>
    )
}

export default Products