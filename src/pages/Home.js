import React from 'react';
import Nav from '../components/nav/Nav';
import '../assets/css/Home.css';
import KIMG from '../assets/img/Karthik-IMG-no-border.png';

function Home() {
    return(
        <>
        <nav>
            <Nav />
        </nav>
        <section className='home-section'>
            <div className='home-main-div'>
                <div className='home-img-div'>
                    <img src={KIMG} alt="Home IMG" />
                </div>

                <div className='home-content-div'>
                    <h2>Hey there,<br /> I'm Karthik&nbsp;<strong>Shetty</strong></h2>
                    <p><strong>Curious Learner</strong></p>
                </div>

                <div className='home-social-link'>
                    <ul className='home-social-link-ul'>
                        <li> <a href='https://www.instagram.com/karthik.shetty.26/' target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram"></i></a> </li>
                        <li> <a href='https://www.linkedin.com/in/karthik2000/' target="_blank" rel="noreferrer noopener"><i className="fab fa-linkedin-in"></i></a> </li>
                        <li> <a href='https://github.com/karthik-lezer' target="_blank" rel="noreferrer noopener"><i className="fab fa-github"></i></a> </li>
                        <li> <a href='mailto: karthikshetty26k@gmail.com' target="_blank" rel="noreferrer noopener"><i class="far fa-envelope"></i></a> </li>
                    </ul>
                </div>
            </div>
            
        </section>
        </>
    );
}

export default Home;