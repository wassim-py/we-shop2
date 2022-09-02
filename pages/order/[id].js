import {client} from '../../lib/client';
import Layout from '../../components/Layout';
import css from '../../styles/Order.module.css';
import {UilCheckCircle, UilPackage, UilTruck, UilDropbox} from '@iconscout/react-unicons';
import Image from 'next/image';
import Spinner from '../../assets/spinner.svg';
import { useEffect } from 'react';

export const getServerSideProps = async ({params}) => {
    const query = `*[_type == 'order' && _id == '${params.id}']`;
    const order = await client.fetch(query);
    return {
        props: {
            order : order[0]
        }
    }
}

export default function Orders({order}) {
    useEffect(() => {
        if (order.status > 3){
            localStorage.clear();
        }
    }, [order])
    return(
        <Layout>
            <div className={css.container}>
                <span className={css.heading}>
                    Order in Process
                </span>
                <div className={css.details}>
                    <div>
                        <span>Order ID</span>
                        <span>{order._id}</span>
                    </div>
                    <div>
                        <span>Customer Name</span>
                        <span>{order.name}</span>
                    </div>
                    <div>
                        <span>Customer Phone</span>
                        <span>{order.phone}</span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span>{order.total}<span style={{color: 'var(--themeRed)'}}> DZD</span></span>
                    </div>
                </div>
                <div className={css.statusContainer}>
                    <div className={css.status}>
                        <UilCheckCircle width={50} height={50}/>
                        <span>Confirmation</span>
                        {order.status === 1 && (
                            <div className={css.spinner}>
                                <Image src={Spinner} alt = ''/>
                            </div>
                        )}
                        {order.status > 1 && (
                            <span className={css.completed}>Confirmed</span>
                        )}
                    </div>
                    <div className={css.status}>
                        <UilPackage width={50} height={50}/>
                        <span>Wrraping</span>
                        {order.status === 2 && (
                            <div className={css.spinner}>
                                <Image src={Spinner} alt = ''/>
                            </div>
                        )}
                        {order.status > 2 && (
                            <span className={css.completed}>Wrraped</span>
                        )}
                    </div>
                    <div className={css.status}>
                        <UilTruck width={50} height={50}/>
                        <span>OnWay</span>
                        {order.status === 3 && (
                            <div className={css.spinner}>
                                <Image src={Spinner} alt = ''/>
                            </div>
                        )}
                        {order.status > 3 && (
                            <span className={css.completed}>BeepBeep</span>
                        )}
                    </div>
                    <div className={css.status}>
                        <UilDropbox width={50} height={50}/>
                        <span>Delivered</span>
                        {order.status > 3 && (
                            <span className={css.completed}>Enjoy!</span>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
};