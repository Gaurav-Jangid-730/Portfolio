import React from "react";
import { useState } from "react";

function ContactForm({Action , BtnText}) {
  const [msg, setMsg] = useState("");
  const scriptURL = "https://script.google.com/macros/s/AKfycbzhs_e0iqjEWtJMHMK9x74I-DZbw_wKJZRBixr98cFz9sNMzkfjWdwMNuvHFBT4jXORkA/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch(scriptURL, { method: "POST", body: data });
      setMsg("Message sent successfully");
      setTimeout(() => setMsg(""), 5000);
      form.reset();
    } catch (err) {
      console.error(err);
      setMsg("Error sending message");
    }
  };

  return (
    <div className="contactus-form-container">
      <form className="form" name="submit-to-google-sheet" action={Action} onSubmit={handleSubmit}>
          <div className="formfield-container">
            <input className="formfield" type="text" name="name" id="" placeholder="Enter your name" />
          </div>
          <div className="formfield-container">
            <input className="formfield" type="email" name="email" id="" placeholder="Enter your email address" />
          </div>
          <div className="formfield-container">
            <input className="formfield" type="text" name="subject" id="" placeholder="Enter your subject" />
          </div>
          <div className="formfield-container">
            <textarea name="message" id="" cols="30" rows="10" className="formfield formfield-textarea" placeholder="Enter your message"></textarea>
          </div>
          <div>
            <button type="submit" className="btn-pink" id="submit-btn">{BtnText}<i className="submit-icon fa-solid fa-paper-plane"></i></button>
          </div>
      </form>
      <span id="msg">{msg}</span>
    </div>
  );
}

export default function ContectMe({Heading,SubHeading,Action,BtnText}) {
    return(
          <div id="contactme" className="contactus-container">
            <div className="container">
              <h1 className="contactus-heading">{Heading}</h1>
              <h3 className="contactus-sub-heading">{SubHeading}</h3>
              <ContactForm Action={Action} BtnText={BtnText}></ContactForm>
            </div>
          </div>
    );
}