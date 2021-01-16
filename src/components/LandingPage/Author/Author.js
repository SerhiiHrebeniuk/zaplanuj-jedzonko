import React from 'react';
import "./Author.scss";

import AuthorImg from "../../../assets/author.jpg";


function Author() {
    return (
        <div className="author__container">
            <img src={AuthorImg} alt="author" />
            <div className="text">
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aliquam at porttitor sem. Aliquam erat volutpat. 
                    Donec placerat nisl magna, et faucibus arcu condimentum sed. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aliquam at porttitor sed.
                </p>
            </div>
        </div>
    )
}

export default Author;
