import Styles from './Astra.module.scss'
import Header from '../../components/Header/Header'
import AstraContainer from './AstraContainer'
import { connect } from 'react-redux'

type Props = {}

const Astra = (props: Props) => {
    // console.log('check:', props)
    return (
        <div className={Styles.container}>
            <Header />
            <AstraContainer />
        </div>
    )
}
// const mapStateToProps = (state: any) => {
//     return {
//         dataRedux: state + 1
//     }
// }
export default connect()(Astra);