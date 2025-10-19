
import React, { useContext } from "react";
import { CoffeeContext } from "../context/CoffeeContext";
import { useNavigate, Outlet } from "react-router-dom";
import styles from "../styles/AdminPortal.module.css";

function AdminPortal() {
    const { coffees, loading, error } = useContext(CoffeeContext);
    const navigate = useNavigate();

    if (loading) return <p>Loading coffees...</p>;
    if (error) return <p>Error loading coffees: {error.message}</p>;

    const handleAddNew = () => navigate("/admin/new");
    const handleSelectCoffee = (coffeeId) => navigate(`/admin/${coffeeId}/edit`);

    return (
        <div className={styles.adminPortal}>
            <h2>Admin Portal</h2>
            <div className={styles.dashboard}>
                {/* Left column: coffee list + add button */}
                <div className={styles.leftColumn}>
                    <button onClick={handleAddNew} className={styles.addBtn}>
                        + Add New Coffee
                    </button>

                    <div className={styles.coffeeList}>
                        <h3>All Coffees</h3>
                        <ul>
                            {coffees.map((coffee) => (
                                <li
                                    key={coffee.id}
                                    onClick={() => handleSelectCoffee(coffee.id)}
                                >
                                    {coffee.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right column: Outlet renders UpdateCoffee */}
                <div className={styles.rightColumn}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AdminPortal;
