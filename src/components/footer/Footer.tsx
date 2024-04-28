import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="lg:flex ml-44 flex-col md:flex-row text-center lg:text-left lg:justify-between">
          <div className="mb-10 lg:mb-0">
            <span className="mb-8 mx-auto lg:mx-0 text-green-400 text-4xl font-semibold">
              Attendy
            </span>

            <p className="font-normal text-gray-500 text-md">
              This is a digital platform designed to
              <br /> streamline and automate the process of tracking
              <br /> and managing attendance records in various institutions
            </p>
          </div>
        </div>

        <hr className="text-gray-700 mt-16" />

        <p className="font-normal text-gray-700 text-md text-center mt-5">
          &copy; 2024 Attendy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
