import React from "react";
import banner from "../../public/Banner.png";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Banner() {
  return (
    <>
      <div className="container">
        <div className="row MargBanner">
        <div className="col-12 col-md-6 align-self-center">
          <div className="mb-4">
            <h1 className="h4 h-md2 fw-bold">
                Welcome to <span className="greenColor">Your Bookstore</span>
            </h1>
              <p>Welcome to Your Bookstore, a haven for book lovers and literary enthusiasts! Nestled in the heart of [Your Location], our bookstore is more than just a place to buy books—it's a community hub where stories come alive, ideas flourish, and connections are made.</p>
              <br></br>
              <p>At Your Bookstore, we believe that books have the power to transform lives. Our carefully curated collection spans a wide range of genres, from timeless classics and modern bestsellers to hidden gems and local authors. Whether you're in search of an adventurous escape, a thought-provoking read, or a cozy story to unwind with, you'll find it on our shelves.</p>
          </div>
          <button className="btn btn-secondary btnGreen">Get Started</button>
        </div> 
        <div className="col-12 col-md-6 d-flex justify-content-end">
          <img
            src={banner}
            className="img-fluid"
            alt="Banner"
          />
        </div>
      </div>
      </div>
    </>
  );
}

export default Banner;
