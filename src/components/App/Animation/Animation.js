import React, {useRef, useEffect} from 'react';
import Benefits from './Benefits';
import creditCard from './images/dark pink credit card.png';
import styles from './styles.module.css';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';



function Animation() {
    const creditCardAnimation = useRef();
    const creditCardRef = useRef();
    const q = gsap.utils.selector(creditCardAnimation);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.timeline()
            .from(q("." + styles.titleOne), {
                left: -10,
                opacity: 0,
                duration: 2.5
            }, 0)
            .from(q("." + styles.titleTwo), {
                right: -10,
                opacity: 0,
                duration: 1.6
            }, 0)
            .from(q("." + styles.titleThree), {
                opacity: 0,
                top: -10,
                duration: 1.2,
                ease: "ease-in-out"
            }, 0)
            .from(q("." + styles.titleFour), {
                right: -10,
                duration: 1.6,
                opacity: 0,
                ease: "ease-out"
            }, 0)
            .from(q("." + styles.titleFive), {
                left: -10,
                duration: 3.2,
                opacity: 0,
                ease: "elastic"
            },0)
            .from(q("." + styles.titleSix), {
                opacity: 0,
                left: -10,
                duration: 1.2,
                ease: "bounce"
            }, 0)
            .from(q("." + styles.titleSeven), {
                opacity: 0,
                right: -10,
                duration: 1.4,
                ease: "bounce"
            }, 0);
    },[]);

    useEffect(() => {
        gsap.timeline({scrollTrigger: {
            trigger: "." + styles.container,
            start: "10% 0%",
            end: "40% 20%",
            scrub: 1,
            markers: false
        }})
        .to(q("." + styles.creditCard), {
            position: "fixed",
            transform: "scale(1.2, 1.2)",
            x: -350,
            duration: 0.6
        }, 0)
        .to(q("." + styles.creditCard), {
            rotation: 360,
            duration: 0.6
        }, 0)

        console.log(creditCardRef.current);
    },[]);

    return(
        <>
            <main className={styles.container} ref={creditCardAnimation}> 
                <img src={creditCard} className={styles.creditCard}/>
                <p className={styles.titleOne}> Such a beautifull card</p>
                <p className={styles.titleTwo}> Such a sexy card</p>
                <p className={styles.titleThree}> The Dark Pink Mastercard!</p>
                <p className={styles.titleFour}> Nothing is better than this</p>
                <p className={styles.titleFive}> Your friends will envy you</p>
                <p className={styles.titleSix}> Cashback on every purchase</p>
                <p className={styles.titleSeven}> No credit check required!</p>
            </main>
            <Benefits creditCard={styles.creditCard} ref={creditCardRef}/> 
        </>

    )

}

export default Animation;