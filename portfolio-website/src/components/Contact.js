import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_39fcyh6', 'template_3z60cr2', form.current, 'HxPB3h9xQBUTIPZy8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div>
      <div className='contact' id='c'>
        <h1 style={{ textDecoration: 'underline' }}>CONTACT ME</h1>
        <div className="container">
          <div className="text-center">
            <p className="lead">Any Questions? Do not hesitate to contact me.</p>
          </div>
          <div className="row justify-content-center my-5">
            <div className="col-lg-6">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input type="text" id="name" placeholder="John Doe" className="form-control mb-3" name='from_name' required />
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" id="email" placeholder="example@gmail.com" className="form-control mb-3" name='user_email' required />
                  <label htmlFor="text">Write a message...</label>
                  <textarea name="message" id="text" cols="67" rows="10" className="form-control" placeholder="Write your concerns here..." required></textarea>
                </div>
                <div className="text-center mt-3">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
