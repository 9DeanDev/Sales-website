import Styles from './Astra.module.scss'
import Header from '../../components/Header/Header'
import AstraContainer from './AstraContainer'

type Props = {}

const Astra = (props: Props) => {
    return (
        <div className={Styles.container}>
            <Header />
            <AstraContainer />
        </div>
    )
}

export default Astra