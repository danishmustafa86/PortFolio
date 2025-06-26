"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
// import profilePic from "./images/myimage.jpg";

const ImageComponent = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [particles, setParticles] = useState([]);

  const roles = ["Full-Stack Developer", "AI Enthusiast", "Innovator"];
  const currentRole = roles[loopNum % roles.length];

  // Generate particles only on the client after mount
  useEffect(() => {
    const generateParticles = (count) => {
      return Array.from({ length: count }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
      }));
    };
    setParticles(generateParticles(20));
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      setText(
        isDeleting
          ? currentRole.substring(0, text.length - 1)
          : currentRole.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, currentRole, typingSpeed]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image - Added this section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/danish.jpg" // Using image from public folder
          alt="Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center text-white px-6 md:px-16 z-20">
        {/* Left Section (Text) */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight animate-fadeIn">
            Danish Mustafa
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl animate-slideUp">
            <span className="text-blue-400 font-semibold">{text}</span>
            <span className="ml-1">|</span>
            <br />
            Crafting <span className="text-blue-400 font-semibold">cutting-edge</span> digital solutions with a passion for problem-solving and AI-driven development.
          </p>

          {/* Mission Statement */}
          <div className="mt-8 animate-slideUp">
            <p className="text-lg md:text-xl text-gray-300 italic">
              &quot;Empowering businesses with innovative technology and seamless user experiences.&quot;
            </p>
          </div>

          {/* Social Proof or Testimonial */}
          <div className="mt-8 animate-slideUp">
            <p className="text-lg md:text-xl text-gray-300">
              Trusted by <span className="text-blue-400 font-semibold">100+ clients</span> worldwide.
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center md:justify-start space-x-4 animate-slideUp">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Section (Profile Image) */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0 animate-fadeIn">
          <div className="relative group">
            <Image
              // src={profilePic}
              src="/myhalf.jpg" // Using image from public folder
              alt="Danish Mustafa"
              width={350}
              height={350}
              className="rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300 animate-float"
              priority
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-500 transition-all duration-300"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-float"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.animationDelay,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageComponent;