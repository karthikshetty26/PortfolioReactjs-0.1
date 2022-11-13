import React from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import  '../assets/css/Certificate.css';
import '../assets/css/SubPageSetUp.css';
import CertificateInfo from '../app-data/certificateData.json';

// console.log(CertificateInfo);

function Certificate() {
    return(
        <>
            <nav>
                <Nav />
            </nav>
            <section className='certificate-section'>

                <div className="sub-page-top-div-hold">
                    <div className="sub-page-top-div">
                        <h1>Certificate</h1>
                    </div>
                    <div className='hr-link-div'>
                        <hr />
                    </div>
                </div>     

                <div className="certificate-content-div-hold">
                    <div className="certificate-content-main-div">
                        <div className='certificate-content-div'>

                        {
                            CertificateInfo.map(c=> {
                                return(
                                    <div className='certificate-div' key={c.id}>
                                        <p className='sub-heading-3'>{c.CName}</p>
                                        <a href={c.CFromLink} target="_blank" rel="noreferrer noopener">
                                            <p className='c-from'>{c.CFrom}</p>
                                        </a>
                                        <p className='date-link-p'>
                                            {c.CDate} &nbsp;|&nbsp; <a href={c.Clink} target="_blank" rel="noreferrer noopener">Credential </a>
                                        </p>
                                    </div>
                                );
                            })
                        }

                        </div>
                    </div>
                </div>

            </section>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Certificate;