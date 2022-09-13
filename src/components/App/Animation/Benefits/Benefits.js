import React, { useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './styles.module.css'


function Benefits(props) {
    const textAnimation = useRef();
    const q = gsap.utils.selector(textAnimation)
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.timeline({scrollTrigger: {
            trigger: "." + styles.container,
            start: "60% 40%",
            end: "90% 50%",
            scrub: 1,
            markers: true
        }})
        .to("." + props.creditCard, {
            x: 350,
            transform: "rotate(360deg)",
            duration: 0.9,
        })
    })


    useEffect(() => {
        gsap.timeline({scrollTrigger: {
            trigger: "." + styles.container,
            start: "10% 40%",
            end: "30% 50%",
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
            <p className={styles.benefitOne}>15% cash back on all purchases</p>
            <p className={styles.benefitTwo}>10% discount on all purchases</p>
            <p className={styles.benefitThree}> $100 gift upon signing up!</p>
       </section>   
    )
};



export default Benefits;