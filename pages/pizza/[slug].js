import Layout from '../../components/Layout'
import { client, urlFor } from '../../lib/client'
import css from "../../styles/pizza.module.css"
import Image from 'next/image'
import leftarrow from "../../assets/arrowLeft.png"
import rightarrow from "../../assets/arrowright.png"
import { useState } from 'react'
import { useStore } from '../../store/store'
import toast,{Toaster} from "react-hot-toast"
export default function Pizza({ pizza }) {
    const src = urlFor(pizza.image).url()
    const [Size, setSize] = useState(1);
    const [Quantity, setQuantity] = useState(1);
    //handle quantity
    const handleQuantity=(type)=>
    {
        type==='inc'
        ? setQuantity((prev)=>prev+1)
        : Quantity===1
        ? null
        :setQuantity((prev)=>prev-1)
    };

    //add to cart
    const addPizza=useStore((state)=>state.addPizza)
    const addToCart=()=>{
        addPizza({...pizza, price: pizza.price[Size], quantity:Quantity,size:Size})
        toast.success("Added to Cart");
    }
    return (

        <Layout>
            <div className={css.container}>
                <div className={css.ImageWrapper}>
                    <Image loader={() => src}
                        alt="" src={src} layout='fill' unoptimized objectFit="cover" />
                </div>

                <div className={css.right}>
                    <span>{pizza.name}</span>
                    <span>{pizza.details}</span>
                    <span><span style={{ color: "var(--themeRed)" }}>Rs </span>
                        {pizza.price[Size]}
                    </span>
                    <div className={css.size}>
                        <span>size</span>
                        <div className={css.sizeVariants}>

                            <div onClick={() => setSize(0)}
                            
                             >Small</div>

                            <div onClick={() => setSize(1)} 
                            
                            >Medium</div>
                            
                             <div onClick={() => setSize(2)}
                            >Large</div>
                        </div>
                    </div>
                    <div className={css.quantity}>
                        <span>Quantity</span>
                        <div className={css.counter}>
                            <Image src={leftarrow} height={20} width={20} 
                              alt="" objectFit='contain' 
                              onClick={()=>handleQuantity("dec")} />
                            <span>{Quantity}</span>
                            <Image src={rightarrow} height={20} width={20} alt="" objectFit='contain'
                            onClick={()=>handleQuantity("inc")} />
                        </div>
                    </div>
                    <div className={`btn ${css.btn}`}onClick={addToCart}>
                        Add to cart
                    </div>
                </div>
                <Toaster/>
            </div>
        </Layout>
    )
}
export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type=="pizza" && defined(slug.current)][].slug.current`
    );
    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: 'blocking'
    }
}
export async function getStaticProps(context) {
    const { slug = "" } = context.params;
    const pizza = await client.fetch(
        `*[_type=="pizza" && slug.current== '${slug}'][0]`

    );
    return {
        props: {
            pizza,
        },
    };
}