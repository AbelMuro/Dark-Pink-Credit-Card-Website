import React, { useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './styles.module.css'


function TextFadingInFromRight(props) {
    const textAnimation = useRef();
    const q = gsap.utils.selector(textAnimation)
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.timeline({scrollTrigger: {
            trigger: "." + styles.container,
            start: "100% 40%",
            end: "110% 50%",
            scrub: 1,
            markers: false
        }})
        .to("." + props.creditCard, {
            x: 300,
            transform: "rotate(360deg)",
        }, 0)
        .to("." + props.creditCard, {
            scale: 1.2,
        }, 0)
    })


    useEffect(() => {
        gsap.timeline({scrollTrigger: {
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
       <section className={styles.container} ref={textAnimation}>
            <div className={styles.benefitOne}>
                <h2 className={styles.benefitTitle}>
                    15% CASH BACK
                </h2>
                <p className={styles.benefitDesc}>
                    15% cash back on all purchases
                </p>
            </div>
            <div className={styles.benefitTwo}>
                <h2 className={styles.benefitTitle}>
                    10% DISCOUNT
                </h2>
                <p className={styles.benefitDesc}>
                    10% discount on all purchases
                </p>
            </div>
            <div className={styles.benefitThree}>
                <h1 className={styles.benefitTitle}>
                    $100 GIFT
                </h1>
                <p className={styles.benefitDesc}> 
                    $100 gift upon signing up!
                </p>
            </div>   
       </section>   
    )
};



export default TextFadingInFromRight;