//testing git commands


import React, {useRef, useEffect} from 'react';
import creditCard from './images/dark pink credit card.png';
import styles from './styles.module.css';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';


function Introduction() {
    const creditCardAnimation = useRef();
    const nestedElement = gsap.utils.selector(creditCardAnimation);
    gsap.registerPlugin(ScrollTrigger);


    useEffect(() => {
        //gsap.from(nestedElement("." + ))

        gsap.timeline({scrollTrigger: {
            trigger: ".introOne",
            start: "10% 10%",
            end: "20% 20%",
            scrub: 1,
            markers: true
        }})
        .to(nestedElement("." + styles.creditCard), {
            position: "fixed",
            transform: "scale(1.2, 1.2)",
            x: -150,
            duration: 0.6
        }, 0)
        .to(nestedElement("." + styles.creditCard), {
            rotation: 360,
            duration: 0.6
        }, 0)
    },[]);

    return(
        <>
            <main className={styles.introOne} ref={creditCardAnimation}> 
                <img src={creditCard} className={styles.creditCard}/>
                <p className={styles.titleOne}> Such a beautifull card</p>
                <p className={styles.titleTwo}> Such a sexy credit card</p>
                <p className={styles.titleThree}> The Dark Pink Mastercard!</p>
            </main>
            <section className={styles.introTwo}>

            </section>        
        </>

    )

}

export default Introduction;