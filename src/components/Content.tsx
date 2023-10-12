import Advertise from './Advertise'
import BestSelling from './BestSelling'
import Styles from './Content.module.scss'
import MaybeULike from './MaybeULike'
import Products from './Products'

type Props = {}

const Content = (props: Props) => {
    return (
        <div className={Styles.container}>
            <Advertise />
            <BestSelling />
            <MaybeULike />
        </div>
    )
}

export default Content