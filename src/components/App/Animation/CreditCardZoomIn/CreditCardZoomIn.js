import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import darkPinkCreditCard from './images/dark pink credit card.png';
import styles from './styles.module.css';

function CreditCardZoomIn() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() =>{
        gsap.timeline({scrollTrigger:{
            trigger: "." + styles.container,
            start: "30% 40%",
            end: "40% 50%",
            markers: true
        }})
        .to("." + styles.creditCard, {
            
        })
    })

    return(
        <section className={styles.container}>
            <img src={darkPinkCreditCard} className={styles.creditCard}/>
        </section>    
    )
}

export default CreditCardZoomIn;