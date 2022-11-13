import React from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import  '../assets/css/Project.css';
import '../assets/css/SubPageSetUp.css';
import ProjectInfo from '../app-data/projectData.json';

function Project() {
    return(
        <>
            <nav>
                <Nav />
            </nav>
            <section className='project-section'>

                <div className="sub-page-top-div-hold">
                    <div className="sub-page-top-div">
                        <h1>Project</h1>
                    </div>
                    <div className='hr-link-div'>
                        <hr />
                    </div>
                </div>     

                <div className="project-content-div-hold">
                    <div className="project-content-main-div">
                        <div className='project-content-div'>

                        {
                            ProjectInfo.map(p=> {
                                return(
                                    <div className='project-div' key={p.id}>
                                        <p className='sub-heading-3'>{p.PName}</p>
                                        <ul className='project-tech-ul'>
                                            {p.PTech.map(pt => {
                                                    return(
                                                        <li key={pt}>{pt}</li>
                                                    );
                                                })
                                            }
                                        </ul>
                                        <p className='p-pd'>{p.PDescription}</p>
                                        <p className='demo-live-link'>
                                            {(p.PCodeLink != null) ? (
                                                <a href={p.PCodeLink}>Code &nbsp;</a>
                                            ):('')}

                                            {(p.PDemoLink != null) ? (
                                                <a href={p.PDemoLink}> Demo</a>
                                            ):('')}
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

export default Project;