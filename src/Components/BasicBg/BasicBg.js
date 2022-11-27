import React from 'react';
import './BasicBg.css';

class BasicBg extends React.Component {
    constructor(props) {
        super(props);
        const images = this.importAll(require.context('../../Backgrounds',
            false, /\.(png|jpe?g|svg|webp)$/));
        console.log('images:', images);
        this.state = {
            url: `url(${images[0]})`,
            counter: 0,
            images: images,
        }
    }

    importAll(r) {
        let images = [];
        r.keys().forEach((item, index) => {
            images[index] = r(item);
        });
        images.sort((a,b) => {
            const slashA = a.lastIndexOf('/');
            const slashB = b.lastIndexOf('/');

            const dotA = a.indexOf('.');
            const dotB = b.indexOf('.');
            const numberA = a.substring(slashA + 2, dotA);
            const numberB = b.substring(slashB + 2, dotB);
            return (Number)(numberA) - (Number)(numberB);
        })
        return images;
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
