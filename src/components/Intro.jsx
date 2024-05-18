import React from 'react';

function Intro() {
  return (
    <>
      <div className='container-fluid' id='IntroBanner'>
        <div className='container posRelative text-center'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='text-center getInTouch'>Meet Favorite <br></br>Authors</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <a href='#missions' className='btn btnContact'>Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro
