import bg from "../../Backgrounds/bg5.jpg";
import bg2 from "../../Backgrounds/bg2-2.jpg";
import React from 'react';
import './BasicBg.css';

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

class BasicBg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: `url(${bg})`,
            counter: 0
        }
    }

    changeBg() {
        const {counter} = this.state;
        let newUrl;
        console.log(counter)
        switch ((counter + 1) % 2) {
            case 0: {
                newUrl = `url(${bg})`;
                break;
            }
            case 1: {
                newUrl = `url(${bg2})`;
                break;
            }
            default: {
                newUrl = `url(${bg})`;
                break;
            }
        }
        this.setState({
            counter: counter + 1,
            url: newUrl
        })
    }

    render() {
        return (
            <div onClick={this.changeBg.bind(this)}
                 className="app"
                 style={{backgroundImage: `${this.state.url}`,
                     backgroundSize: 500}}
            />
        );
    }
}

export default BasicBg;
