import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import AdminPortal from "./pages/AdminPortal";
import UpdateCoffee from "./pages/UpdateCoffee";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";

/**
 * App component that sets up routing for the application.
 * 
 * @component 
 * @returns {JSX.Element}
 */
function App() {
    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="shop" element={<Shop />} />

                {/* Admin Portal with nested routes */}
                <Route path="admin" element={<AdminPortal />}>
                    <Route path="new" element={<UpdateCoffee />} />
                    <Route path=":id/edit" element={<UpdateCoffee />} />
                </Route>

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
