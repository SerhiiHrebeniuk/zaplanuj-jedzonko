import React from 'react';
import "./CallToAction.scss";

function CallToAction() {
    return (
        <div className="action__container">
            <div className="action__article">
                <div className="action__text">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="action__btn">
                    <button className="action__btn-go">Lorem Ipsum</button>
                </div>
            </div>
        </div>
    )
}

export default CallToAction;
