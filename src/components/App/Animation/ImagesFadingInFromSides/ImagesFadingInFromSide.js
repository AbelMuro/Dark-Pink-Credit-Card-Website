import React, {useLayoutEffect, useRef , memo} from 'react';
import styles from './styles.module.css';
import travelImage from './images/travel image.jpg';
import cashBackImage from './images/cash back image.png';
import guyWithCardImage from './images/guy with card.jpg';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';


function ImagesFadingInFromSide() {
    const boxAnimationOne = useRef();
    const boxAnimationTwo = useRef();
    const boxAnimationThree = useRef();
    const one = gsap.utils.selector(boxAnimationOne);
    const two = gsap.utils.selector(boxAnimationTwo);
    const three = gsap.utils.selector(boxAnimationThree);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const tl = gsap.timeline({scrollTrigger: {
            trigger: "." + styles.container,
            start: "5% 40%",
            end: "70% 50%",
            scrub: 1,
            markers: false
        }})
        tl.from(one("." + styles.whiteBoxOne), {
            opacity: 0,
            x: 100
        },0)
        tl.from(one("." + styles.image), {
            opacity: 0,
            x: -100
        },0)
        tl.from(two("." + styles.whiteBoxTwo), {
            opacity: 0,
            x: -100
        }, 1)
        tl.from(two("." + styles.image), {
            opacity: 0,
            x: 100,
        }, 1)
        tl.from(three("." + styles.whiteBoxThree), {
            opacity: 0,
            x: 100
        }, 2)
        tl.from(three("." + styles.image), {
            opacity: 0,
            x: -100
        }, 2)

        return () => {
            tl.scrollTrigger.kill();
        }
    })

    return(
        <section className={styles.container}>
            <div className={styles.travelContainer} ref={boxAnimationOne}>
                <img src={travelImage} className={styles.image}/>
                <div className={styles.whiteBoxOne}>
                    <h2 className={styles.title}>
                        TRAVEL ANYWHERE
                    </h2>
                    <p className={styles.desc}>
                        Take it to any country around the world
                        and the US dollar will automatically be converted 
                        to the currency of the country that you use it in
                    </p>
                </div>
            </div>
            <div className={styles.cashBackContainer} ref={boxAnimationTwo}>
                <img src={cashBackImage} className={styles.image}/>
                <div className={styles.whiteBoxTwo}>     
                    <h2 className={styles.title}>
                        REWARDS!
                    </h2>
                    <p className={styles.desc}>
                        Every time you purchase something with this card
                        you get a reward of $1. Choose to redeem these rewards
                        by direct deposit or statement credit
                    </p>
                </div>
            </div>
            <div className={styles.graceContainer} ref={boxAnimationThree}>
                <img src={guyWithCardImage} className={styles.image}/>
                <div className={styles.whiteBoxThree}>
                    <h2 className={styles.title}>
                        1 MONTH GRACE PERIOD!
                    </h2>
                    <p className={styles.desc}>
                        Missed the deadline to make a payment?
                        No worries! we give a one month grace period
                        to our customers.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default memo(ImagesFadingInFromSide);