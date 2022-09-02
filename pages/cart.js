import Layout from "../components/Layout";
import css from '../styles/Cart.module.css';
import { useStore } from "../store/store";
import Image from 'next/image';
import { urlFor } from "../lib/client";
import toast, {Toaster} from 'react-hot-toast';
import { useState } from "react";
import OrderModal from "../components/OrderModal";

export default function Cart() {
    const CartData = useStore((state) => state.cart);
    const removeProduct = useStore((state) => state.removeProduct);
    const [PaymentMethod, setPaymentMethod] = useState(null)
    const handleRemove = (i) => {
        removeProduct(i);
        toast.error('Item Removed')
    };
    const total = () => CartData.products.reduce((a,b) => a+b.quantity * b.price, 0);
    const handleOnDelivery = () => {
        setPaymentMethod(0);
        typeof window !== 'undefined' && localStorage.setItem('total', total())
    };

    return(
        <Layout>
            <div className={css.container}>
                <div className={css.details}>
                    <table className={css.table}>
                        <thead>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Quality</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </thead>
                        <tbody className={css.tbody}>
                            {CartData.products.length > 0 &&
                            CartData.products.map((products, i) => {
                                const src = urlFor(products.image).url()
                                return(
                                    <tr key={i}>
                                        <td className={css.imageTd}>
                                            <Image loader = {() => src} src={src} alt='' objectFit="cover" width={85} height={85} />
                                        </td>
                                        <td>{products.name}</td>
                                        <td>
                                            {
                                                products.size === 0 ?
                                                'Poor' :
                                                products.size === 1 ?
                                                'Good' :
                                                'Original'
                                            }
                                        </td>
                                        <td>
                                            {products.price}
                                        </td>
                                        <td>
                                            {products.quantity}
                                        </td>
                                        <td>
                                            {products.price * products.quantity}
                                        </td>
                                        <td style={{color: "var(--themeRed)", cursor: "pointer"}} onClick={() => handleRemove(i)} >x</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
                {/*summary */}
                <div className={css.cart}>
                    <span>Cart</span>
                    <div className={css.CartDetails}>
                        <div>
                            <span>Items</span>
                            <span>{CartData.products.length}</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>{total()}<span style={{color: 'var(--themeRed)'}}> DZD</span></span>
                        </div>
                    </div>
                    <div className={css.buttons}>
                        <button className="btn" onClick={handleOnDelivery}>Place Order</button>
                    </div>
                </div>
            </div>
            <Toaster/>
            {/* Modal */}
            <OrderModal
            opened = {PaymentMethod === 0}
            setOpened = {setPaymentMethod}
            PaymentMethod = {PaymentMethod}
            />
        </Layout>
    )
};