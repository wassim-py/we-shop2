import { urlFor } from '../../lib/client';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { client } from '../../lib/client';
import css from '../../styles/Products.module.css';
import LeftArrow from '../../assets/arrowLeft.png';
import RightArrow from '../../assets/arrowRight.png';
import { useState } from 'react';
import { useStore } from '../../store/store';
import toast, {Toaster} from 'react-hot-toast';

export default function Products({products}) {
    const src = urlFor(products.image).url();
    const [Quantity, setQuantity] = useState(1);
    const [Size, setSize] = useState(1);
    const handleQuan = (type) => {
        type === 'inc' ? setQuantity((prev) => prev + 1) : Quantity === 1 ? null : setQuantity ((prev) => prev - 1);
    };
    //add to cart function
    const addProduct = useStore((state) => state.addProduct)
    const addToCart =() => {
        addProduct({...products, price: products.price[Size], quantity: Quantity, size: Size})
        toast.success('Added to Cart');
    }
    return(
        <Layout>
            <div className={css.container}>
                <div className={css.imageWrapper}>
                    <Image loader={() => src} alt='' src={src} layout='fill' unoptimized objectFit='contain' />
                </div>
                {/*right side*/}
                <div className={css.right}>
                    <span>{products.name}</span>
                    <span>{products.description}</span>
                    <span>{products.price[Size]}<span style={{color:'var(--themeRed)'}}>DZD</span></span>
                    <div className={css.size}>
                        <span>Quality:</span>
                        <div className={css.SizeVariants}>
                            <div onClick={()=>setSize(0)} className={Size ===  0 ? css.selected : ''}>Poor</div>
                            <div onClick={()=>setSize(1)} className={Size ===  1 ? css.selected : ''}>Good</div>
                            <div onClick={()=>setSize(2)} className={Size ===  2 ? css.selected : ''}>Original</div>
                        </div>
                    </div> 
                    {/*quantity counter*/}
                    <div className={css.quantity}>
                        <span>Quantity</span>
                        <div className={css.counter}>
                            <Image className={css.arrow} src={LeftArrow} height={20} width={20} alt='' objectFit='contain' onClick={() => handleQuan('dec')} />
                            <span>{Quantity}</span>
                            <Image className={css.arrow} src={RightArrow} height={20} width={20} alt='' objectFit='contain' onClick={() => handleQuan('inc')} />
                        </div>
                    </div>
                    {/*button*/}
                    <div className={`btn ${css.btn}`} onClick={addToCart}>
                        Add to Cart    
                    </div>   
                </div>
                <Toaster/>
            </div>
        </Layout>
    );
}

export async function getStaticPaths(){
    const paths = await client.fetch(
        `*[_type=="products" && defined(slug.current)][].slug.current`
    );
    return{
        paths: paths.map((slug) => ({params: {slug}})),
        fallback: 'blocking',
    }
}

export async function getStaticProps(context){
    const {slug = ""} = context.params;
    const products = await client.fetch(
        `*[_type=="products" && slug.current == '${slug}'][0]`
    );
    return{
        props: {
            products,
        },
    };
}