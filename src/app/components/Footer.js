"use client";

import React from "react";
import Image from "next/image";

// Social Media Icons
import Facebook from "@/app/components/images/facebook.png";
import Twitter from "@/app/components/images/tweet.png";
import Github from "@/app/components/images/github.png";
import Linkedin from "@/app/components/images/linkedin.png";
import Instagram from "@/app/components/images/insta.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-950 to-black text-white py-10 px-5 mt-12 shadow-inner">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-wide text-teal-400 mb-1">Danish Mustafa</h2>
            <p className="text-sm text-gray-300 italic">Full-Stack Developer | AI Enthusiast | Problem Solver</p>
          </div>

          {/* Social Links and Back to Top (responsive) */}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-4 w-full md:w-auto">
            <div className="flex justify-center space-x-6">
              {[
                { link: "https://www.linkedin.com/in/danishmustafa86/", icon: Linkedin, alt: "LinkedIn" },
                { link: "https://github.com/danishmustafa86", icon: Github, alt: "GitHub" },
                { link: "https://twitter.com/danishmustafa86", icon: Twitter, alt: "Twitter" },
                { link: "https://www.facebook.com/danish.jajja.56", icon: Facebook, alt: "Facebook" },
                { link: "https://www.instagram.com/danishmustafa_786", icon: Instagram, alt: "Instagram" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label={item.alt}
                >
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={32}
                    height={32}
                    className="transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(13,255,255,0.5)]"
                  />
                </a>
              ))}
            </div>
            {/* Back to Top Button - always visible, responsive */}
            <div className="flex justify-center md:justify-end w-full md:w-auto">
              <a
                href="#top"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white text-xs font-semibold py-2 px-4 rounded-full shadow-md transition-all duration-200 mt-4 md:mt-0"
                aria-label="Back to Top"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                Back to Top
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-teal-600 my-6 shadow-[0_0_12px_2px_rgba(13,255,255,0.2)]"></div>

        {/* Copyright Section */}
        <div className="text-center text-xs text-gray-400 tracking-wide">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-teal-400 font-semibold">Danish Mustafa</span>. All rights reserved.
            <span className="ml-2">|</span>
            <span className="ml-2">Made with <span className="text-pink-400">&#10084;&#65039;</span> & Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
