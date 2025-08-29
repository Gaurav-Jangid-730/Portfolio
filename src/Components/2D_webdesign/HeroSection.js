import React from "react";
import Button from "./Button";
import { Profile } from "./ApplyImage";
import RoleTyping from "./RoleTyping";
import PropTypes from 'prop-types';
export default function HeroSection ({FadeText = 'Text' , Intro = 'Hi! My Name is ' , FName , Htext = 'I am a ' , Description , Href , DownloadFileName , BtnText , ImageSrc , Width = '345' , Height = '390'}) {
    return (
    <div className="hero-section container">
        <div className="absolute faded-text">{FadeText}</div>
        <div className="hero-section-left">
            <Button></Button>
            <div className="hero-section-heading">{Intro} 
                <div className="name">{FName}</div>
            </div>
            <div className="hero-section-heading herosection-sub-heading">{Htext}<RoleTyping></RoleTyping></div>
            <div className="hero-section-description">{Description}</div>
            <a href={Href} download={DownloadFileName}><div className="btn-pink" id="btn-top">{BtnText}</div></a>
        </div>
        <div className="hero-section-right">
            <Profile Width={Width} Height={Height}></Profile>
        </div>
    </div>
    );
}
HeroSection.propTypes = {
    FadeText:PropTypes.string,
    Intro:PropTypes.string,
    FName:PropTypes.string,
    Htext:PropTypes.string,
    Description:PropTypes.string,
    href:PropTypes.string,
    DownloadFileName:PropTypes.string,
    BtnText:PropTypes.string,
    ImageSrc:PropTypes.string,
    Width:PropTypes.string,
    Height:PropTypes.string
};