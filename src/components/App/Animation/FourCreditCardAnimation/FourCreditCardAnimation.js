import React, {useEffect} from 'react';
import styles from './styles.module.css';
import blackCreditCard from './images/black credit card.png';
import colorfulCreditCard from './images/colorful credit card.png';
import pinkGlitterCreditCard from './images/pink glitter credit card.png';
import darkPinkCreditCard from './images/dark pink credit card.png';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

function FourCreditCardAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.timeline({scrollTrigger: {
            trigger: "." + styles.container,
            start: "40% 40%",
            end: "60% 50%",
            scrub: 1,
            markers: false
        }})
        .from("#cardOne", {
            opacity: 0,
            y: -100
        })
        .from("#cardTwo", {
            opacity: 0,
            y: -100
        })
        .from("#cardThree", {
            opacity: 0,
            y: -100
        })
        .from("#cardFour", {
            opacity: 0,
            y: -100
        })
    });

    return(
        <main className={styles.container}>
            <h1 className={styles.title}>
                DIFFERENT DESIGNS WITH SAME BENEFITS!
            </h1>
            <div className={styles.whiteBoxes}>
                <img src={blackCreditCard} className={styles.creditCard} id={"cardOne"}/>
                <h3 className={styles.cardTitle}>DARK CARD</h3>
                <p className={styles.desc}>
                    Slick design with dark features!
                    Into the Goth subculture? then this card 
                    is perfect for you! Made with black titanium,
                    this card will make your gothic friends jealous
                </p>
            </div>   
            <div className={styles.whiteBoxes}>
                 <img src={colorfulCreditCard} className={styles.creditCard} id={"cardTwo"}/>
                 <h3 className={styles.cardTitle}> COLORFUL CARD</h3>
                 <p className={styles.desc}>
                    Be the envy with this majestic card!
                    Colorful all year round! Your friends will 
                    look at this card and say "I want one too!".
                    We will get rich and you will end up cool,
                    We both win!
                 </p>
            </div>             
            <div className={styles.whiteBoxes}>
                <img src={pinkGlitterCreditCard} className={styles.creditCard} id={"cardThree"}/>
                <h3 className={styles.cardTitle}>GLITTER CARD</h3>
                <p className={styles.desc}>
                    Show off that glitter to your friends 
                    with this newly design glitter card.
                    It is made of real titanium with 
                    strawberry scented glitter. For 
                    Diva's only!
                </p>
            </div>
            <div className={styles.whiteBoxes}>
                <img src={darkPinkCreditCard} className={styles.creditCard} id={"cardFour"}/>
                <h3 className={styles.cardTitle}>DARK PINK CARD</h3>
                <p className={styles.desc}>
                    Our classic dark pink card!
                    This card never gets old.
                    With its design that combines
                    pink and black 
                </p>
            </div>
        </main>
    )
}

export default FourCreditCardAnimation;