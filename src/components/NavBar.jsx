
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles["nav-links"]}>
                <li>
                    <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/shop" className={({ isActive }) => isActive ? styles.active : ""}>
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin" className={({ isActive }) => isActive ? styles.active : ""}>
                        Admin
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;