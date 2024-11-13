

import React from 'react'

    const Contact = () => {
      return (
        <div className="min-h-screen bg-green-200 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Get in Touch
              </h2>
              <p className="mt-2 text-center text-sm text-green-600">
                We love to hear from you!
              </p>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your Message"
                  />
                </div>
              </div>
    
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
    
            <div className="mt-6">
              <p className="text-center text-sm text-gray-600">
                Or contact us directly at:
              </p>
              <p className="text-center text-sm text-gray-900 font-semibold">
                Phone: +923 456 63812
              </p>
              <p className="text-center text-sm text-gray-900 font-semibold">
                Email: support@scooter.com
              </p>
            </div>
          </div>
        </div>
      );
    }
    
    export default Contact;
    

    
