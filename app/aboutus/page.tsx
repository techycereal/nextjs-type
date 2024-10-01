import React from 'react';
import Header from '../components/Header';

const AboutMe = () => {
  return (
    <div>
    <Header color={'white'}/>
      {/* Hero Section */}
      <section className="relative h-[50vh]"> {/* Set height to half the viewport */}
        <img
          src="aboutus.avif" // Replace with your image path
          alt="About Me Hero"
          className="absolute inset-0 w-full h-full object-cover" // Maintain full coverage of the section
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
          <div className="text-white z-10">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="mt-4 text-lg">A brief introduction about my journey and skills.</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 py-16">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="mb-4">
          Welcome to our spa, a sanctuary for relaxation and rejuvenation. Our mission is to provide a tranquil environment where you can unwind and escape the stresses of daily life.
        </p>
        <p className="mb-4">
          Our team of experienced professionals is dedicated to ensuring that your experience is tailored to your unique needs. We offer a variety of services, including massages, facials, and wellness treatments, all designed to promote your well-being.
        </p>
        <p className="mb-4">
          At our spa, we believe in the power of self-care. Come and experience our luxurious treatments and discover a new level of relaxation. We look forward to welcoming you!
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src="aboutus.avif" // Replace with your image path
          alt="Spa Experience"
          className="w-full h-auto rounded-lg shadow-lg" // Responsive image styling
        />
      </div>
    </section>
    </div>
  );
};

export default AboutMe;
