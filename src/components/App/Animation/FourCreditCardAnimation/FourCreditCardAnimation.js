import React, {useEffect} from 'react';
import styles from './styles.module.css';
import family from './images/family.jpg';
import handsWithCards from './images/hands holding cards.png';
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
    });

    return(
        <main className={styles.container}>
            <h1 className={styles.title}>
                NO CREDIT CHECK REQUIRED
            </h1>
            <div className={styles.whiteBoxes}>
                <img src={family} className={styles.image}/>
                <h3 className={styles.boxTitle}>SHARE BENEFITS WITH FAMILY!</h3>
                <p className={styles.desc}>
                    You can create a joint account with any
                    member in your family
                </p>
            </div>   
            <div className={styles.whiteBoxes}>
                <img src={handsWithCards} className={styles.image}/>
                 <h3 className={styles.boxTitle} id={styles.margin}> GET A YEAR OF ZERO INTEREST!</h3>
                 <p className={styles.desc}>
                    That's right, you read that correctly. Zero. interest. free
                 </p>
            </div>             
            <div className={styles.whiteBoxes}>
                <h3 className={styles.boxTitle}>TELL YOUR FRIENDS!</h3>
                <p className={styles.desc}>
                    The more friends that you tell to get this card,
                    you bank account will automatically get deposited $100!
                </p>
            </div>
        </main>
    )
}

export default FourCreditCardAnimation;