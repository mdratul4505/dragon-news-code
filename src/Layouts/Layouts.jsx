import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';

const Layouts = () => {
    return (
        <div>
            <Header></Header>
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

export default Layouts;