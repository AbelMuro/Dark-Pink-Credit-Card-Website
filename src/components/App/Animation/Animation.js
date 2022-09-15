import React, { useEffect} from 'react';
import IntroAnimation from './IntroAnimation';
import TextFadingInFromRight from './TextFadingInFromRight';
import TextFadingInFromLeft from './TextFadingInFromLeft';
import ThreeBoxFadingIn  from './ThreeBoxFadingIn';
import NoAnnualFeeAnimation from './NoAnnualFeeAnimation';
import ImagesFadingInFromSide from './ImagesFadingInFromSides';
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
        }, 0)
        .to("." + styles.creditCard, {
            rotation: 360,
        }, 0)
    },[]);

    return(
        <>
            <main className={styles.mainContainer}>
                <img src={creditCard} className={styles.creditCard}/> 
                <IntroAnimation />   
                <TextFadingInFromRight creditCard={styles.creditCard}/> 
                <TextFadingInFromLeft creditCard={styles.creditCard}/>
            </main>
            <ThreeBoxFadingIn />  
            <NoAnnualFeeAnimation />
            <ImagesFadingInFromSide/>
        </>


    )

}

export default Animation;