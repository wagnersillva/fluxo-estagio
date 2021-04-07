import React from 'react';
import './index.css';
// imagens
import imageLogo from '../../img/logo.PNG'

function Header(props){
    return(
        <header>
            <nav>
                <div className="logo">
                    <img src={imageLogo} alt="logo"></img>
                </div>
                <div className="header-details">
                    <p className="header-userEmail">{props.userEmail}</p>
                    <button className="header-btn-logout" onClick={props.methodLogout}>SAIR</button>
                </div>
            </nav>
        </header>
    )

}

export default Header;