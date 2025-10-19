import React, { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const CoffeeContext = createContext();

/**
 * CoffeeProvider component to provide coffee data and actions via context
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element}
 */
export const CoffeeProvider = ({ children }) => {

    // Use custom hook to fetch coffee data
    const {
        data: coffees,
        setData: setCoffees,
        loading,
        error,
        refetch,
        postData,
        deleteData,
    } = useFetch("http://localhost:3001/coffees");

    // Add a new coffee
    const addCoffee = async (newCoffee) => {
        await postData(newCoffee);
    };

    // Remove a coffee by ID
    const removeCoffee = async (id) => {
        await deleteData(id);
    };

    // Update a coffee by ID
    const updateCoffee = async (id, updatedCoffee) => {
        try {
            const res = await fetch(`http://localhost:3001/coffees/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedCoffee),
            });
            if (res.ok) refetch();
        } catch (err) {
            console.error("Error updating coffee:", err);
        }
    };

    return (
        <CoffeeContext.Provider
            value={{
                coffees,
                loading,
                error,
                addCoffee,
                removeCoffee,
                updateCoffee,
                refetch,
                setCoffees,
            }}
        >
            {children}
        </CoffeeContext.Provider>
    );
};
