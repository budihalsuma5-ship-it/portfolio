"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <h1>Contact Me</h1>

      <p>
        If you would like to get in touch with me, please fill out the form
        below.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Enter your message"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p className="success">
          Thank you! Your message has been submitted successfully.
        </p>
      )}
    </main>
  );
}