
import React from "react";
import styles from "../styles/Home.module.css";

/**
 * Home component to display the landing page
 * @component
 * @returns {JSX.Element}
 */
function Home() {
    
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Welcome to RoastCraft Coffee</h1>
            </header>
            <section className={styles.content}>
                <p>
                    Discover our curated collection of coffees from around the world. Each
                    cup is hand-selected to deliver a rich and flavorful experience.
                </p>
                <p>
                    Explore our shop, learn about our story, or head to the admin portal
                    to manage our coffee offerings.
                </p>
            </section>
        </div>
    );
}

export default Home;