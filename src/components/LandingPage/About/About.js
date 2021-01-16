import React from 'react';
import "./About.scss";

import Check from "../../../assets/check-solid.svg";
import Clock from "../../../assets/clock-regular.svg";
import List from "../../../assets/list-solid.svg";

function About() {
    return (
        <div className="about__container">
            <div className="info">
                <div className="info--box">
                    <img src={Check} alt="" />
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam at porttitor sem. Aliquam erat volutpat. 
                        Donec placerat nisl magna, et faubicus arcu condimentum sed.
                        Lorem Ipsum 
                    </p>
                </div>
                <div className="info--box">
                <img src={Clock} alt="" />
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam at porttitor sem. Aliquam erat volutpat. 
                        Donec placerat nisl magna, et faubicus arcu condimentum sed.
                        Lorem Ipsum 
                    </p>
                </div>
                <div className="info--box">
                <img src={List} alt="" />
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam at porttitor sem. Aliquam erat volutpat. 
                        Donec placerat nisl magna, et faubicus arcu condimentum sed.
                        Lorem Ipsum 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
