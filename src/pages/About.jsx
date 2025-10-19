
import React from "react";
import styles from "../styles/About.module.css";

/**
 * About component to display information about the coffee shop
 * 
 * @component 
 * @returns {JSX.Element}
 */
function About() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>About Our Coffee</h1>
            </header>
            <section className={styles.content}>
                <p>
                    At RoastCraft Coffee, we believe every bean tells a story — from the
                    sunlit fields of Colombia to your morning cup. Our mission is to
                    deliver ethically sourced, expertly roasted coffee that inspires every
                    brew.
                </p>
                <p>
                    Whether you're a casual drinker or a true connoisseur, our blends are
                    crafted to balance bold flavor and smooth finish. Every sip is a step
                    toward sustainable coffee and a connected community of growers and
                    drinkers.
                </p>
            </section>
        </div>
    );
}

export default About;
