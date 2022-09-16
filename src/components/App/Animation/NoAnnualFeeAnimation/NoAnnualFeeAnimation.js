import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import darkPinkCreditCard from './images/dark pink credit card.png';
import styles from './styles.module.css';

function NoAnnualFeeAnimation() {
    const creditAndTextAnimation = useRef();
    const q = gsap.utils.selector(creditAndTextAnimation);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() =>{
        gsap.timeline({scrollTrigger:{
            trigger: "." + styles.container,
            start: "0% 60%",
            end: "60% 70%",
            scrub: 1,
            markers: false
        }})
        .from(q("." + styles.creditCard), {
            y: -300,
            rotate: 45,
            scale: 0.5
        })
        .from(q("." + styles.title), {
            opacity: 0
        })
        .from(q("." + styles.desc), {
            opacity: 0
        })
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

export default NoAnnualFeeAnimation;