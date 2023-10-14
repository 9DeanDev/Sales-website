import Styles from './Rating.module.scss'
import { FaStarHalf } from 'react-icons/fa';
import { useState } from 'react'
type Props = {
    ratings?: number;
}

const Rating = ({ ratings = 9 }: Props) => {
    let [rating, setRating] = useState(ratings)
    const handleRating = (item: any, e: any) => {
        e.preventDefault()
        setRating(item)
        console.log(item)
    }
    return (
        <div className={Styles.container}>
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
    )
}

export default Rating