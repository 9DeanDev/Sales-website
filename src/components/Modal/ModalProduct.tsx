import Styles from './ModalProduct.module.scss'
import { useState } from 'react'
type Props = {}

const ModalProduct = (props: Props) => {
    let [numberImg, setNumberImg] = useState(1)
    let countMaxImg = 6;
    let [Zoom, setZoom] = useState(1);
    let img = `/assetspb/img${numberImg}.png`
    const handleToZoomIn = () => {
        setZoom(Zoom + 0.2)
    }
    const handleToZoomOut = () => {
        setZoom(Zoom - 0.2)
    }
    const handleToPrevious = () => {
        if (numberImg > 1)
            setNumberImg(numberImg - 1)
    }
    const handleToNext = () => {
        if (numberImg < countMaxImg)
            setNumberImg(numberImg + 1)
    }
    const handleToImg = (item: any) => {
        setNumberImg(item)
    }
    return (
        <div className={Styles.container} >
            <div className={Styles.imgContainer} style={{ transform: `scale(${Zoom})` }}>
                <img src={img} />

            </div>
            <div className={Styles.btn}>
                <button onClick={() => handleToPrevious()} className={numberImg === 1 ? Styles.active : ''} disabled={numberImg === 1}>Previous</button>
                <div className={Styles.count}>
                    {numberImg}/{countMaxImg}
                </div>
                <button onClick={() => handleToNext()} className={numberImg === countMaxImg ? Styles.active : ''} disabled={numberImg === countMaxImg}>Next</button>

                <button onClick={() => handleToZoomIn()}>+</button>
                <button onClick={() => handleToZoomOut()}>-</button>

            </div>
            <div className={Styles.imgMini}>
                {
                    [1, 2, 3, 4, 5, 6].map((item, index) => {
                        let imgMini = `/assetspb/img${item}.png`
                        return (
                            <span onClick={() => handleToImg(item)}>
                                <img src={imgMini} />
                            </span>
                        )
                    })
                }
            </div>
            {/* <div className={Styles.bottom}> */}

            {/* </div> */}
        </div>

    )
}

export default ModalProduct