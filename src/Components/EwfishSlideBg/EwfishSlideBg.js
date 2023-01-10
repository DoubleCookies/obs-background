import ew2 from "./ew2.webp";
import React from 'react';
import './EwfishSlideBg.css';
import { importAll } from '../importHelper';

class EwfishSlideBg extends React.Component {
    constructor(props) {
        super(props);
        const images = importAll(require.context('../../Backgrounds',
            false, /\.(png|jpe?g|svg|webp)$/));
        this.state = {
            url: `url(${images[0]})`,
            counter: 0,
            images: images,
        }
    }

    changeBg() {
        const {counter, images} = this.state;
        let index = (counter + 1) % images.length;
        let newUrl = `url(${images[index]})`;
        this.setState({
            counter: counter + 1,
            url: newUrl
        });
    }

    render() {
        return (
            <div>
                <div className="app"
                     onClick={this.changeBg.bind(this)}
                     style={{backgroundImage: `${this.state.url}`, backgroundSize: 500}}
                >
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
}

export default EwfishSlideBg;
