import Styles from './BodyPD.module.scss'
import DetailsPD from './DetailsPD'
import FormPD from './FormPD'
import ImgPD from './ImgPD'

type Props = {}

const BodyPD = (props: Props) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.img}>
                <ImgPD />
            </div>
            <div className={Styles.details}>
                <DetailsPD />
            </div>
            <div className={Styles.form}>
                <FormPD />
            </div>
        </div>
    )
}

export default BodyPD