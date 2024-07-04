import React from "react";
import about from "/images/about.jpg";

export default function About() {
  return (
    <div className="container d-flex justify-content-center my-5">
      <div className="row">
        <div className="col-md-6 text-center mb-4">
          <h1>About Us</h1>
          <p>
            Your Trusted Provider of High-Quality Products and Services
          </p>
          <p>
            Welcome to React Shop, your trusted provider of high-quality
            products and services. At React Shop, we are dedicated to offering
            the best solutions to meet your needs, ensuring reliability and
            excellence in everything we do.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={about}
            alt="About Us"
            className="img-fluid rounded mb-4"
          />
        </div>
      </div>
    </div>
  );
}
