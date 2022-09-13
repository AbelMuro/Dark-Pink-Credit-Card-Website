import React, { useEffect, useRef, forwardRef } from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './styles.module.css'


//finally understand this, the whole point of forwardRef
//is for the parent component to pass down an empty ref 
//to the child component, then the child component will assign
//that ref to an element, then the parent component can manipulate
//that element
const Benefits = forwardRef((props, ref) => {
    const textAnimation = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        
    })


    useEffect(() => {
        gsap.timeline({scrollTrigger: {
            trigger: "." + styles.container,
            start: "10% 40%",
            end: "30% 50%",
            scrub: 1,
            markers: true
        }})
        .from("." + styles.benefitOne, {
            opacity: 0,
            duration: 0.8
        })
        .from("." + styles.benefitTwo, {
            opacity: 0,
            duration: 0.8
        })
        .from("." + styles.benefitThree, {
            opacity: 0,
            duration: 0.8
        })
    })

    return(            
       <section className={styles.container} ref={textAnimation}>
            <p className={styles.benefitOne} ref={ref}>15% cash back on all purchases</p>
            <p className={styles.benefitTwo}>10% discount on all purchases</p>
            <p className={styles.benefitThree}> $100 gift upon signing up!</p>
       </section>   
    )

})



export default Benefits;