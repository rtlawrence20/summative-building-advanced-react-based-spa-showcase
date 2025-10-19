import React from "react";
import styles from "../styles/CoffeeForm.module.css";

/**
 * CoffeeForm component for adding or updating coffee details
 * 
 * @param {Object} props
 * @param {Object} props.formData - The current form data
 * @param {Function} props.setFormData - Function to update form data
 * @param {Function} props.onSubmit - Function to handle form submission
 * @returns {JSX.Element}
 */
const CoffeeForm = ({ formData, setFormData, onSubmit }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form className={styles.coffeeForm} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="desc">Description</label>
                <textarea
                    id="desc"
                    name="desc"
                    value={formData.desc}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="origin">Origin</label>
                <input
                    id="origin"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="price">Price ($)</label>
                <input
                    id="price"
                    type="number"
                    name="price"
                    value={formData.price || ""}
                    onChange={handleChange}
                    step="0.01"
                    required
                />
            </div>

            <div>
                <label htmlFor="img">Image URL</label>
                <input
                    id="img"
                    name="img"
                    value={formData.img}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">{formData.name ? "Update" : "Add"} Coffee</button>
        </form>
    );
};

export default CoffeeForm;
