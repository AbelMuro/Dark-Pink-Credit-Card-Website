import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './styles.module.css';

function TextFadingInFromLeft(props) {
    const textAnimation = useRef();
    const q = gsap.utils.selector(textAnimation);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.timeline({scrollTrigger:{
            trigger: "." + styles.container,
            start: "80% 40%",
            end: "90% 50%",
            scrub: 1,
            markers: false
        }})
        .to("." + props.creditCard, {
            transform: "rotate(25deg)",
            scale: 1.2
        }, 0)
    })

    useEffect(() => {
        gsap.timeline({scrollTrigger:{
            trigger: "." + styles.container,
            start: "10% 40%",
            end: "60% 50%",
            scrub: 1,
            markers: false
        }})
        .from(q("." + styles.benefitOne), {
            opacity: 0,
            duration: 0.8
        })
        .from(q("." + styles.benefitTwo), {
            opacity: 0,
            duration: 0.8
        })
        .from(q("." + styles.benefitThree), {
            opacity: 0,
            duration: 0.8
        })
    })

    return(
        <main className={styles.container} ref={textAnimation}>
            <div className={styles.benefitOne}>
                <h2 className={styles.benefitTitle}>
                    MADE WITH TITANIUM
                </h2>
                <p className={styles.benefitDesc}>
                    This card will never break!
                </p>
            </div>
            <div className={styles.benefitTwo}>
                <h2 className={styles.benefitTitle}>
                    SLICK DESIGN
                </h2>
                <p className={styles.benefitDesc}>
                    Be the envy with this card!
                </p>
            </div>
            <div className={styles.benefitThree}>
                <h2 className={styles.benefitTitle}>
                    SHINY
                </h2>
                <p className={styles.benefitDesc}>
                    This card will emit a glow in the sun!
                </p>
            </div>
        </main>
    )
}

export default TextFadingInFromLeft;