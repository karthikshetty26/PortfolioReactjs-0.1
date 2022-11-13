import React from 'react';
import './DLBtn.css';

function DLBtn() {
    return(
        <>
            <div className='DLBtn-div' onClick={ function DLB() {
                console.log("BTN is clicked")
                document.body.classList.toggle("dark-mood-color");
                const rootEle = document.getElementById("root");
                rootEle.classList.toggle("root-b2")
            } }>
                <i className="fas fa-adjust"></i>
            </div>
        </>
    );
}

export default DLBtn;