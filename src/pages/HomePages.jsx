import React from "react";
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroImage from "../components/HeroImage";
// import Footer from "../components/Footer";
import CardHomePage from "../components/CardHomePage";
import About from "../components/About";
// import Contact from "./Contact";

export default function HomePages() {
  return (
    <>
        

        <section className="container">
          <Hero />
          <HeroImage />
        </section>

        <div className="justify-content-center d-flex mt-5">
          <h2 className="section__title">Our Services</h2>
        </div>

        <div className="page__content mb-5">
          <CardHomePage
            title="Simpan"
            desc="Check out all of these gorgoeus trips with beautiful vieww of....."
            buttonText="Daftar"
          />
          <CardHomePage
            title="Simpan"
            desc="Check out all of these gorgoeus trips with beautiful vieww of....."
            buttonText="Daftar"
          />
          <CardHomePage
            title="Simpan"
            desc="Check out all of these gorgoeus trips with beautiful vieww of....."
            buttonText="Daftar"
          />
          <CardHomePage
            title="Simpan"
            desc="Check out all of these gorgoeus trips with beautiful vieww of....."
            buttonText="Daftar"
          />
        </div>

        <About />
    </>
  );
}
