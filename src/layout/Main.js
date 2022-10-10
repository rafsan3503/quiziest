import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { Nav } from '../components/Navbar';

const Main = () => {
    return (
        <div>
            <Nav />
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;