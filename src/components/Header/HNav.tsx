import Styles from './HNav.module.scss'
import { GoHomeFill } from 'react-icons/go';
import { AiOutlineCrown } from 'react-icons/ai';
import { PiSmileyWink } from 'react-icons/pi';
import ModalAccount from '../Modal/ModalAccount';
import { HNavChild1, HNavChild2, HNavChild3 } from './HNavChild';
import { Link } from 'react-router-dom';
import AtImg1 from '../../assets/AstraImg/img1.png'
import AtImg2 from '../../assets/AstraImg/img2.png'
import AtImg3 from '../../assets/AstraImg/img3.png'
import AtImg4 from '../../assets/AstraImg/img4.png'
import AtImg5 from '../../assets/AstraImg/img5.png'
type Props = {

}

const HNav1 = ({ }: Props) => {
    return (
        <div className={Styles.container}>
            <Link to='/'>
                <HNavChild1 text='Trang chủ' icon={<GoHomeFill />} />
            </Link>
            <Link to='/Astra'>
                <HNavChild1 text='Astra' icon={<AiOutlineCrown />} />
            </Link>
            <HNavChild1 text={<ModalAccount text='Tài khoản' />} icon={<PiSmileyWink />} />
        </div>
    )
}
const HNav2 = ({ }: Props) => {
    return (
        <div className={Styles.container}>
            <HNavChild2 text='khoẻ đẹp' />
            <HNavChild2 text='nhà cửa' />
            <HNavChild2 text='sách' />
            <HNavChild2 text='thể thao' />
            <HNavChild2 text='trái cây' />
            <HNavChild2 text='thịt, trứng' />
            <HNavChild2 text='rau củ quả' />
            <HNavChild2 text='sữa, bơ, phô mai' />
            <HNavChild2 text='hải sản' />
        </div>
    )
}
const HNav3 = ({ }: Props) => {
    return (
        <div className={Styles.container3}>
            <Link to=''>
                <HNavChild3 text='Nhà bán hoàn ASA' img={AtImg1} />
            </Link>
            <Link to=''>
                <HNavChild3 text='Nhà bán hoàn ASA' img={AtImg2} />
            </Link>
            <Link to=''>
                <HNavChild3 text='Nhà bán hoàn ASA' img={AtImg3} />
            </Link>
            <Link to=''>
                <HNavChild3 text='Nhà bán hoàn ASA' img={AtImg4} />
            </Link>
            <Link to=''>
                <HNavChild3 text='Nhà bán hoàn ASA' img={AtImg5} />
            </Link>
        </div>
    )
}

export { HNav1, HNav2, HNav3 }