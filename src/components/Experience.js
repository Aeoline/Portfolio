import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Mobile Development Cohort"
            company="Bangkit Academy 2023 Batch 2"
            time="Aug 2023 - Feb 2024"
            address="Jakarta, Indonesia (Remote)"
            companyLink="https://github.com/Aeoline/Recepku-MD"
            work="I completed the Bangkit career readiness program, supported by Google, GoTo, Tokopedia, and Traveloka, aimed at producing top technical talent for Indonesian tech companies. I mastered Android development using Kotlin, Android Studio, MVVM architecture, and the Singleton pattern. I also collaborated with participants from other learning paths to develop 'Recepku', ensuring seamless API integration and an excellent user experience."
          />

          {/* <Details
            position="Mobile Development Cohort"
            company="Bangkit Academy 2023 Batch 2"
            time="Aug 2023 - Feb 2024"
            address="Jakarta, Indonesia (Remote)"
            companyLink="https://github.com/Aeoline/Sangkanjoyo"
            work="I completed the Bangkit career readiness program, supported by Google, GoTo, Tokopedia, and Traveloka, aimed at producing top technical talent for Indonesian tech companies. I mastered Android development using Kotlin, Android Studio, MVVM architecture, and the Singleton pattern. I also collaborated with participants from other learning paths to develop 'Recepku', ensuring seamless API integration and an excellent user experience."
          /> */}


          <Details
            position="Web Developer"
            company="PT. Mahir Tekno Utama"
            time="Jan 2023 - Feb 2023"
            address="East Jakarta"
            companyLink="https://github.com/Aeoline/mtu-catalog"
            work="During my internship at PT. Mahir Tekno Utama, I contributed to the development of an e-catalog system. I created the front end using HTML, CSS, and JavaScript, focusing on making it interactive and user-friendly. For the back end, I utilized Laravel, a PHP framework, to implement key functionalities like user management, product listings, and search features. I also set up the MySQL database, defining its schema and ensuring smooth data management with phpMyAdmin. My experience with Laravel and PHP was crucial in delivering a robust and efficient system."
          />
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-between gap-3 grid-cols-2">
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Projects
        </Link>
        <Link
          href="/articles/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Articles
        </Link>
      </div>
    </div>
  );
};

export default Experience;
