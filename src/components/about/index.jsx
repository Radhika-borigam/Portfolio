"use client";
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

// Framer Motion Variants for the Paragraph
const textAnimation = {
  hidden: { opacity: 0, x: 200 }, // Start off-screen to the right
  visible: { opacity: 1, x: 0 }, // Move into view
};

const AboutDetails = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Radhika Borigam",
      "Passionate MERN stack developer",
      "Skilled in implementing DSA with Java",
      "<Guy-Who-Loves-Chocolates.tsx>",
      "<<ButLovesToCODEMore>>",
      "<<I'mREADYtoCODEmyWAYtoSUCCESS>>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          {/* Animated Paragraph */}
          <motion.p
            className="font-light text-xs sm:text-sm md:text-base"
            initial="hidden" // Initial state
            whileInView="visible" // Trigger animation when in view
            viewport={{ once: true }} // Animate only once when it enters the viewport
            variants={textAnimation} // Animation variants
            transition={{ duration: 2.5 }} // Duration of the animation
          >
            Highly motivated software developer with expertise in React, Next.js,
            and Java, and a solid foundation in Python. Currently advancing skills
            in Django. Demonstrates a strong passion for designing and developing
            scalable, high-performance applications. Committed to continuous
            learning and innovation, with a quick ability to adapt to new
            technologies and deliver impactful software solutions. Ready to
            contribute to dynamic teams and drive forward-thinking projects.
          </motion.p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            <sub className="font-semibold text-base">
              Rajiv Gandhi University of Knowledge and Technologies-Basar
            </sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            <sub className="font-semibold text-base">
              Computer Science and Engineering
            </sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4"}>
          {/* Heading */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 sm:mb-0">
              Soft Skills
            </h3>
            {/* Preferences Section */}
            <div className="flex flex-col w-full sm:w-2/3 space-y-4">
              {/* Communication Skill */}
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-yellow-500">
                  Communication
                </p>
                <span className="text-sm font-medium text-yellow-500">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-yellow-500 h-3 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>

              {/* Leadership Skill */}
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-yellow-500">
                  Leadership
                </p>
                <span className="text-sm font-medium text-yellow-500">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-yellow-500 h-3 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>

              {/* Problem Solving Skill */}
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-yellow-500">
                  Problem Solving
                </p>
                <span className="text-sm font-medium text-yellow-500">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-yellow-500 h-3 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>

              {/* Teamwork Skill */}
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-yellow-500">Teamwork</p>
                <span className="text-sm font-medium text-yellow-500">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-yellow-500 h-3 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=appwrite,bootstrap,css,docker,figma,firebase,git,github,graphql,html,js,jquery,kubernetes,linux,mongodb,mysql,nextjs,nodejs,npm,postgres,react,redux,sass,tailwind,threejs,vite,vscode,yarn"
            alt="Skill Icons"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <h3 className="text-center font-semibold text-xl sm:text-2xl  text-yellow-500">
            {text}
          </h3>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
