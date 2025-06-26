import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const MainPage = () => {
    return (
        <section className='bg-blue-100 '>
            <div className='min-h-screen max-w-[1850px] w-full px-4 md:px-6 lg:px-8 xl:px-12 mx-auto'>

                
                    <Header></Header>

                
                <main>
                    <Outlet></Outlet>
                </main>

                <footer>
                    <Footer></Footer>
                </footer>


            </div>
        </section>
    );
};

export default MainPage;