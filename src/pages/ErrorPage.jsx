import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/ErrorPage.module.css";

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>404 - Page Not Found</h1>
            </header>
            <section className={styles.content}>
                <p>The page you are looking for doesn’t exist.</p>
                <button className={styles.button} onClick={() => navigate("/")}>
                    Return Home
                </button>
            </section>
        </div>
    );
}

export default ErrorPage;
