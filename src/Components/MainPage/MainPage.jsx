import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import Sliders from '../Slider/Sliders';

const MainPage = () => {
    return (
        <div className='lg:mx-[50px] my-5'>

            <header>
                <Header></Header>
                <Sliders></Sliders>
            </header>
            <main>
                <Outlet></Outlet>
            </main>

            <footer>
            <Footer></Footer>
            </footer>


        </div>
    );
};

export default MainPage;