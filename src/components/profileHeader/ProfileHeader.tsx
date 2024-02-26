import { motion } from "framer-motion";
import profilePhoto from "../../assets/profilePhoto.jpg";
import LinkedInIcon from "../../icons/LinkedInIcon";
import TelegramIcon from "../../icons/TelegramIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import GitHubIcon from "../../icons/GitHubIcon";
import EmailIcon from "../../icons/EmailIcon";

const header = `Hi, I'm Jaine! 👋`;

const ProfileHeader = () => {
  const iconsArray = [
    <LinkedInIcon />,
    <TelegramIcon />,
    <TwitterIcon />,
    <GitHubIcon />,
  ];
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

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex flex-col justify-between items-center gap-4 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="flex flex-col justify-between items-center max-w-screen-sm text-left lg:mb-16">
          <motion.h2 variants={sentence} initial="hidden" animate="visible">
            {header.split("").map((char, index) => {
              return (
                <motion.span
                  key={`${char}-${index}`}
                  className="mb-4 font-primary font-bold text-4xl text-gray-900 dark:text-white"
                  variants={letter}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.h2>
          <p className="italic font-primary font-light mb-10">
            Software Developer
          </p>
          <div className="avatar w-56 h-56 rounded-full">
            <img
              src={profilePhoto}
              alt="profile pic"
              className="w-10 h-10 rounded-3xl object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center gap-10">
          {iconsArray.map((icon, index) => {
            return (
              <div
                key={`${icon}-${index}`}
                className="w-8 h-8 p-2 flex items-center text-center justify-center rounded-full border-2 border-white bg-transparent"
              >
                {icon}
              </div>
            );
          })}
        </div>
        <a
          role="button"
          className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          href="mailto:`jaine.aps@hotmail.com`?subject={subject}&body={body}"
        >
          CONTACT ME
          <EmailIcon />
        </a>
        <h5 className="font-medium text-white">Experience</h5>
        <span className="text-center">
          3 years working as a Software Developer, in companys such as Itaú,
          Stone and Aftersale.
        </span>
      </div>
    </section>
  );
};

export default ProfileHeader;
