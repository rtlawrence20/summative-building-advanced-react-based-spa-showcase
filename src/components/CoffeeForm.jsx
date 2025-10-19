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
            <label>Name</label>
            <input name="name" value={formData.name} onChange={handleChange} required />

            <label>Description</label>
            <textarea name="desc" value={formData.desc} onChange={handleChange} />

            <label>Origin</label>
            <input name="origin" value={formData.origin} onChange={handleChange} />

            <label>Price ($)</label>
            <input
                type="number"
                name="price"
                value={formData.price || ""}
                onChange={handleChange}
                step="0.01"
                required
            />

            <label>Image URL</label>
            <input name="img" value={formData.img} onChange={handleChange} />

            <button type="submit">{formData.name ? "Update" : "Add"} Coffee</button>
        </form>
    );
};

export default CoffeeForm;
