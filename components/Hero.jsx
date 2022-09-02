import css from '../styles/Hero.module.css';
import Image from 'next/image';
import HeroImage from '../assets/desk.svg';
import { UilPhone } from '@iconscout/react-unicons';

export default function Hero() {
    return(
        <div className={css.container}>
            {/*left side*/}
            <div className={css.left}>
                <div className={css.heroText}>
                    <span>Be The Fastest </span>
                    <span>In Delivering</span>
                    <span>Your<span style={{color: "var(--themeRed)"}}> High Tech</span></span>
                </div>
                <span className={css.miniText}>
                    Our Mission is to provide to your desk the best gadgets & accessories with fast delivery to your place.
                </span>
                <button className={`btn ${css.btn}`}>
                    Get Started
                </button>
            </div>

            {/*right side*/}
            <div className={css.right}>
                <div className={css.imageContainer}>
                    <Image src={HeroImage} alt="" layout='intrinsic'/>
                </div>
                <div className={css.ContactUs}>
                    <span>Contact Us</span>
                    <div>
                        <UilPhone color='white'/>
                    </div>
                </div>
                {/*<div className={css.Pizza}>
                    <div>
                        <Image src={Pizza1} alt="" objectFit='cover' layout='intrinsic'/>
                    </div>
                    <div className={css.details}>
                        <span>Pizza Carré </span>
                        <span>150 <span style={{color: 'var(--themeRed)'}}>DZD</span></span>
                    </div>
                </div>*/}
            </div>
        </div>
    );
}