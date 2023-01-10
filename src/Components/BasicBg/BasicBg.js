import React from 'react';
import './BasicBg.css';
import {importAll} from '../importHelper';

class BasicBg extends React.Component {
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
            <div onClick={this.changeBg.bind(this)}
                 className="app"
                 style={{
                     backgroundImage: `${this.state.url}`,
                     backgroundSize: 500
                 }}
            />
        );
    }
}

export default BasicBg;
