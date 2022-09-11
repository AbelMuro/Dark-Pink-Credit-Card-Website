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
        gsap.timeline()
            .to(nestedElement("." + styles.creditCard), {
                transform: "scale(1.2, 1.2)",
                duration: 0.6
            })
    });

    return(
        <main className={styles.intro} ref={creditCardAnimation}> 
           <img src={creditCard} className={styles.creditCard}/>
           <p className={styles.benefitOne}> 5% cashback on any purchase</p>
           <p className={styles.benefitTwo}> 7% cashback on restaurants, gas stations, and grocery stores</p>
           <p className={styles.benefitThree}> 10% discount on purchasing dark pink stuff!</p>
        </main>
    )

}

export default Introduction;