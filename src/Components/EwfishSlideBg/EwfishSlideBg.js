import bg from "../../Backgrounds/b1.jpg";
import ew2 from "./ew2.webp";
import React from 'react';
import './EwfishSlideBg.css';

function EwfishSlideBg() {
    return (
        <div>
            <div className="app" style={{backgroundImage: `url(${bg})`, backgroundSize: 500}}>
                <div className="animation">
                    <div className="animation-elements">
                        <img src={ew2} alt="Ewfish icons" height={100}/>
                        <img src={ew2} alt="Ewfish icons" height={100}/>
                        <img src={ew2} alt="Ewfish icons" height={100}/>
                        <img src={ew2} alt="Ewfish icons" height={100}/>
                        <img src={ew2} alt="Ewfish icons" height={100}/>
                        <img src={ew2} alt="Ewfish icons" height={100}/>
                        <img src={ew2} alt="Ewfish icons" height={100}/>
                        <img src={ew2} alt="Ewfish icons" height={100}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EwfishSlideBg;
