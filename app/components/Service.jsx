import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Service = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl font-Ovo"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl font-Ovo mx-auto mt-5 mb-12"
      >
        I specialize in developing web applications and mobile applications
        using modern technologies like React, Next.js, Angular, Flutter, and
        Node.js. I have experience with various backend technologies such as
        Express, Django, and Laravel, as well as databases like MySQL,
        PostgreSQL, and MongoDB. I also have experience with frontend
        technologies like HTML, CSS, and JavaScript, along with libraries like
        React, Angular, and Vue.js. I am adept at working with various version
        control systems like Git, and I am also proficient in debugging and
        fixing bugs in my code. I am always looking for opportunities to
        collaborate with talented developers to create innovative and successful
        projects.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-6 my-8 "
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-200 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:hover:shadow-white"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-500 leading-5 dark:text-white/50">
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more
              <Image src={assets.right_arrow} alt="arrow-r" className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Service;
