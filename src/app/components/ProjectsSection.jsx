"use client";
import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "E-commerce Project",
    description: "Online Shopping",
    image: "/images/projects/e-comma.png",
    tag: ["Web"],
    gitUrl: "https://github.com/soewanna26/ecommaProject",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Hotel Project",
    description: "Hotels CheckIn Checkout",
    image: "/images/projects/hotel.png",
    tag: ["Web"],
    gitUrl: "https://github.com/soewanna26/hotelproject",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Job Portal Project",
    description: "Hire Job",
    image: "/images/projects/jobportal.png",
    tag: ["Web"],
    gitUrl: "https://github.com/soewanna26/job_portal",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Book Library Project",
    description: "See and Review Library",
    image: "/images/projects/book.png",
    tag: ["Web"],
    gitUrl: "https://github.com/soewanna26/booklaravel11",
    previewUrl: "/",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectData.map((project,index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tag={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
