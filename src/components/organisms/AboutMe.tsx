import { motion } from "framer-motion";
import ContactIcons from "../molecules/ContactIcons";

const header = `Hi, I'm Jaine! 👋`;
const sentence = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-4 max-w-screen-sm text-left lg:mb-16">
      <motion.h2 variants={sentence} initial="hidden" animate="visible">
        {header.split("").map((char, index) => {
          return (
            <motion.span
              key={`${char}-${index}`}
              className="font-primary font-bold text-4xl text-gray-900 dark:text-white"
              variants={letter}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.h2>
      <p className="italic font-primary font-light">Software Developer</p>
      <h5 className="font-medium text-lg text-white">Experience</h5>
      <span className="text-center text-lg w-2/3">
        3 years working as a Software Developer, in companys such as Itaú, Stone
        and Aftersale.
      </span>
      <div className="hidden md:block">
          <ContactIcons />
        </div>
    </div>
  );
};

export default AboutMe;
