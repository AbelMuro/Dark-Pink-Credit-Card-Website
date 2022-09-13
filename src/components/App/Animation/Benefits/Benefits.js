import React, { useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './styles.module.css'


function Benefits(props) {
    const textAnimation = useRef();
    const q = gsap.utils.selector(textAnimation)
    gsap.registerPlugin(ScrollTrigger);

    //this is where i left off. i might start with photoshoping the next image that will appear
    //or will continue the animation that i started in the parent component
    useEffect(() => {
        gsap.timeline({scrollTrigger: {
            trigger: "." + props.creditCard
        }})
    })


    useEffect(() => {
        gsap.timeline({scrollTrigger: {
            trigger: "." + styles.container,
            start: "10% 40%",
            end: "30% 50%",
            scrub: 1,
            markers: true
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