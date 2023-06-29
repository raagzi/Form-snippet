import React, { useState } from 'react';
import './form.css'; // Import the CSS file

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    country: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data
    console.log(formData);
  };

  return (
    <div className="form-container"> {/* Apply the CSS class to the main container */}
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Message
          <textarea
            name="message"
            placeholder='Enter your message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <br />
        <label>
          Country
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Select a country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Germany">Germany</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
