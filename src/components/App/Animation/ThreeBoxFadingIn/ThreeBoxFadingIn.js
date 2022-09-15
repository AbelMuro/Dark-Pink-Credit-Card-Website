import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import family from './images/family.jpg';
import handsWithCards from './images/hands holding cards.png';
import guyHoldingCard from './images/guy holding card.png';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

function FourCreditCardAnimation() {
    const boxAnimation = useRef();
    const q = gsap.utils.selector(boxAnimation);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.timeline({scrollTrigger: {
            trigger: "." + styles.container,
            start: "40% 40%",
            end: "60% 50%",
            scrub: 1,
            markers: true
        }})
        .from(q("#boxOne"), {
            opacity: 0,
            y: 100,
        })
        .from(q("#boxTwo"), {
            opacity: 0,
            y: 100,
        })
        .from(q("#boxThree"), {
            opacity: 0,
            y: 100
        })
    });

    return(
        <main className={styles.container} ref={boxAnimation}>
            <h1 className={styles.title}>
                NO CREDIT CHECK REQUIRED
            </h1>
            <div className={styles.whiteBoxes} id={"boxOne"}>
                <img src={family} className={styles.image}/>
                <h3 className={styles.boxTitle}>SHARE BENEFITS WITH FAMILY!</h3>
                <p className={styles.desc}>
                    You can create a joint account with any
                    member in your family
                </p>
            </div>   
            <div className={styles.whiteBoxes} id={"boxTwo"}>
                <img src={handsWithCards} className={styles.image}/>
                 <h3 className={styles.boxTitle}> GET A YEAR OF ZERO INTEREST!</h3>
                 <p className={styles.desc}>
                    That's right, you read that correctly. Zero. interest. free
                 </p>
            </div>             
            <div className={styles.whiteBoxes} id={"boxThree"}>
                <img src={guyHoldingCard} className={styles.image}/>
                <h3 className={styles.boxTitle} id={styles.overflowText}>TELL YOUR FRIENDS!</h3>
                <p className={styles.desc}>
                    You're bank account will automatically get deposited $100!
                    when you tell your friends
                </p>
            </div>
        </main>
    )
}

export default FourCreditCardAnimation;