import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import logo from '../Logo/logo-teste.svg'; // Import the SVG file

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false); // State to manage active class for bars

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsActive(!isActive); // Toggle the active state for bars
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <a href="/">
                    <img width="100%" src={logo} alt="Logo" />
                </a>
            </div>
            <ul className={`${styles.links} ${isOpen ? styles.open : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Suppliers</a></li>
                <li><a href="#about">Production Orders</a></li>
                <li><a href="#services">Certifications</a></li>
                <li><a href="#contact">Products</a></li>
                <li><a href="#contact">Monitors</a></li>
            </ul>
            <div className={styles.toggle} onClick={toggleMenu}>
                <span className={`${styles.bar} ${isActive ? styles.active : ''}`}></span>
                <span className={`${styles.bar} ${isActive ? styles.active : ''}`}></span>
                <span className={`${styles.bar} ${isActive ? styles.active : ''}`}></span>
            </div>
        </nav>
    );
};

export default Navbar;
