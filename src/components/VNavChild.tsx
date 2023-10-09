import Styles from './VNavChild.module.scss'
type Props = {
    img?: string;
    text?: string;
}

const VNavChild = ({ img, text }: Props) => {
    return (
        <a className={`${Styles.container} ro`} href=''>
            <img className={`${Styles.img} col`} src={img} />
            <div className={`${Styles.text} col9`}>
                {text}
            </div>
        </a>
    )
}

export default VNavChild