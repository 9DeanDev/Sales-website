import Styles from './Advertise.module.scss'
import img1 from '../assets/Advertise/img1.png'
import img2 from '../assets/Advertise/img2.png'
import img3 from '../assets/Advertise/img3.png'
import img4 from '../assets/Advertise/img4.png'
import img5 from '../assets/Advertise/img5.png'
import img6 from '../assets/Advertise/img 6.png'
import img7 from '../assets/Advertise/img7.png'
type Props = {}

const Advertise = (props: Props) => {
    return (
        <div className={`${Styles.container}`}>
            <div className={`${Styles.left}`}>
                <img src={img1} className={Styles.img} />
            </div>
            <div className={`${Styles.right}`}>
                <div className={Styles.top}>
                    <img src={img2} className={Styles.img} />
                    <img src={img3} className={Styles.img} />
                    {/* <img src={img4} className={Styles.img} /> */}
                </div>
                <div className={Styles.bottom}>
                    <img src={img5} className={Styles.img} />
                    <img src={img6} className={Styles.img} />
                    {/* <img src={img7} className={Styles.img} /> */}
                </div>
            </div>
        </div>
    )
}

export default Advertise