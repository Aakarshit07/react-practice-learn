import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-4xl text-gray-600">
          Learn more about our story and what drive us to create exceptional
          products.
        </p>
        <div className="prose prose-lg mx-auto mt-6">
          <div className="bg-white rounded-lg shadown-sm border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4">
              Found in 2025, MyWebsite started as a simple idea to create
              beautiful, functional websites that anyone can understand and
              maintain. We believe that greate web developement should be
              accessible to everyone.
            </p>
            <p className="text-gray-600 mb-4">
              Out team is passionate about creating innovative solutions. Morder
              design and Creating experience that users love. We use the latest
              technologies like Next.js and Tailwind CSS to build fast,
              responsive websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
