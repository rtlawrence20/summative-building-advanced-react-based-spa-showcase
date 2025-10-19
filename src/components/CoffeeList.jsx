
import React from "react";
import CoffeeCard from "./CoffeeCard";
import styles from "../styles/CoffeeList.module.css";

/**
 * CoffeeList component to render a list of CoffeeCard components
 * @param {Object} props
 * @param {Array} props.coffees - Array of coffee objects
 * @returns {JSX.Element}
 */
function CoffeeList({ coffees }) {
    return (
        <div className={styles.coffeeList}>
            {coffees.map((coffee) => (
                <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
        </div>
    );
}

export default CoffeeList;
