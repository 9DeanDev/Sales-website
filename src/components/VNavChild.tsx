import Styles from './VNavChild.module.scss'
type Props = {
    img?: string;
    text?: string;
}

const VNavChild = ({ img, text }: Props) => {
    return (
        <a className={`${Styles.container}`} href=''>
            <div className={`${Styles.img}`}>
                <img src={img} />
            </div>
            <div className={`${Styles.text}`}>
                {text}
            </div>
        </a>
    )
}

export default VNavChild