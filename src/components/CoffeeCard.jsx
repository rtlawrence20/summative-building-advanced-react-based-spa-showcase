import React from "react";
import styles from "../styles/CoffeeCard.module.css";

/**
 * CoffeeCard component to display individual coffee details
 * 
 * @param {Object} props
 * @param {Object} props.coffee - The coffee object containing details
 * @returns {JSX.Element} 
 */
function CoffeeCard({ coffee }) {
    return (
        <div className={styles.card}>
            <h3>{coffee.name || "Unnamed Coffee"}</h3>
            {coffee.img ? (
                <img src={coffee.img} alt={coffee.name} />
            ) : (
                <img src="/assets/placeHolderCoffee.jpg" alt="Placeholder Coffee" />
            )}
            <p>{coffee.desc || "No description"}</p>
            <p>Origin: {coffee.origin || "Unknown"}</p>
            <p>Price: ${coffee.price || "0.00"}</p>
        </div>
    );
}

export default CoffeeCard;
