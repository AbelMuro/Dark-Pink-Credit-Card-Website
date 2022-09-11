import React, {useRef, useEffect} from 'react';
import styles from './styles.module.css';
import DarkPinkLogo from './images/Dark pink logo.png';
import { gsap } from 'gsap';

function NavigationBar() {
    const NavAnimation = useRef();


    useEffect(() => {
       gsap.from(NavAnimation.current, {
            left: "-300px",
            duration: 1.5,
            ease: "back.out(1.7)"
        })
    })


    return(
        <nav className={styles.navContainer} ref={NavAnimation}>
            <div className={styles.flexItemOne}>
                <img src={DarkPinkLogo} className={styles.darkPinkLogo}/>
                <p className={styles.darkPinkTitle}>
                    Dark Pink
                </p>
            </div>
        </nav>
    )
}

export default NavigationBar;