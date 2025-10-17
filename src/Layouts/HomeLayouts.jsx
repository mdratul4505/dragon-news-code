import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';

const HomeLayouts = () => {
    return (
        <div>
            <Header></Header>
            <section className='w-10/12 mx-auto my-3'>
                <LatestNews>

                </LatestNews>
            </section>
            <main>
                <section className="left section"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right section"></section>
            </main>
        </div>
    );
};

export default HomeLayouts;