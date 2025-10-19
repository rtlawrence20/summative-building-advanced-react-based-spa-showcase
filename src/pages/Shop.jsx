import React, { useContext, useState, useEffect } from "react";
import Search from "../components/Search";
import CoffeeContainer from "../components/CoffeeContainer";
import { CoffeeContext } from "../context/CoffeeContext";
import styles from "../styles/Shop.module.css";

/**
 * Shop component to display and search coffee products
 * @component
 * @returns {JSX.Element}
 */
function Shop() {

    // Access coffee data from context
    const { coffees } = useContext(CoffeeContext); // full list
    const [filteredCoffees, setFilteredCoffees] = useState(coffees || []);

    // Keep filtered list in sync when coffees change (on fetch or refetch)
    useEffect(() => {
        setFilteredCoffees(coffees || []);
    }, [coffees]);

    return (
        <div className={styles.shopContainer}>
            <aside className={styles.searchPanel}>
                <Search coffees={coffees} setFilteredCoffees={setFilteredCoffees} />
            </aside>
            <main className={styles.coffeePanel}>
                <CoffeeContainer coffees={filteredCoffees} />
            </main>
        </div>
    );
}

export default Shop;
