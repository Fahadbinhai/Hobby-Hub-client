import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const MainPage = () => {
    return (
        <section className=' bg-[#F0F9FF]'>
            <div className='lg:mx-[50px] py-5'>

                <header>
                    <Header></Header>

                </header>
                <main>
                    <Outlet></Outlet>
                </main>

                <footer>
                    {/* <Footer></Footer> */}
                </footer>


            </div>
        </section>
    );
};

export default MainPage;