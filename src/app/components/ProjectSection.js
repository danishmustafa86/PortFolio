"use client";

// Import your images
import Voice from "@/app/components/images/jajja.png";
import Aiagnet from "@/app/components/images/kitchen.png";
import AiVison from "@/app/components/images/podcast.png";
import Article from "@/app/components/images/ArticleSift.png";
import Diabetes from "@/app/components/images/Diabetes.png";
import Lablab from "@/app/components/images/Lablab.png";
import Leetcode from "@/app/components/images/Leetcode.png";
import Newsnexus from "@/app/components/images/NewNexus.png";
import Geminichatbot from "@/app/components/images/discord.png";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  const projects = [
    {
      title: "Article Sift",
      image: Article,
      description:
        "A web app for managing news links to get short news summaries using AI and a language translator.",
      technologies: ["AIML", "Llama", "Streamlit"],
      link: "#", // Add project links if available
    },
    {
      title: "Smart Kitchen",
      image: Aiagnet,
      description:
        "A simple app for a hotel to manage its customers using new user demands to fulfill them.",
      technologies: ["CSS", "Bootstrap", "JavaScript"],
      link: "#",
    },
    {
      title: "Diabetes Prediction",
      image: Diabetes,
      description:
        "An app that guides diabetes patients about their condition and offers recovery suggestions.",
      technologies: ["Python", "Streamlit", "Anthropic"],
      link: "#",
    },
    {
      title: "Podcast Generator",
      image: AiVison,
      description: "An app that helps people engage by chatting with machines.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "#",
    },
    {
      title: "Lablab Hackathons",
      image: Lablab,
      description:
        "Participation in multiple hackathons at lablab.ai, achieving good positions.",
      technologies: ["Python", "Streamlit", "HuggingFace"],
      link: "#",
    },
    {
      title: "Leetcode Practice",
      image: Leetcode,
      description:
        "Improving my logical thinking and problem-solving skills via LeetCode and DSA.",
      technologies: ["DSA", "NeetCode.io", "Python"],
      link: "#",
    },
    {
      title: "NewsNexus",
      image: Newsnexus,
      description: "A news aggregation and analysis platform.",
      technologies: ["Google Custom API", "Streamlit", "Llama"],
      link: "#",
    },
    {
      title: "Voice to Voice Chatbot",
      image: Diabetes,
      description: "Voice chatbot for real-time communication.",
      technologies: ["AIML", "Streamlit", "OpenAI", "gpt-4"],
      link: "#",
    },
    {
      title: "Discord App",
      image: Geminichatbot,
      description: "A Discord clone app.",
      technologies: ["JavaScript", "CSS", "Bootstrap"],
      link: "#",
    },
  ];

  // Placeholder for AI-generated info (could be replaced with real AI call)
  const getAIGeneratedInfo = (project) => {
    return `AI Insight: The project "${project.title}" leverages modern technologies to solve real-world problems. Its stack includes ${project.technologies.join(", ")}. This project stands out for its innovative approach and user-centric design.`;
  };

  return (
    <section id="projects" className="p-5 font-sans bg-black text-white min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-teal-400 animate-fadeIn">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                width={400}
                height={200}
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => {
                    setModalProject(project);
                    setModalOpen(true);
                  }}
                  className="bg-teal-500 bg-opacity-90 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-300"
                >
                  View Project
                </button>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3 text-teal-400">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for AI-generated project info */}
      {modalOpen && modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white text-black rounded-lg shadow-2xl p-8 max-w-lg w-full relative animate-fadeIn">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-teal-600">{modalProject.title}</h2>
            <Image
              src={modalProject.image}
              alt={modalProject.title}
              width={400}
              height={200}
              className="rounded mb-4"
            />
            <p className="mb-4">{modalProject.description}</p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {modalProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mt-4">
              <h4 className="font-semibold mb-2 text-teal-700">AI Generated Insight</h4>
              <p>{getAIGeneratedInfo(modalProject)}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}