import bg from "../../Backgrounds/bg5.jpg";
import React from 'react';
import ew2 from '../EwfishSlideBg/ew2.webp';
import './BasicBg.css';
import { useLocation, useParams } from 'react-router';

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

function BasicBg() {
    return (
        <div className="app" style={{backgroundImage: `url(${bg})`, backgroundSize: 500}}/>
    );
}

export default BasicBg;
