import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl font-Ovo"
      >
        My lastest works
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl font-Ovo mx-auto mt-5 mb-12"
      >
        I have worked on various projects that showcase my skills and experience
        in web development. Some of my most recent projects include:
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-5 my-10 dark:text-white"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="border border-gray-200 aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 dark:text-white">
              <div>
                <h2 className="font-semibold dark:text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-700 dark:text-white/80">
                  {project.description}
                </p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 0.5, delay: 1.1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        href=""
        className="w-max flex items-center justify-center gap-2 border-[0.5px] border-e-gray-400 rounded-full py-3 px-10 mx-auto my-20 bg-gray-700 text-white dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
      >
        Show more
        <Image
          src={assets.right_arrow_bold}
          alt="rigth arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
