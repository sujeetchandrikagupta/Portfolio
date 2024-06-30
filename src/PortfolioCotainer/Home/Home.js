import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import Skill from '../Resume/skill';
import ContactMe from '../ContactMe/ContactMe';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Profile/>
            <Footer/>
            <AboutMe/>
            <Skill/>
            <ContactMe/>
        </div>
    );
}

export default Home;
