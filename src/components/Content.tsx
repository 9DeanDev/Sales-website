import Advertise from './Advertise'
import Styles from './Content.module.scss'
import Products from './Products'

type Props = {}

const Content = (props: Props) => {
    return (
        <div className={Styles.container}>
            <Advertise />
            {/* <Products /> */}
        </div>
    )
}

export default Content