import React, {useRef, useEffect} from 'react';
import IntroAnimation from './IntroAnimation';
import Benefits from './Benefits';
import MoreBenefits from './MoreBenefits';
import BlockAnimation from './BlockAnimation';
import creditCard from './images/dark pink credit card.png';
import styles from './styles.module.css';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';



function Animation() {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.timeline({scrollTrigger: {
            trigger: "." + styles.mainContainer,
            start: "5% 10%",
            end: "10% 20%",
            scrub: 1,
            markers: false
        }})
        .to("." + styles.creditCard, {
            transform: "scale(1.2, 1.2)",
            x: -350,
            duration: 0.6
        }, 0)
        .to("." + styles.creditCard, {
            rotation: 360,
            duration: 0.6
        }, 0)
    },[]);

    return(
        <>
            <main className={styles.mainContainer}>
                <img src={creditCard} className={styles.creditCard}/> 
                <IntroAnimation />   
                <Benefits creditCard={styles.creditCard}/> 
                <MoreBenefits creditCard={styles.creditCard}/>
            </main>
            <BlockAnimation />        
        </>


    )

}

export default Animation;