import Styles from './HNav.module.scss'
import HNavChild from './HNavChild'
import { GoHomeFill } from 'react-icons/go';
import { AiOutlineCrown } from 'react-icons/ai';
import { PiSmileyWink } from 'react-icons/pi';

type Props = {

}

const HNav1 = ({ }: Props) => {
    return (
        <div className={Styles.container}>
            <HNavChild text='Trang chủ' icon={<GoHomeFill />} />
            <HNavChild text='Astra' icon={<AiOutlineCrown />} />
            <HNavChild text='Tài khoản' icon={<PiSmileyWink />} />
        </div>
    )
}
const HNav2 = ({ }: Props) => {
    return (
        <div className={Styles.container}>
            <HNavChild text='khoẻ đẹp' />
            <HNavChild text='nhà cửa' />
            <HNavChild text='sách' />
            <HNavChild text='thể thao' />
            <HNavChild text='Trái cây' />
            <HNavChild text='thịt, trứng' />
            <HNavChild text='rau củ quả' />
            <HNavChild text='sữa, bơ, phô mai' />
            <HNavChild text='hải sản' />
        </div>
    )
}

export { HNav1, HNav2 }