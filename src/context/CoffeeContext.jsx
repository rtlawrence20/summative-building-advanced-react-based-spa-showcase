import React, { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const CoffeeContext = createContext();

export const CoffeeProvider = ({ children }) => {
    const {
        data: coffees,
        setData: setCoffees,
        loading,
        error,
        refetch,
        postData,
        deleteData,
    } = useFetch("http://localhost:3001/coffees");

    const addCoffee = async (newCoffee) => {
        await postData(newCoffee);
    };

    const removeCoffee = async (id) => {
        await deleteData(id);
    };

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
