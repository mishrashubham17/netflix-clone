import React from 'react';
import './HomeScreen.css';
import NavBar from '../NavBar';
import Banner from '../Banner';
import Row from '../Row';
import requests from '../Requests';
function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* Navbar*/}
            <NavBar />
            {/* Banner*/}
            <Banner />
            {/* Row*/}
            <Row title="NETFLIX ORIGINALS" 
                fetchUrl={requests.fetchTrending}
                isLargeRow
            />
            <Row title="TOP RATED" 
                fetchUrl={requests.fetchTopRated}
            />
            <Row title="ACTION MOVIES" 
                fetchUrl={requests.fetchActionMovies}
            />
            <Row title="COMEDY MOVIES" 
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row title="HORROR MOVIES" 
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row title="ROMANCE MOVIES" 
                fetchUrl={requests.fetchRomanceMovies}
            />
        </div>
    )
}

export default HomeScreen
