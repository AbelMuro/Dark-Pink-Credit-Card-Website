import React, { useLayoutEffect} from 'react';
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
    const mobile = useMediaQuery({query: "(max-width: 1210px)"});
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let tl = gsap.timeline({scrollTrigger: {
            trigger: "." + styles.mainContainer,
            start: "10% 20%",
            end: "95% 10%",
            scrub: 0.7,
            markers: false
        }})
        if(!mobile){
            tl.to("." + styles.creditCard, {
                position: "sticky",
                transform: "scale(1.2, 1.2) translateX(-350px)",
            }, 0)
            tl.to("." + styles.creditCard, {
                rotation: 360,
            }, 0)
            tl.to("." + styles.creditCard, {
                x: 300,
                transform: "rotate(360deg)",
            }, 1)
            tl.to("." + styles.creditCard, {
                scale: 1.2,
            }, 1)
            tl.to("." + styles.creditCard, {
                transform: "rotate(25deg)",
                scale: 1.2
            }, 2)                       
        }
        return () => {
            tl.scrollTrigger.kill();
        }
    });



    return(
        <>
            <main className={styles.mainContainer}>
                <img src={creditCard} className={styles.creditCard}/> 
                <IntroAnimation />   
                <TextFadingInFromRight /> 
                <TextFadingInFromLeft />
            </main>
            <ThreeBoxFadingIn />  
            <NoAnnualFeeAnimation />
            <ImagesFadingInFromSide />
        </>
    )
}

export default Animation;