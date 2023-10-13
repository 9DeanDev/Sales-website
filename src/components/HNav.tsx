import Styles from './HNav.module.scss'
import { HNavChild1, HNavChild2 } from './HNavChild'
import { GoHomeFill } from 'react-icons/go';
import { AiOutlineCrown } from 'react-icons/ai';
import { PiSmileyWink } from 'react-icons/pi';
import ModalAccount from './Modal/ModalAccount';

type Props = {

}

const HNav1 = ({ }: Props) => {
    return (
        <div className={Styles.container}>
            <HNavChild1 text='Trang chủ' icon={<GoHomeFill />} />
            <HNavChild1 text='Astra' icon={<AiOutlineCrown />} />
            <HNavChild1 text={<ModalAccount />} icon={<PiSmileyWink />} />
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

export { HNav1, HNav2 }