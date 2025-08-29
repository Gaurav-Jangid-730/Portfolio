import React from "react";
export default function FooterSection ({FadeText,Href = [], Links = []}) {
    return(
          <footer>
    <div className="container footer-wrapper">
      <div className="footer-faded-text">{FadeText}</div>
      <div className="link-wrapper">
      {Href.map((item) => {
        return(
        <div key={item.href}><a href={item.href}>{item.text}</a></div>
        );
      })}
      </div>
      <div className="icon-wrapper">
        <a href={Links[0]}><i className="fa-brands fa-linkedin icon"></i></a>
        <a href={Links[1]}><i className="fa-brands fa-github icon"></i></a>
        <a href={Links[2]}><i className="fa-brands fa-twitter icon"></i></a>
        <a href={Links[3]}><i className="fa-brands fa-instagram icon"></i></a>
        <a href={Links[4]}><i className="fa-regular fa-envelope icon"></i></a>
      </div>
    </div>
  </footer>
    );
}