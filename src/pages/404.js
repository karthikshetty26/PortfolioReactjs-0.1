import React from 'react';
import '../assets/css/404.css';
import I404 from '../assets/img/404-error.png';
import {Link} from 'react-router-dom';

function pageNotFound() {
    return(
        <>
            <section className='page-not-found-section'>
                <div className='page-not-found-div-hold'>
                    <p className='text-1'>Oops!</p>
                    <div className='page-not-found-img-div'>
                        <img src={I404} alt="404 Page" />              
                    </div>
                    <p className='text-2'>Page not found! let's go <Link to='./' >Home</Link></p>
                </div>
            </section>
        </>
    );
}

export default pageNotFound;