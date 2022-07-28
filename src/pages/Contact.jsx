import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <h2 className="contactTitle">Contact</h2>
      <hr />
      <div className="contactInfo">
        <div className="contactLeft">
          <a
            href="https://github.com/BolsitaDP"
            target="_blank"
            rel="noopener noreferrer">
            <h5>Github</h5>
            BolsitaDP
          </a>
          <a
            href="https://www.linkedin.com/in/santiago-giraldo-2a6b1114a/"
            target="_blank"
            rel="noopener noreferrer">
            <h5>LinkedIn</h5>
            santiago-giraldo-2a6b1114a
          </a>
          <a
            href="mailto:sgiraldo118@gmail.com?subject=Hey bro, your portfolio is amazing and I want to talk to you"
            className="noBorder"
            target="_blank"
            rel="noopener noreferrer">
            <h5>Gmail</h5>
            sgiraldo118@gmail.com
          </a>
        </div>
        <div className="contactRight">
          <a
            href="https://www.google.com/maps/place/Manizales,+Caldas/@5.0687821,-75.5186626,13z/data=!3m1!4b1!4m5!3m4!1s0x8e476ffa6a42ce3b:0xa863cf6423ea141c!8m2!3d5.0629743!4d-75.5027698"
            target="_blank"
            rel="noopener noreferrer">
            <h5>Aditional Address</h5>
            Manizales, Colombia
          </a>
          <a
            href="https://www.facebook.com/amanojaku13/"
            target="_blank"
            rel="noopener noreferrer">
            <h5>Facebook</h5>
            Santiago Giraldo
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=573148498683&text=Hi%20bro,%20your%20portfolio%20is%20amazing%20and%20I%20want%20to%20talk%20to%20you."
            className="noBorder"
            target="_blank"
            rel="noopener noreferrer">
            <h5>WhatsApp</h5>
            +57 3148498683
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
