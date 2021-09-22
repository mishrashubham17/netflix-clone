import React from 'react';
import './HomeScreen.css';
import NavBar from './NavBar';
import Banner from './Banner';
function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* Navbar*/}
            <NavBar />
            {/* Banner*/}
            <Banner />
            {/* Row*/}

        </div>
    )
}

export default HomeScreen
