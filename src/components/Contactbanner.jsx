import React from 'react'

function Contactbanner() {
  return (
    <>
      <div className='container-fluid' id='contact'>
        <div className='container posRelative text-center'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='text-center getInTouch'>Get in Touch with Us!</h2>
              <p>Have a question, need a recommendation,<br/> We're here to help! </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <a href='/contact/' className='btn btnContact'>Contact us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactbanner
