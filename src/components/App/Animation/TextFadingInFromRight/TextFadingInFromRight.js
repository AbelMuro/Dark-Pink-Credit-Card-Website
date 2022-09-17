import React, { useLayoutEffect, useRef, memo} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './styles.module.css'
import { useMediaQuery } from 'react-responsive';


function TextFadingInFromRight(props) {
    const mobile = useMediaQuery({query: "(max-width: 1210px)"});
    const textAnimation = useRef();
    const q = gsap.utils.selector(textAnimation)
    gsap.registerPlugin(ScrollTrigger);

    


    useLayoutEffect(() => {
        let tl = gsap.timeline({scrollTrigger:{
            trigger: "." + styles.container,
            start: mobile ? "100px 50%" : "30% 50%",
            end: mobile ? "500px 40%": "80% 40%",
            scrub: true,
            markers: false
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
            tl.scrollTrigger.kill();
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



export default memo(TextFadingInFromRight);