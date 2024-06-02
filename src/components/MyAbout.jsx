import React from 'react';
import AboutImg from '../assets/images/Aboutus.jpg';
import Picto1 from '../assets/images/read.jpg';
import Picto2 from '../assets/images/find.jpg';
import Picto3 from '../assets/images/gift.jpg';
import Popular from "../components/Popular";
function MyAbout() {
  return (
    <>
    <div className="container-fluid dark:bg-slate-900 dark:text-white" id="about">
      <div className='container py-5'>
        <div className='row'>
            <div className='col-12 text-center'>
                <h2 className='missions'>Our Missions</h2>
            </div>
        </div>
        <div className='row justify-content-center py-5'>
            <div className='col-12 align-self-center text-center'>
              <p>Our mission is to bring the passion and love for reading books back. Whether it's a regular paper book or an online edition, we want our readers to know that we appreciate quality and artful storytelling. Join our community and enjoy multiple genres, modern and classic authors, reviews, critics, and more!</p>

              <p>Explore the vast universe of literature with us, where every book is a new adventure waiting to unfold. We believe in the transformative power of stories to enlighten, entertain, and inspire. Our platform offers personalized recommendations, exclusive author interviews, and engaging discussions that deepen your reading experience.</p>
            
            </div>
            <div className='col-12 py-5'>
                <img src={AboutImg} className='img-fluid'/>
            </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-4 text-center'>
            <img src={Picto1} className='img-fluid pictos' />
            <h3>Read Reader’s Reviews</h3>
            <p>You will find reviews of magazines, online <br /> sources and favorite books.</p>
          </div>
          <div className='col-12 col-md-4 text-center'>
            <img src={Picto2} className='img-fluid pictos' />
            <h3>Find Your Favorite Authors</h3>
            <p>Great writers are pretty inspiring, so we <br />offer the widest selection.</p>
          </div>
          <div className='col-12 col-md-4 text-center'>
            <img src={Picto3} className='img-fluid pictos' />
            <h3>Make the Best Present</h3>
            <p>A book is still one of the best presents <br />for anyone on any occasion.</p>
          </div>
        </div>
       
      </div>
      <Popular />
      </div>
    </>
  )
}

export default MyAbout;
