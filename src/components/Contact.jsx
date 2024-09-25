import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <h1 className='contact-title'>Contact</h1>
      <form action='https://getform.io/f/panvwmea' method='POST' encType='multipart/form-data'>
        <div className='form-grid'>
          <div className='form-group'>
            <label className='form-label'>Name</label>
            <input
              className='form-input'
              type='text'
              name='name'
              required
              minLength='2'
              maxLength='50'
              placeholder='Enter your name'
            />
          </div>
          <div className='form-group'>
            <label className='form-label'>Phone</label>
            <input
              className='form-input'
              type='tel'
              name='phone'
              required
              minLength='10'  // Mínimo 10 dígitos
              maxLength='15'  // Máximo 15 dígitos
              pattern='[0-9]{10,15}' // Solo dígitos, entre 10 y 15
              placeholder='Enter your phone number'
            />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            required
            placeholder='Enter your email'
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Subject</label>
          <input
            className='form-input'
            type='text'
            name='subject'
            required
            minLength='2'
            maxLength='100'
            placeholder='Enter subject'
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Message</label>
          <textarea
            className='form-textarea'
            rows='4.5'
            name='message'
            required
            minLength='10'
            placeholder='Write your message here...'
          />
        </div>
        <button className='form-button'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
