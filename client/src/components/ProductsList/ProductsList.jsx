import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getAllProducts } from '../../Actions/Product';
import "./ProductsList.css";
import QRCode from "react-qr-code";

const ProductsList = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.getAllProducts)
    useEffect(() => {
        dispatch(getAllProducts(toast));
    }, [])

    return (
        <>
            <table className="table mx-auto products_table">
                <thead className="products_table_head">
                    <tr>
                        <th scope="col" className='text-center'>S.No.</th>
                        <th scope="col" className='text-center'>Name</th>
                        <th scope="col" className='text-center'>Price</th>
                        <th scope="col" className='text-center'>Description</th>
                        <th scope="col" className='text-center'>QRCode</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.map((product, index) =>
                        (<tr>
                            <th scope="row" className='text-center'>{index + 1}</th>
                            <td className='text-center'>{product.name}</td>
                            <td className='text-center'>Rs.{product.price}</td>
                            <td className='text-center'>{product.description}</td>
                            <td>
                                <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
                                    <QRCode
                                        size={256}
                                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                        value={product._id}
                                        viewBox={`0 0 256 256`}
                                    />
                                </div>
                            </td>
                        </tr>)
                        )
                    }

                </tbody>
            </table>
        </>
    )
}

export default ProductsList