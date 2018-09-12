import React, { Component } from "react";

class HomeMain extends Component {
    render(){
        return(
            <div>
                <section className="content one">
                    <h2>iPhone X</h2>
                    <h4>Say hello to the future</h4>
                    <span>Learn more ></span>
                    <span>Buy ></span>
                    <img src={require('../images/iphonex.png')} className="mobile" alt="iphonex"></img>
                    <img src={require('../images/iphonexbig.jpg')} className="desktop" alt="iphonex"></img>
                </section>

                <section className="content two">
                    <h2>iPad</h2>
                    <h4>Like a computer</h4>
                    <h4>Unlike any computer</h4>
                    <span>Learn more ></span>
                    <span>Buy ></span>
                    <img src={require('../images/ipad.jpg')} alt="iphonex"></img>
                </section>

                <section className="content three">
                    <h2>MacBook Pro</h2>
                    <h4>More power. More performance. More pro.</h4>
                    <span>Learn more ></span>
                    <span>Buy ></span>
                    <img src={require('../images/macbookpro.png')} alt="iphonex"></img>
                </section>

                <section className="content four">
                    <h2>iPhone 8</h2>
                    <h4>A new generation of iPhone</h4>
                    <span>Learn more ></span>
                    <span>Buy ></span>
                    <img src={require('../images/iphone8.jpeg')} alt="iphonex"></img>
                </section>

                <section className="content five">
                    <h2>AirPods</h2>
                    <h4>Wireless. Effortless. Magical</h4>
                    <span>Learn more ></span><span>Buy ></span>
                    <img src={require('../images/airpod.jpg')} alt="iphonex"></img>
                </section>

                <section className="content six">
                    <h2>WATCH</h2>
                    <h4>The freedom of cellular</h4>
                    <span>Learn more ></span><span>Buy ></span>
                    <img src={require('../images/watch.jpg')} alt="iphonex"></img>
                </section>

            </div>
        )
    }
}

export default HomeMain;