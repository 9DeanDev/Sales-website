import BodyContent from '../../components/BodyHome/BodyContent'
import Header from '../../components/Header/Header'
import Styles from './Home.module.scss'

type Props = {}

const Home = (props: Props) => {
    return (
        <div className={Styles.container}>
            <Header />
            <BodyContent />
        </div>
    )
}

export default Home