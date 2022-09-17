import React, { useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './styles.module.css'
import { useMediaQuery } from 'react-responsive';


function TextFadingInFromRight(props) {
    const stopAnimation = useMediaQuery({query: "(max-width: 1210px)"});
    const textAnimation = useRef();
    const q = gsap.utils.selector(textAnimation)
    gsap.registerPlugin(ScrollTrigger);

    
    useEffect(() => {
        let tl = gsap.timeline({scrollTrigger: {
            trigger: "." + styles.container,
            start: "100% 50%",
            end: "110% 40%",
            scrub: 0.7,
            markers: false
        }})

        if(!stopAnimation){
            tl.to("." + props.creditCard, {
                x: 300,
                transform: "rotate(360deg)",
            }, 0)
            tl.to("." + props.creditCard, {
                scale: 1.2,
            }, 0)             
        }
        return () => {
            tl.kill()
        }
    })


    useEffect(() => {
        let tl = gsap.timeline({scrollTrigger:{
            trigger: "." + styles.container,
            start: "30% 50%",
            end: "80% 40%",
            scrub: true,
            markers: true
        }})
        tl.to(q("." + styles.benefitOne), {
            opacity: 1,
            duration: 0.8
        })
        tl.to(q("." + styles.benefitTwo), {
            opacity: 1,
            duration: 0.8
        })
        tl.to(q("." + styles.benefitThree), {
            opacity: 1,
            duration: 0.8
        })  

        return () => {
            tl.kill()
        }


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