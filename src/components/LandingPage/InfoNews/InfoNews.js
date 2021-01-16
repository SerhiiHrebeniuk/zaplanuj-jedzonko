import React from 'react';
import "./InfoNews.scss";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagamIcon from "@material-ui/icons/Instagram";


function InfoNews() {
    return (
        <div className="infonews__container">
            <div className="infonews__main">
                <div className="infonews__box text">
                    <h1>Lorem ipsum dolor</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna. 
                        Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
                    </p>
                </div>
                <div className="infonews__box list">
                    <h1>Lorem ipsum dolor</h1>
                    <ul>
                        <li>consectetur adipiscing elit</li>
                        <li>sed do eiusmod tempor</li>
                        <li>incididunt ut labore</li>
                        <li>et dolore magna aliqua</li>
                    </ul>
                </div>
                <div className="infonews__box contact">
                    <h1>Zapisz się do naszego newslettera</h1>
                    <div className="input">
                        <input type="email" placeholder="Adres e-mail" />
                        <button>Zapisuję się!</button>
                    </div>
                    <div className="socilamedia">
                        <a href="https://pl-pl.facebook.com"><FacebookIcon /></a>
                        <a href="https://twitter.com"><TwitterIcon /></a>
                        <a href="https://www.instagram.com"><InstagamIcon /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoNews;
