import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">
          We'd love to hear from you! Please reach out with any questions or
          comments.
        </p>
      </div>
      <div className="grid gap-12">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Send us a message
          </h2>
          <form action="" className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full rounded-md px-3 py-2 border border-gray-300 roudned-lg focus:ring-blue-500 focus:border-transparent"
                placeholder="Your Full Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full rounded-md px-3 py-2 border border-gray-300 roudned-lg focus:ring-blue-500 focus:border-transparent"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label htmlFor="Message" className="block text-sm mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                className="w-full rounded-md px-3 py-2 border border-gray-300 roudned-lg focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us more about your inquiry"
              />
            </div>
            <button className="w-full bg-blue-400 text-white px-3 py-3 rounded-lg hover:bg-blue-500 transition-colors font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
