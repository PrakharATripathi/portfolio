import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Technology</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </motion.div>

      {/* Conditionally render based on device type */}
      {isMobile ? (
        // Static grid layout for mobile
        <div className='mt-8 flex flex-wrap justify-center gap-6'>
          {technologies.map((technology) => (
            <div 
              key={technology.name} 
              className='flex flex-col items-center justify-center w-20 h-20 bg-tertiary rounded-full p-2'
            >
              <img 
                src={technology.icon} 
                alt={technology.name}
                className='w-12 h-12 object-contain'
              />
              <p className='text-xs text-center mt-2 text-white-100'>{technology.name}</p>
            </div>
          ))}
        </div>
      ) : (
        // 3D balls for desktop
        <div className='flex flex-row flex-wrap justify-center gap-10 mt-8'>
          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
              <p className='text-xs text-center mt-2'>{technology.name}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Tech, "skills");
