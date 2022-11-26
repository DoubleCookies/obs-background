import bg from "../../Backgrounds/bg5.jpg";
import ew2 from "./ew2.webp";
import React from 'react';
import './EwfishSlideBg.css';

/*
Priority:
bg5.jpg
bg2-2.jpg
bg1.webp
bg-inv2.jpg
bg-inv.jpg

bg1.jpg
bg2.webp
bg4.webp
b3.webp
bg6.webp
 */

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
