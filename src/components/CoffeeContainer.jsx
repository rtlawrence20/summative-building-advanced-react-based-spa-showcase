import React from "react";
import CoffeeList from "./CoffeeList";

/**
 * CoffeeContainer component to handle the display of coffee list or a message when no coffees are available
 * 
 * @param {Object} props
 * @param {Array} props.coffees - Array of coffee objects
 * @returns {JSX.Element}
 */
function CoffeeContainer({ coffees }) {

    // Display message if no coffees are found
    if (!coffees || coffees.length === 0) return <p>No coffees found.</p>;

    return <CoffeeList coffees={coffees} />;
}

export default CoffeeContainer;
