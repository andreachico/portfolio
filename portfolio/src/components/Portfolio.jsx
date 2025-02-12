import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
    { name: "Portfolio Website", description: "A personal website showcasing my work.", link: "#" },
    { name: "World Countries App", description: "A personal website detailing info about countries in the world.", link: "#" },
];

export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <div className="content">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="intro"
                >
                    <h1>Hi, I'm Andrea!</h1>
                    <p>Software Developer | Web Enthusiast | Problem Solver</p>
                </motion.div>

                <div className="social-links">
                    <a href="https://github.com/andreachico?tab=repositories" target='_blank'><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/andrea-chico-8220071b4/" target='_blank'><FaLinkedin /></a>
                    <a href="https://mail.google.com/mail/u/0/?to=andymaechico@gmail.com&su=SUBJECT&body=BODY&fs=1&tf=cm" target='_blank'><FaEnvelope /></a>
                </div>

                <h2>Projects</h2>
                <div className="projects">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}