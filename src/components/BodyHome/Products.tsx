import Styles from './Products.module.scss'
import LabelReal from '../../assets/BSProducts/Sữa tắm/LabelReal.png'
import { FaStarHalf } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
    img?: string;
    title?: string;
    ratings?: number;
    price?: string;
    dateShipping?: string;
}

const Products = ({ img, title, ratings = 9, price, dateShipping }: Props) => {
    let [rating, setRating] = useState(ratings)
    const handleRating = (item: any, e: any) => {
        e.preventDefault()
        setRating(item)
        console.log(item)
    }
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
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                                return (
                                    <div>
                                        <span style={{ color: rating >= item ? 'orange' : 'grey' }} onClick={(e) => handleRating(item, e)}>
                                            {
                                                item % 2 === 0 ? <FaStarHalf className={Styles.right} /> : <FaStarHalf className={Styles.left} />
                                            }
                                        </span>
                                    </div>
                                )
                            })
                        }
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