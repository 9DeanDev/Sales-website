import BodyPD from '../../components/BodyPD/BodyPD'
import Header from '../../components/Header/Header'
import Styles from './ProductDetails.module.scss'

type Props = {}

const ProductDetails = (props: Props) => {
    return (
        <div className={Styles.container}>
            <Header />
            <BodyPD />
        </div>
    )
}

export default ProductDetails