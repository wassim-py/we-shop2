import css from '../styles/Menu.module.css';
import { urlFor } from '../lib/client';
import Image from 'next/image';
import Link from 'next/link';

export default function Menu({products}) {
    return(
        <div className={css.container}>
            <div className={css.heading}>
                <span>OUR PRODUCTS</span>
                <span>List That Always</span>
                <span>Serve Your Geek Brain</span>
            </div>
            <div className={css.menu}>
                {/*products*/}
                {products.map((products,id)=> {
                    const src = urlFor(products.image).url()
                    return(
                        <div className={css.product} key={id}>
                            <Link href={`./products/${products.slug.current}`}>
                                <div className={css.ImageWrapper}>
                                    <Image loader = {() => src} src={src} alt='' objectFit='contain' layout='fill' />
                                </div>
                            </Link>
                            <span>{products.name}</span>
                            <span>{products.price[1]}<span style={{color:'var(--themeRed)'}}>DZD</span></span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};