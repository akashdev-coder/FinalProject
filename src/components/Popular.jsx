import React from 'react'
import Author1 from '../assets/images/author1.jpg'
import Author2 from '../assets/images/author2.jpg'
import Author3 from '../assets/images/author3.jpg'
import Author4 from '../assets/images/author4.jpg'

function Popular() {
    return (
        <>
        <div className="container-fluid dark:bg-slate-900 dark:text-white" id="missions">
          <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h2 className='missions'>Most Popular Authors</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-3'>
                    <div className='card'>
                        <img src={Author1} alt='author1' className='img-fluid' />
                        <div className='card-body'>
                            <h4>Author Name</h4>
                            <p>Author Description</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-3'>
                    <div className='card'>
                    <img src={Author2} alt='author1' className='img-fluid' />
                        <div className='card-body'>
                            <h4>Author Name</h4>
                            <p>Author Description</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-3'>
                    <div className='card'>
                    <img src={Author3} alt='author1' className='img-fluid' />
                        <div className='card-body'>
                            <h4>Author Name</h4>
                            <p>Author Description</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-3'>
                    <div className='card'>
                    <img src={Author4} alt='author1' className='img-fluid' />
                        <div className='card-body'>
                            <h4>Author Name</h4>
                            <p>Author Description</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          </div>
        </>
      )
    }

export default Popular
