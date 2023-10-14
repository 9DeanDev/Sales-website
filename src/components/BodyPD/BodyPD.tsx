import Styles from './BodyPD.module.scss'

type Props = {}

const BodyPD = (props: Props) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.img}>
                Ảnh
            </div>
            <div className={Styles.details}>
                Thông tin
            </div>
            <div className={Styles.form}>
                Mua
            </div>
        </div>
    )
}

export default BodyPD