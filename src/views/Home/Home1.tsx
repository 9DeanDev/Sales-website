import React, { useEffect, useState } from 'react'
import axiosClient from '../../configs/axiosclient'

type Props = {}

export default function Home1({ }: Props) {
    let [productsData, setProductsData] = useState([])
    useEffect(() => {
        const getData = async () => {
            let response = await axiosClient.get('/online-shop/products')
            console.log('>>>>>', response.data)
            setProductsData(response.data)
        }
        getData()
    }, [])

    return (
        <table className='table container'>
            <tr>
                <th>ID</th>
                <th>name</th>
                <th>price</th>
                <th>discription</th>
            </tr>
            {productsData && productsData.map((product: any, index) => {
                return (
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                    </tr>)
            })}
        </table>
    )
}