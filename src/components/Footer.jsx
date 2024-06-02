import React from "react";
import Logo from '../assets/images/logo.png';

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a href="/" className="link link-hover">Home</a>
          <a href="/course" className="link link-hover">Books</a>
          <a href="/about" className="link link-hover">About</a>
        </nav>
        <nav>
      <div className="row justify-content-center">
        <div className="col-6 text-center">
        <a href="/"><img src={Logo} className="img-fluid logos mx-auto" alt="logo" /></a>
        </div>
      </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by Akash Aubeeluck</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
