import { useState } from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: '',
  });

  // Validation schema using Yup
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name is too short')
      .max(50, 'Name is too long')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    subject: Yup.string()
      .min(5, 'Subject is too short')
      .max(100, 'Subject is too long')
      .required('Subject is required'),
    message: Yup.string()
      .min(10, 'Message is too short')
      .max(1000, 'Message is too long')
      .required('Message is required'),
  });

  // Handle form submission
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: '',
    });

    try {
      // Note: You need to replace these with your actual EmailJS service, template, and user IDs
      // You would typically store these in environment variables
      const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
      const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
      const userId = 'YOUR_EMAILJS_USER_ID';

      await emailjs.send(serviceId, templateId, {
        from_name: values.name,
        from_email: values.email,
        subject: values.subject,
        message: values.message,
      }, userId);

      // Reset form and update status on success
      resetForm();
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: 'Your message has been sent successfully! I will get back to you soon.',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSubmitted: false, message: '' }));
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: true,
        message: 'There was an error sending your message. Please try again later.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-slate-800 dark:text-white mb-4">
            Get In <span className="text-indigo-600 dark:text-indigo-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-inter">
            Have a project in mind or want to discuss a potential collaboration? I'm just a message away. Fill out the form below, and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 font-poppins">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-700 dark:text-slate-200 font-poppins">Email</h4>
                    <a href="mailto:your.email@example.com" className="text-indigo-600 dark:text-indigo-400 hover:underline font-inter">your.email@example.com</a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-700 dark:text-slate-200 font-poppins">Location</h4>
                    <p className="text-slate-600 dark:text-slate-300 font-inter">San Francisco, CA, United States</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-700 dark:text-slate-200 font-poppins">Availability</h4>
                    <p className="text-slate-600 dark:text-slate-300 font-inter">Monday - Friday, 9AM - 6PM PST</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h4 className="text-lg font-medium text-slate-700 dark:text-slate-200 mb-4 font-poppins">Connect With Me</h4>
                <div className="flex space-x-4">
                  {/* LinkedIn */}
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-slate-200 dark:bg-slate-700 p-3 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors duration-300">
                    <svg className="w-5 h-5 text-slate-700 dark:text-slate-200" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  {/* GitHub */}
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-slate-200 dark:bg-slate-700 p-3 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors duration-300">
                    <svg className="w-5 h-5 text-slate-700 dark:text-slate-200" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                  {/* Twitter */}
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-slate-200 dark:bg-slate-700 p-3 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors duration-300">
                    <svg className="w-5 h-5 text-slate-700 dark:text-slate-200" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  {/* Dribbble */}
                  <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="bg-slate-200 dark:bg-slate-700 p-3 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors duration-300">
                    <svg className="w-5 h-5 text-slate-700 dark:text-slate-200" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Freelance Badges */}
              <div className="mt-10">
                <h4 className="text-lg font-medium text-slate-700 dark:text-slate-200 mb-4 font-poppins">Find Me On</h4>
                <div className="flex space-x-4">
                  {/* Fiverr Badge */}
                  <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer" className="flex items-center bg-[#1DBF73] text-white px-4 py-2 rounded-lg hover:bg-[#19a463] transition-colors duration-300">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 9.5h-2.5V7c0-1.1-.9-2-2-2h-2.5V2.5c0-.8-.7-1.5-1.5-1.5h-4c-.8 0-1.5.7-1.5 1.5V5H6.5c-1.1 0-2 .9-2 2v2.5H2c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h2.5v2.5c0 1.1.9 2 2 2h2.5v2.5c0 .8.7 1.5 1.5 1.5h4c.8 0 1.5-.7 1.5-1.5V20H18c1.1 0 2-.9 2-2v-2.5H22.5c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5H23zM13.5 16h-3c-.8 0-1.5-.7-1.5-1.5v-5c0-.8.7-1.5 1.5-1.5h3c.8 0 1.5.7 1.5 1.5v5c0 .8-.7 1.5-1.5 1.5z" />
                    </svg>
                    <span className="font-medium font-poppins">Fiverr</span>
                  </a>
                  {/* Upwork Badge */}
                  <a href="https://upwork.com" target="_blank" rel="noopener noreferrer" className="flex items-center bg-[#6FDA44] text-white px-4 py-2 rounded-lg hover:bg-[#5ec236] transition-colors duration-300">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                    </svg>
                    <span className="font-medium font-poppins">Upwork</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 font-poppins">
                Send Me a Message
              </h3>

              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  subject: '',
                  message: '',
                }}
                validationSchema={ContactSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 font-inter">
                          Your Name
                        </label>
                        <Field
                          type="text"
                          name="name"
                          id="name"
                          className={`w-full px-4 py-3 rounded-lg border ${errors.name && touched.name ? 'border-red-500 dark:border-red-400' : 'border-slate-300 dark:border-slate-600'} bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors duration-300 font-inter`}
                          placeholder="John Doe"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-500 dark:text-red-400 text-sm mt-1 font-inter" />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 font-inter">
                          Your Email
                        </label>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          className={`w-full px-4 py-3 rounded-lg border ${errors.email && touched.email ? 'border-red-500 dark:border-red-400' : 'border-slate-300 dark:border-slate-600'} bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors duration-300 font-inter`}
                          placeholder="john@example.com"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 dark:text-red-400 text-sm mt-1 font-inter" />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 font-inter">
                        Subject
                      </label>
                      <Field
                        type="text"
                        name="subject"
                        id="subject"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.subject && touched.subject ? 'border-red-500 dark:border-red-400' : 'border-slate-300 dark:border-slate-600'} bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors duration-300 font-inter`}
                        placeholder="Project Inquiry"
                      />
                      <ErrorMessage name="subject" component="div" className="text-red-500 dark:text-red-400 text-sm mt-1 font-inter" />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 font-inter">
                        Your Message
                      </label>
                      <Field
                        as="textarea"
                        name="message"
                        id="message"
                        rows="5"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.message && touched.message ? 'border-red-500 dark:border-red-400' : 'border-slate-300 dark:border-slate-600'} bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors duration-300 font-inter`}
                        placeholder="Tell me about your project..."
                      />
                      <ErrorMessage name="message" component="div" className="text-red-500 dark:text-red-400 text-sm mt-1 font-inter" />
                    </div>

                    {/* Form Status Message */}
                    {formStatus.isSubmitted && (
                      <div className={`p-4 rounded-lg ${formStatus.isError ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400' : 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'} font-inter`}>
                        {formStatus.message}
                      </div>
                    )}

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center font-poppins disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {formStatus.isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : 'Send Message'}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;