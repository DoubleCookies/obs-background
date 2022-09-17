import bg from "./Backgrounds/bg5.jpg";
import React from 'react';

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

function App() {
  return (
    <div className="app" style={{backgroundImage: `url(${bg})`, backgroundSize: 500}}/>
  );
}

export default App;
