// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//     setError('');
//     setSuccess('');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, email, subject, message } = formData;

//     // Validation
//     if (!name || !email || !subject || !message) {
//       setError('All fields are required');
//       return;
//     }

//     // EmailJS configuration
//     const serviceID = 'service_dj6rjyf';
//     const templateID = 'template_mjf5zj4';
//     const publicKey = 'g8zdCF0QcfuL92SCU';

//     emailjs
//       .send(serviceID, templateID, formData, publicKey)
//       .then(
//         (response) => {
//           console.log('SUCCESS!', response.status, response.text);
//           setSuccess('Your message has been sent successfully!');
//           setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
//         },
//         (err) => {
//           console.error('FAILED...', err);
//           setError('Failed to send the message. Please try again later.');
//         }
//       );
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-6 bg-gray-300 w-[100%] mx-auto">
//       <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
//         <p className="text-gray-600 text-center mb-4">
//           Have any questions or concerns? Reach out to us, and we'll get back to you shortly.
//         </p>
//         {error && <p className="text-red-600 text-center mb-4 font-medium">{error}</p>}
//         {success && <p className="text-green-600 text-center mb-4 font-medium">{success}</p>}
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           {/* Name Field */}
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Your Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
//               required
//             />
//           </div>

//           {/* Email Field */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Your Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
//               required
//             />
//           </div>

//           {/* Subject Field */}
//           <div>
//             <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
//               Subject
//             </label>
//             <input
//               type="text"
//               id="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               placeholder="Enter the subject"
//               className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
//               required
//             />
//           </div>

//           {/* Message Field */}
//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//               Your Message
//             </label>
//             <textarea
//               id="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Write your message here"
//               rows="6"
//               className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;



import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    // Validation
    if (!name || !email || !subject || !message) {
      setError('All fields are required');
      return;
    }

    // Confirm before sending
    const confirmation = window.confirm('Are you sure you want to send this message?');
    if (!confirmation) {
      setError('Message sending cancelled.');
      return;
    }

    // EmailJS configuration
    const serviceID = 'service_dj6rjyf';
    const templateID = 'template_mjf5zj4';
    const publicKey = 'g8zdCF0QcfuL92SCU';

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSuccess('Your message has been sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
        },
        (err) => {
          console.error('FAILED...', err);
          setError('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-300 w-[100%] mx-auto">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
        <p className="text-gray-600 text-center mb-4">
          Have any questions or concerns? Reach out to us, and we'll get back to you shortly.
        </p>
        {error && <p className="text-red-600 text-center mb-4 font-medium">{error}</p>}
        {success && <p className="text-green-600 text-center mb-4 font-medium">{success}</p>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              required
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
              className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              rows="6"
              className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
