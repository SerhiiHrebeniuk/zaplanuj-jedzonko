import React from 'react';
import "./Newsletter.scss";


function Newsletter() {
    return (
        <div className="news__container">
            <div className="news__box">
                <div className="news__text">
                    <h1>Zapisz się do naszego newslettera</h1>
                </div>
                <div className="news__form">
                    <input type="email" placeholder="Adres e-mail" />
                    <button type="submit">Zapisuję się!</button>
               </div>
            </div>
        </div>
    )
}

export default Newsletter;
