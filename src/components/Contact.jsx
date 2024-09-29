import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <form
        action="https://getform.io/f/panvwmea"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              className="form-input"
              type="text"
              name="name"
              required
              minLength="2"
              maxLength="50"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone</label>
            <div style={{ display: "flex", gap: "10px" }}>
              <select className="form-input" name="countryCode" required>
                <option value="">Select your country code</option>
                <option value="+1">+1 (USA, Canada)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+34">+34 (Spain)</option>
                <option value="+33">+33 (France)</option>
                <option value="+49">+49 (Germany)</option>
                <option value="+52">+52 (Mexico)</option>
                <option value="+358">+358 (Finland)</option>
                <option value="+46">+46 (Sweden)</option>
                <option value="+45">+45 (Denmark)</option>
                <option value="+47">+47 (Norway)</option>
                <option value="+351">+351 (Portugal)</option>
                <option value="+39">+39 (Italy)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+81">+81 (Japan)</option>
                <option value="+82">+82 (South Korea)</option>
                <option value="+86">+86 (China)</option>
                <option value="+91">+91 (India)</option>
                <option value="+55">+55 (Brazil)</option>
              </select>
              <input
                className="form-input"
                type="tel"
                name="phone"
                required
                minLength="7"
                maxLength="15"
                pattern="[0-9]{7,15}"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Subject</label>
          <input
            className="form-input"
            type="text"
            name="subject"
            required
            minLength="2"
            maxLength="100"
            placeholder="Enter subject"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea
            className="form-textarea"
            rows="4.5"
            name="message"
            required
            minLength="5"
            placeholder="Write your message here..."
          />
        </div>
        <button className="form-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
