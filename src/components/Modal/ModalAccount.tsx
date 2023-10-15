import Styles from './ModalAccount.module.scss'
import { useState } from 'react'
import img from '../../assets/ModalAccountImg.png'
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
type Props = {
    text?: string;
    border?: string;
    borderRadius?: string;
    fontWeight?: number;
    fontSize?: number;
    color?: string;
}

const ModalAccount = ({ text, border, fontSize, fontWeight, color, borderRadius }: Props) => {
    const [status, setStatus] = useState<'on' | 'off'>('off');
    const handleChangeStatus = (event: any) => {
        event?.preventDefault()
        setStatus(status === 'off' ? 'on' : 'off')
    }
    return (
        <>
            <button className={Styles.btn} onClick={(event) => handleChangeStatus(event)}
                style={{ border: border, fontWeight: fontWeight, fontSize: fontSize, color: color, borderRadius: borderRadius }}>
                {text}
            </button>
            <div className={Styles.container} style={{ display: status === 'off' ? 'none' : 'block' }}>
                <div className={Styles.modalContainer} >
                    <div className={Styles.left}>
                        <div className={Styles.modalHeader}>
                            <span className={Styles.close} onClick={(event) => handleChangeStatus(event)}>
                                &times;
                            </span>
                            <h2>
                                Xin chào,
                            </h2>
                        </div>
                        <div className={Styles.modalBody}>
                            <p>
                                Đăng nhập hoặc tạo tài khoản
                            </p>
                            <input placeholder='Số điện thoại'>

                            </input>
                            <button >
                                Tiếp tục
                            </button>
                            <div>
                                Đăng nhập bằng email
                            </div>
                        </div>
                        <div className={Styles.modalFooter}>
                            <h3>
                                Hoặc tiếp tục bằng
                            </h3>
                            <div>
                                <BsFacebook /><FcGoogle />
                            </div>
                            <div>
                                Bằng việc tiếp tục, bạn đã đọc và đồng ý với
                                <a> điều khoản sử dụng </a> và <a> Chính sách bảo mật thông tin cá nhân </a> của Tiki
                            </div>
                        </div>
                    </div>
                    <div className={Styles.right}>
                        <img src={img} />
                        <div>
                            Mua sắm tại tiki
                        </div>
                        <div>
                            Siêu ưu đãi mỗi ngày
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ModalAccount