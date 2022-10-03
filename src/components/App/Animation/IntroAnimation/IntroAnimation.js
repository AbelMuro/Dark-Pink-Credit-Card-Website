import React, {useRef, useEffect, memo} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

function IntroAnimation(){
    const textAnimation = useRef();
    const q = gsap.utils.selector(textAnimation);          
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.timeline()
            .from(q("." + styles.title), {
                opacity: 0,
                y: -100,
                duration: 1.2,
                ease: "ease-in-out"
            })
    });

    return(
        <main className={styles.container} ref={textAnimation}> 
            <h1 className={styles.title}> The Dark Pink Mastercard!</h1>
            <p className={styles.scrollDown}> 
                scroll down{"   "}
                <FontAwesomeIcon className={styles.animation} icon={faAngleDown}/> 
            </p>
        </main>
    )
}

export default memo(IntroAnimation);