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
import {useMediaQuery} from 'react-responsive';


function Animation() {
    const stopAnimation = useMediaQuery({query: "(max-width: 1210px)"});
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let tl = gsap.timeline({scrollTrigger: {
            trigger: "." + styles.mainContainer,
            start: "10% 20%",
            end: "20% 10%",
            scrub: 0.7,
            markers: false,
        }})
        
        if(!stopAnimation){
            tl.to("." + styles.creditCard, {
                position: "sticky",
                transform: "scale(1.2, 1.2)",
                x: -350,
            }, 0)
            tl.to("." + styles.creditCard, {
                rotation: 360,
            }, 0)                
        }
        return () => {
            tl.kill()
        }
    });



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