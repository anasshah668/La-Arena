import css from "../styles/Services.module.css"
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png' 
import Image from 'next/image'
export default function Services() 

 {
    return (
        <>
            <div className={css.heading}>
               <span>What we Serve </span>
               <span>Your Favourite Food </span>
               <span>Sports Enviroment </span>
            </div>
            <div className={css.services}>

                <div className={css.features}>
                
                        <div className={css.ImageWrapper}>
                            <Image src={s1} alt="" objectFit='cover' Layout='intrinsic'/>
                        </div>

                        <span>Easy to order</span>
                        <span>You only need few steps in food ordering</span>
                </div>

                <div className={css.features}>
                <div className={css.ImageWrapper}>
                            <Image src={s2} alt="" objectFit='cover' Layout='intrinsic'/>
                        </div>
                        <span>Fast and Free Delivery</span>
                        <span>Delivery that is always on time and even faster</span>

                </div>
                <div className={css.features}>
                <div className={css.ImageWrapper}>
                            <Image src={s3} alt="" objectFit='cover' Layout='intrinsic'/>
                        </div>

                        <span>Best Food at your door step</span>
                        <span>We will deliver best and quality food at your door step</span>
                </div>
        
        

            </div>
            </>
    )
 };