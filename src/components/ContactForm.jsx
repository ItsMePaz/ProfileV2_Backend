import React from "react";
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitButton = (e) => {
    e.preventDefault();

    let formData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    console.log(formData);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function () {
      console.log(xhr.responseText);
      if (xhr.responseText == "success") {
        alert("Email sent");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert("Something went wrong");
      }

      xhr.send(JSON.stringify(formData));
    };
  };

  return (
    <div>
      <form onSubmit={handleSubmitButton}>
        <h2>CONTACT</h2>
        <input
          type="text"
          id="name"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          id="subjet"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          id="message"
          placeholder="Enter message"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
}

export default ContactForm;
