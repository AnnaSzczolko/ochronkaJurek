import { Outlet } from "react-router-dom";

import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <>
    {/* <Navbar></Navbar> */}
    <main>
        <Outlet></Outlet>
    </main>

    <Footer></Footer>
    </>
  )
}
