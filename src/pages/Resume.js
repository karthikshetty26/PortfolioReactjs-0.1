import React from "react";
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import '../assets/css/Resume.css';
import '../assets/css/index.css';
import '../assets/css/SubPageSetUp.css';
import ResumeInfo from '../app-data/resumeData.json';

// console.log(ResumeInfo)

function Resume() {
    return(
        <>
            <nav>
                <Nav />
            </nav>
            <section className="resume-section">
    
                <div className="sub-page-top-div-hold">
                    <div className="sub-page-top-div">
                        <h1>Resume</h1>
                    </div>
                    <div className='hr-link-div'>
                        <hr />
                    </div>
                </div>  

                <div className="resume-content-div-hold">
                    <div className="resume-content-main-div">

                        <div className="resume-content-div">
                            <div className="resume-content-div-1">

                                <div className="qualifications">
                                    <p className="sub-heading-1"> Qualifications </p>

                                    { ResumeInfo.educations.map(e=> {
                                            return(
                                                <div className="qualification" key={e.id}>
                                                    <p className="sub-heading-3" >{e.EName}</p>
                                                    <p className="e-year"><em>{e.EYear}</em></p>
                                                    <p className="p-description">{e.EFrom}</p>
                                                </div>
                                            );
                                        })
                                    }

                                </div>
                            </div>

                            <div className="resume-content-div-2">
                                <div className="skills">
                                    <p className="sub-heading-1"> Skills </p>

                                    <ul className="skills-ul">
                                        {
                                            ResumeInfo.skills.map(s => {
                                                return(
                                                    <li className="skills-ul-li" key={s}>{s}</li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>

                                <div className="languages">
                                    <p className="sub-heading-1"> Languages </p>

                                    <ul className="languages-ul">
                                        {
                                            ResumeInfo.languages.map(l => {
                                                return(
                                                    <li className="languages-ul-li" key={l}>{l}</li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>

                                <div className="social-links">
                                    <p className="sub-heading-1"> Social Links </p>

                                    <ul className="social-links-ul">
                                        <li> <a href='https://www.instagram.com/karthik.shetty.26/' target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram"></i></a> </li>
                                        <li> <a href='https://www.linkedin.com/in/karthik2000/' target="_blank" rel="noreferrer noopener"><i className="fab fa-linkedin-in"></i></a> </li>
                                        <li> <a href='https://github.com/karthik-lezer' target="_blank" rel="noreferrer noopener"><i className="fab fa-github"></i></a> </li>
                                        <li> <a href='mailto: karthikshetty26k@gmail.com' target="_blank" rel="noreferrer noopener"><i class="far fa-envelope"></i></a> </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="resume-link-div">
                            <p className="resume-link"><a href="https://drive.google.com/file/d/19QNldFKmKWZtrxAOnoHKhDle6pAdFXu1/view?usp=sharing" target="_blank" rel="noreferrer noopener">Complete Resume &gt;</a></p>
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

export default Resume;