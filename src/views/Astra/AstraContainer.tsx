import Styles from './AstraContainer.module.scss'
import AstraRewardLogo from '../../assets/AstraRewardsLogo.png'
import { PiSpeakerHighDuotone } from 'react-icons/pi';

type Props = {}

const AstraContainer = (props: Props) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.left}>
                <div className={Styles.card}>
                    <a className={Styles.topCard}>
                        <div className={Styles.title}>
                            <img src={AstraRewardLogo} />
                        </div>
                        <button className={Styles.btn}>
                            Đăng nhập
                        </button>
                    </a>
                    <div className={Styles.bottomCard}>
                        <div className={Styles.content}>
                            Giá trị điểm thưởng Astra(ASA)
                        </div>
                        <h3>
                            1 ASA = 106 đ
                        </h3>
                    </div>
                </div>
                <div className={Styles.bottom}>
                    <div>
                        <PiSpeakerHighDuotone />
                    </div>
                    <span>
                        32157 khách hàng đã trở thành hội viên VIP
                    </span>
                </div>
            </div>
            <div className={Styles.right}>
                <div className={Styles.content}>
                    <div className={Styles.title}>
                        Tìm hiểu Astra Rewards
                    </div>
                    <div className={Styles.nav}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AstraContainer