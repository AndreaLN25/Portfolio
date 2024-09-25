import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <h1 className='contact-title'>Contact</h1>
      <form action='https://getform.io/f/panvwmea' method='POST' encType='multipart/form-data'>
        <div className='form-grid'>
          <div className='form-group'>
            <label className='form-label'>Name</label>
            <input className='form-input' type='text' name='name' />
          </div>
          <div className='form-group'>
            <label className='form-label'>Phone</label>
            <input className='form-input' type='text' name='phone' />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-label'>Email</label>
          <input className='form-input' type='email' name='email' />
        </div>
        <div className='form-group'>
          <label className='form-label'>Subject</label>
          <input className='form-input' type='text' name='subject' />
        </div>
        <div className='form-group'>
          <label className='form-label'>Message</label>
          <textarea className='form-textarea' rows='4.5' name='message' />
        </div>
        <button className='form-button'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
