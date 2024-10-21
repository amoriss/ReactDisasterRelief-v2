import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';
import getHelpImage from '../assets/truck-disaster-relief.jpg';
import Boxes from './Boxes.jsx';
import NewsletterSignup from './NewsletterSignup.jsx';

function Home() {
    console.log("Home component rendered");
    return (
        <>
            <div className="home-container">
                <h1>Welcome to the Disaster Relief Application</h1>
                <div className="image-container">
                    <div className="image-item">
                        <img src={getHelpImage} alt="Get Help" className="home-img" />
                      {/*  <Link to="/get-help" className="home-button">Get Help</Link>*/}
                    </div>

                    <div className="image-item">
                        <img src={getHelpImage} alt="Donate" className="home-img" />
                      {/*  <Link to="/donate" className="home-button">Donate</Link>*/}
                    </div>

                    <div className="image-item">
                        <img src={getHelpImage} alt="Get Help" className="home-img" />
                        {/*<Link to="/volunteer" className="home-button">Volunteer</Link>*/}
                    </div>

                </div>
            </div>
            <Boxes />
            <NewsletterSignup/>
        </>

    );
}



export default Home;