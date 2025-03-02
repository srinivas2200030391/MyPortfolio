import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 6);
  const previewProjects = PROJECTS.slice(6, 9); // Projects 7, 8, 9 for glassmorphism preview

  return (
    <section className="pt-20 relative" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-3xl lg:text-4xl">
        Projects
      </motion.h2>

      {/* Main visible projects */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={project.id}
            className="group relative overflow-hidden rounded-3xl">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={project.image}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="mb-2 text-xl">{project.name}</h3>
              <p className="mb-12 p-4 text-center">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300">
                <div className="flex items-center">
                  <span>View On GitHub</span>
                  <MdArrowOutward className="ml-1" />
                </div>
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Preview layer with glassmorphism for projects 7,8,9 */}
      {!showAll && PROJECTS.length > 6 && (
        <div className="relative mt-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 opacity-40">
            {previewProjects.map((project, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={project.id}
                className="relative overflow-hidden rounded-3xl">
                <img
                  src={project.image}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
              </motion.div>
            ))}
          </div>

          {/* Show More Button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 to-transparent">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(true)}
              className="rounded-full bg-blue-600 px-8 py-3 text-white shadow-lg transition duration-300 hover:bg-blue-700">
              Show More
            </motion.button>
          </div>
        </div>
      )}

      {/* Show Less Button - only when showing all projects */}
      {showAll && PROJECTS.length > 6 && (
        <div className="mt-8 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(false)}
            className="rounded-full bg-blue-600 px-8 py-3 text-white shadow-lg transition duration-300 hover:bg-blue-700">
            Show Less
          </motion.button>
        </div>
      )}
    </section>
  );
}
