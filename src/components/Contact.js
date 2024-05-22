import React from 'react';
import '../assets/styles/Contact.css'; 

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form className="contact-form" action="https://formspree.io/f/mleqkjlo" method="POST">
        <input type="text" name="name" placeholder="Nom" required />
        <input type="email" name="_replyto" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
