import React from "react";
import PropTypes from 'prop-types';
import { NavLogo } from "./ApplyImage";
export default function Navbar({Src,NavText,Href=[]}) {
    return (
    <nav id="home" className="navbar container">
        <div className="logo-group">
            <NavLogo></NavLogo>
            <h2 className="nav-logo-text">{NavText}</h2>
        </div>
        <div className="nav-items">
            {Href.map((item) => {
                const href = item.href;
                const text = item.text;
                return(
                    <div key={href}><a href={href}>{text}</a></div>
                );
            })}
        </div>
    </nav>
    );
}
Navbar.protoTypes = {
    Src: PropTypes.string,
    NavText:PropTypes.string,
    Href: PropTypes.arrayOf(
        PropTypes.shape({
            href:PropTypes.string.isRequired,
            text:PropTypes.string.isRequired,
        })
    ),
};