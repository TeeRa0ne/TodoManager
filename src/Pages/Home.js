import React from 'react';
import Nav from '../Components/Navigation.js';

const Home = () => {
    return (
        <>
        <Nav />
            <div className="container"> 
                <h1 className="text-3xl font-bold">Bienvenue dans To Do Manager</h1>
                <p>Faites vos <span className="font-bold">"To Do"</span> en ligne !</p>
            </div>
        </>
    );
};

export default Home;