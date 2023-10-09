import Styles from './BodyContent.module.scss'
import Content from './Content'
import VNav from './VNav'

type Props = {}

const BodyContent = (props: Props) => {
    return (
        <div className={Styles.container}>
            <VNav />
            <Content />
        </div>
    )
}

export default BodyContent