import React from "react";
import { Link } from "react-router";

const About = () => {
  const valuePropositions = [
    { icon: "📚", text: "Community-Curated Digital Library" },
    { icon: "✍️", text: "Effortless Book Addition and Management" },
    { icon: "🌟", text: "Discover and Rate the Best Reads" },
  ];

  return (
    <section className="about-us container mx-auto px-4 py-16">
      <div
        className="bg-white dark:bg-gray-800 p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl 
                   border-t-4 border-indigo-500 dark:border-yellow-500 transition duration-500"
      >
        {/* Main Title and Core Message */}
        <h2 className="text-3xl md:text-4xl pb-2 font-extrabold mb-4 text-center text-gray-900 dark:text-white">
          <span className=" border-b-4 border-yellow-500">Know About Us</span>
        </h2>
        <p className=" text-xs md:text-lg text-center text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
          "We are a passion project, built by readers for readers. Our goal is
          to create the simplest, most elegant platform for cataloging, sharing,
          and discovering new literary adventures."
        </p>

        <hr className="my-8 border-gray-200 dark:border-gray-700 max-w-xl mx-auto" />

        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10">
          {valuePropositions.map((prop, index) => (
            <div
              key={index}
              className="p-4  border-y-2 md:border-y-0 md:border-x-2 border-blue-500 hover:bg-gray-50"
            >
              <span className="text-4xl mb-3 block">{prop.icon}</span>
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {prop.text}
              </p>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="text-center mt-12">
          <Link
            to="/all-books"
            className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold 
                       py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            <span>Start Exploring Now</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
