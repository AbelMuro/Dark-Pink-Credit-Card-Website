import React, {useLayoutEffect, useRef, memo} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './styles.module.css';
import {useMediaQuery} from 'react-responsive';

function TextFadingInFromLeft() {
    const mobile = useMediaQuery({query: "(max-width: 1210px)"});
    const textAnimation = useRef();
    const q = gsap.utils.selector(textAnimation);
    gsap.registerPlugin(ScrollTrigger);


    useLayoutEffect(() => {
        let tl = gsap.timeline({scrollTrigger:{
            trigger: "." + styles.container,
            start: mobile ? "100px 50%" :"30% 50%",
            end: mobile ? "500px 40%" :"80% 40%",
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

        return() => {
            tl.scrollTrigger.kill();
        }

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

export default memo(TextFadingInFromLeft);