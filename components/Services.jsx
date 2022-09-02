import Image from 'next/image';
import css from '../styles/Services.module.css';
import s1 from '../assets/review.svg';
import s2 from '../assets/programmer.svg';
import s3 from '../assets/explain.svg';

export default function Services() {
    return(
        <>
            <div className={css.heading}>
                <span>WHAT WE PROVIDE ?</span>
                <span>Your Favourite Tech</span>
            </div>
            {/*features*/}
            <div className={css.services}>
                <div className={css.feature}>
                    <div className={css.ImageWrapper}>
                        <Image src={s1} alt='' objectFit='cover' layout='intrinsic' />
                    </div>
                    <span>Easy to Order !</span>
                    <span>You Only need a few steps in tech ordering.</span>
                </div>
                <div className={css.feature}>
                    <div className={css.ImageWrapper}>
                        <Image src={s2} alt='' objectFit='cover' layout='intrinsic' />
                    </div>
                    <span>Fast Delivery !</span>
                    <span>With our Partners we ship your products fastly to your place.</span>
                </div>
                <div className={css.feature}>
                    <div className={css.ImageWrapper}>
                        <Image src={s3} alt='' objectFit='cover' layout='intrinsic' />
                    </div>
                    <span>High Quality Guaranteed !</span>
                    <span>We provide different Qualities depends on Clients needs.</span>
                </div>
            </div>
        </>
    )
}