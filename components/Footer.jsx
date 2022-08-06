import {UilInstagram, UilFacebook, UilTwitter} from '@iconscout/react-unicons'
import Image from 'next/image'
import css from '../styles/footer.module.css';
import Logo from '../assets/Logo.png';

export default function Footer() {
    return(
        <div className={css.container}>
            <span>ALL RIGHT RESERVED</span>
            <div className={css.social}>
                <UilInstagram size={45}/>
                <UilFacebook size={45}/>
                <UilTwitter size={45}/>
            </div>
            <div className={css.logo}>
                <Image src={Logo} alt="" width={50} height={50}/>
                <span>La-Arena Lounge</span>
                
            </div>
            
           
        </div>
    )
};
