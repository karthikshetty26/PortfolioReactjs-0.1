import React from "react";
import './Nav.css';
// import Logo from "../../assets/svg/Karthik-logo.svg"
import DLBtn from '../dark-light-mode/DLBtn';
import {Link} from "react-router-dom";

function Nav() {
    return(
        <div className="nav-main-hold">
            <div className="nav-logo-div">
                <Link to='/'>
                    {/* <img src={Logo} alt="Logo" className="nav-logo" /> */}

                    {/* <Logo /> */}

                    <h1>KARTHIK</h1>
                </Link>
            </div>

            <div className="nav-content-div">
                <ul className="nav-link-hold" id="link-div">
                    <li> <Link to='/'>Home </Link> </li>
                    <li> <Link to='/resume'>Resume </Link> </li>
                    <li> <Link to='/certificate'>Certificates</Link> </li>
                    <li> <Link to='/project'>Projects</Link></li>
                </ul>
                <DLBtn />
            </div>

            <div className="nav-btn-div">
                <div className="menu-btn-div" onClick={
                    function addClassOnClick() {
                        // console.log("Nav button is clicked")
                
                        const btIcon = document.getElementById("btn-icon-id");
                        btIcon.classList.toggle("addBTN");
                        const linkDiv = document.getElementById("link-div");
                        linkDiv.classList.toggle("addLINK")
                
                        if(btIcon.innerHTML === "menu"){
                            btIcon.innerHTML = "close";
                        } else {
                            btIcon.innerHTML = "menu";
                        }
                    }}>

                    <i className="material-icons" id="btn-icon-id">menu</i>

                </div>
                <DLBtn />
            </div>
        </div>
    );
}

export default Nav;