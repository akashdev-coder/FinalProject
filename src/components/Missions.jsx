import React from 'react'
import Missionimg from '../assets/images/Missions.jpg'

function Missions() {
  return (
    <>
    <div className="container-fluid dark:bg-slate-900 dark:text-white" id="missions">
      <div className='container'>
        <div className='row'>
            <div className='col-12 text-center'>
                <h2 className='missions'>Our Missions</h2>
            </div>
        </div>
        <div className='row'>
            <div className='col-12 col-md-6 align-self-center'>
                <p>Our mission is to bring the passion and love for reading books back. whether it's a regular paper book, or an online edition, we want our readers to know that we appreciate quality and artful storytelling. Join our community and enjoy multiple genres, modern and classic authors, reviews, critics and more!</p>
                <p>
                We're passionate about rekindling the joy of reading. Whether you enjoy the feel of a traditional paper book or the ease of an e-book, we cherish high-quality and captivating stories. Our community offers something for everyone, from contemporary to classic literature, across a wide range of genres.</p>
                <p> Dive into our insightful reviews and critiques to discover your next favorite read. Join us and connect with fellow book lovers, share your thoughts, and celebrate the art of storytelling. Be a part of our vibrant literary family and let’s make reading an adventure again!</p>
            </div>
            <div className='col-12 col-md-6'>
                <img src={Missionimg} className='img-fluid'/>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Missions
