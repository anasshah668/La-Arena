import css from '../styles/Menu.module.css'
import Image from 'next/image'
import { urlFor } from '../lib/client';
import Link from 'next/link' 
export default function Menu({ posts }) {
   
    return (
        <div className={css.container}>
            <div className={css.heading}>
                <span style={{ color: "var(--themeRed)" }}>Our Menu</span>
                <span>Our Delicious Food </span>
                <span>Make you Fall in Love with La-Arena</span>
            </div>
            {/* menu from sanity*/}
            <div className={css.menu}>
                {posts.posts.map((pizza, id) => {
                    const src = urlFor(pizza.image).url()
                    return (
                        <div className={css.pizza} key={id}>
                           
                           
                            <Link href={`./pizza/${pizza.slug.current}`}>
                            <div className={css.ImageWrapper}>
                                <Image loader={() => src}
                                    src={src} alt='' objectFit='cover' layout='fill'  />
                            </div>
                            </Link>

                            <span>{pizza.name}</span>
                            <span>
                                <span style={{color: "var(--themeRed)"}}> Rs </span>
                                {pizza.price[0]}
                            </span>                           

                        </div>
                         );
                        })}
            </div>
        </div>
    );
}