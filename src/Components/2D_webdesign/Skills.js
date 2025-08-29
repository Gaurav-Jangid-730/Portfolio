import React from "react";
import PropTypes from 'prop-types';
import { Blob } from "./ApplyImage";
export default function skills ({FadeText,CapLetter,SLetter1,SLetter2,PDescription1,PDescription2,Href,RedirectText,StackImages = [] }) {
    return(
            <div id="skills" className="container skills-container">
            <div className="absolute skill-fade-text">{FadeText}</div>
                <div className="skill-container-left">
                    <h2 className="skill-heading"><span className="caps">{CapLetter}</span>{SLetter1}<br/>{SLetter2}</h2>
                    <div className="skill-subHeading">
                        <p>{PDescription1}</p>
                        <p>{PDescription2}</p>
                        <div className="more-certificate-container">
                            <a href={Href} className="effects"><h3>{RedirectText}</h3></a>
                        </div>
                    </div>
                </div>
                <div className="skill-container-right">
                    <Blob></Blob>
                     {StackImages.map((Pic , idx) => {
                        return(
                            <img key={idx} src={Pic.img} alt="" className="skills-logo" />
                        );
                    })}
                </div>
            </div>
    );
}
skills.protoTypes = {
    FadeText: PropTypes.string,
    CapLetter: PropTypes.string,
    SLetter1: PropTypes.string,
    SLetter2: PropTypes.string,
    PDescription1: PropTypes.string,
    PDescription2: PropTypes.string,
    Href: PropTypes.string,
    RedirectText: PropTypes.string,
    BlobImage: PropTypes.string,
    StackImages: PropTypes.arrayOf(
        PropTypes.shape({
            img:PropTypes.string
        })
    )
};