import GitHubIcon from "../../icons/GitHubIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import TelegramIcon from "../../icons/TelegramIcon";
import TwitterIcon from "../../icons/TwitterIcon";

const iconsArray = [
  <LinkedInIcon />,
  <TelegramIcon />,
  <TwitterIcon />,
  <GitHubIcon />,
];

const ContactIcons = () => {
  return (
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
  );
};

export default ContactIcons;
