import React, {useLayoutEffect, useRef, memo} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import darkPinkCreditCard from './images/dark pink credit card.png';
import styles from './styles.module.css';
import {useMediaQuery} from 'react-responsive';


function NoAnnualFeeAnimation() {
    const mobile = useMediaQuery({query: "(max-width: 650px)"})
    const creditAndTextAnimation = useRef();
    const q = gsap.utils.selector(creditAndTextAnimation);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() =>{
        const tl = gsap.timeline({scrollTrigger:{
            trigger: "." + styles.container,
            start: mobile ? "0% 70%" : "0% 70%",
            end: mobile ? "60% 60%" : "60% 60%" ,
            scrub: 1,
            markers: true
        }})
        tl.to(q("." + styles.creditCard), {
            y: 0,
            rotate: 0,
            scale: mobile ? 0.5 : 1
        })
        tl.to(q("." + styles.title), {
            opacity: 1
        })
        tl.to(q("." + styles.desc), {
            opacity: 1
        })

        return () => {
            tl.scrollTrigger.kill();
        }
    })

    return(
        <section className={styles.container} ref={creditAndTextAnimation}>
            <h1 className={styles.title}>
                NO ANNUAL FEE!
            </h1>
            <img src={darkPinkCreditCard} className={styles.creditCard}/>
            <p className={styles.desc}>
                That's right! you read that correctly. 
                No. Annual. Fee
            </p>
        </section>    
    )
}

export default memo(NoAnnualFeeAnimation);