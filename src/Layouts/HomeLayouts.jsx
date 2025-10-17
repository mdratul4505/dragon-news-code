import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayouts/LeftAside";
import RightAside from "../Components/HomeLayouts/RightAside";

const HomeLayouts = () => {
  return (
    <div>
      <Header></Header>
      <section className="w-10/12 mx-auto my-5">
        <LatestNews></LatestNews>
      </section>
      <section className="w-10/12 mx-auto my-5">
        <Navbar></Navbar>
      </section>

      <main className="w-10/12 mx-auto my-5 grid grid-cols-12 gap-5">
        <aside className="gird col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className=" col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
