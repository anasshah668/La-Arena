import css from '../styles/Hero.module.css'
import Cherry from "../assets/Cherry.png"
import Image from 'next/image'
import HeroImage from "../assets/HeroImage.png"
import {UilPhone} from '@iconscout/react-unicons';
import Food1  from "../assets/2.png"

export default function Hero() 
 {
    return (
        <div className={css.container}>
            <div className={css.left}>

           
            <div className={css.cherryDiv}>
                <span>
                    More then just a Resturant
                </span>
                <Image src={Cherry} alt="" width={25} height={25}/>
            </div>       
            
            <div className={css.heroText}>
                <span>Be The Fastest </span>
                <span>In Delivery</span>
                <span>
                    Your <span style={{color:"var(--themeRed)"}}>Food</span>
                </span>

            </div>
            <span className={css.miniText}>
                    Our Mission Is to provide you with the best <span style={{color:"var(--themeRed"}}>Sports </span>Enviroment
                    and <span>Delicious</span> Food
            </span>
            <button className={`btn $css.btn`}>
                    Get Started
            </button>
            </div>
            <div className={css.right}>
                    <div className={css.imageContainer}>
                        <Image src={HeroImage} alt="" layout='intrinsic'/>
                    
                    </div>
                  <div className={css.ContactUs}>
                        <span>Contact us</span>
                            <div>
                                <UilPhone color='white'/>
                            </div>
                    </div>  
                    <div className={css.pizza}>
                            <div>
                            <Image src={Food1} objectFit/>
                            </div>
                            <div className={css.details}>
                                    <span>Food Starting from</span>
                                        <span style={{color:"var(--themeRed)"}}>Rs <span>250</span></span>
                                        
                                    </div>
                    </div>
            </div>
        </div>
    )
 };