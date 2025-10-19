import React, { useState, useEffect } from "react";
import styles from "../styles/Search.module.css";

/**
 * Search component to filter coffees based on name, origin, and max price
 * @param {Object} props
 * @param {Array} props.coffees - Array of coffee objects to filter
 * @param {Function} props.setFilteredCoffees - Function to update the filtered coffees list
 * @returns {JSX.Element}
 */
function Search({ coffees, setFilteredCoffees }) {

    // State to hold filter criteria
    const [filters, setFilters] = useState({
        name: "",
        origins: [],
        maxPrice: "",
    });

    // Dynamically get unique origins from coffees
    const originsList = [...new Set(coffees?.map((c) => c.origin))];

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === "origins") {
            setFilters((prev) => {
                const updatedOrigins = checked
                    ? [...prev.origins, value]
                    : prev.origins.filter((o) => o !== value);
                return { ...prev, origins: updatedOrigins };
            });
        } else {
            setFilters((prev) => ({ ...prev, [name]: value }));
        }
    };

    // Apply filters
    useEffect(() => {
        if (!coffees) return;

        const filtered = coffees.filter((coffee) => {
            const matchName = coffee.name
                .toLowerCase()
                .includes(filters.name.toLowerCase());
            const matchOrigin =
                filters.origins.length > 0 ? filters.origins.includes(coffee.origin) : true;
            const matchPrice = filters.maxPrice
                ? coffee.price <= parseFloat(filters.maxPrice)
                : true;

            return matchName && matchOrigin && matchPrice;
        });

        setFilteredCoffees(filtered);
    }, [filters, coffees, setFilteredCoffees]);

    return (
        <div className={styles.searchContainer}>
            <h3>Search Coffees</h3>

            {/* Name Filter */}
            <div className={styles.field}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={filters.name}
                    onChange={handleChange}
                />
            </div>

            {/* Origin Filter */}
            <div className={styles.field}>
                <label>Origin:</label>
                {originsList.map((origin) => (
                    <div key={origin} className={styles.checkbox}>
                        <input
                            type="checkbox"
                            id={`origin-${origin}`}
                            name="origins"
                            value={origin}
                            checked={filters.origins.includes(origin)}
                            onChange={handleChange}
                        />
                        <label htmlFor={`origin-${origin}`}>{origin}</label>
                    </div>
                ))}
            </div>

            {/* Max Price Filter */}
            <div className={styles.field}>
                <label htmlFor="maxPrice">Max Price:</label>
                <input
                    type="number"
                    step="0.01"
                    id="maxPrice"
                    name="maxPrice"
                    value={filters.maxPrice}
                    onChange={handleChange}
                    placeholder="e.g., 5.00"
                />
            </div>

            <button
                className={styles.resetButton}
                onClick={() =>
                    setFilters({ name: "", origins: [], maxPrice: "" })
                }
            >
                Reset
            </button>
        </div>
    );
}

export default Search;
