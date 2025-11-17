import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const HomeLayout = () => {
  return (
    <section className="lg:w-7xl mx-auto ">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="px-3">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </section>
  );
};

export default HomeLayout;
