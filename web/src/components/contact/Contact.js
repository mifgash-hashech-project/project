import React from 'react'
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function Contact() {

    return (
        <div className="contact__container">
            <ContactDetails/>
            <h1 className="contact">אנא מלאו את פרטיכם ונשמח לחזור אליכם בהקדם האפשרי</h1><br/><br/>
            <ContactForm />
            <button>אישור</button>
        </div>

)
}
