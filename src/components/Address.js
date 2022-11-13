import React from "react";
import "../components/Address.css";

function  Address(){
    return(
        <>
        <section className='img_contact'>
        <img src={process.env.PUBLIC_URL + "/images/contact.png"} alt="Contact"/>
        <div className="contact">
            <div className="contact_section">
            <h2>Contact</h2>
                <p>contact@kamenya.org</p>
                <p>+41796933686</p>
            </div>
            <div>
               <h2>Address</h2>
                <p>Obermattweg 9</p>
                <p>6052 Hergiswil NW</p>
                <p>Switzerland</p>
            </div>
        </div>
        </section>
        </>
    );
}
export default Address;