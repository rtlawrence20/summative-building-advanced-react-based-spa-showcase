import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CoffeeContext } from "../context/CoffeeContext";
import CoffeeForm from "../components/CoffeeForm";
import CoffeeCard from "../components/CoffeeCard";
import placeHolderCoffee from "../assets/placeHolderCoffee.jpg";
import styles from "../styles/UpdateCoffee.module.css";

/**
 * UpdateCoffee component to add or edit coffee entries
 * 
 * @component
 * @returns {JSX.Element}
 */
function UpdateCoffee() {

    // Access coffee data and navigation
    const { id } = useParams();
    const navigate = useNavigate();

    // Context methods and data
    const { coffees, addCoffee, updateCoffee, removeCoffee, loading, error, refetch } =
        useContext(CoffeeContext);

    const isEdit = Boolean(id);
    const [formData, setFormData] = useState({
        name: "",
        desc: "",
        origin: "",
        price: "",
        img: "",
    });
    const [isReady, setIsReady] = useState(false);

    // Populate form data when coffees load or id changes
    useEffect(() => {
        if (!loading) {
            if (isEdit) {
                // Editing: populate form with existing coffee
                const coffee = coffees.find((c) => c.id === id);
                if (coffee) {
                    setFormData({
                        name: coffee.name || "",
                        desc: coffee.desc || "",
                        origin: coffee.origin || "",
                        price: coffee.price || "",
                        img: coffee.img || "",
                    });
                }
            } else {
                // Adding new: reset form to blank
                setFormData({
                    name: "",
                    desc: "",
                    origin: "",
                    price: "",
                    img: "",
                });
            }
            setIsReady(true);
        }
    }, [id, coffees, loading, isEdit]);

    // Handle form submission for add or update
    const handleSubmit = async () => {
        if (isEdit) await updateCoffee(id, formData);
        else await addCoffee(formData);

        await refetch();
        navigate("/admin");
    };

    // Handle coffee deletion
    const handleDelete = async () => {
        if (isEdit && window.confirm("Delete this coffee?")) {
            await removeCoffee(id);
            await refetch();
            navigate("/admin");
        }
    };

    if (!isReady) return <p>Loading coffee data...</p>;
    if (error) return <p>Error loading coffee data: {error.message}</p>;

    return (
        <div className={styles.updateCoffee}>
            <h2>{isEdit ? "Edit Coffee" : "Add New Coffee"}</h2>

            <div className={styles.rightColumn}>
                {isEdit && (
                    <div className={styles.previewColumn}>
                        <div className={styles.preview}>
                            <CoffeeCard
                                coffee={{ ...formData, img: formData.img || placeHolderCoffee }}
                            />
                        </div>
                        <button onClick={handleDelete} className={styles.deleteBtn}>
                            Delete Coffee
                        </button>
                    </div>
                )}

                <div className={styles.formColumn}>
                    <CoffeeForm
                        formData={formData}
                        setFormData={setFormData}
                        onSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default UpdateCoffee;
