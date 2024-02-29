import EmailIcon from "../icons/EmailIcon";
import Avatar from "../components/atoms/Avatar";
import ContactIcons from "../components/molecules/ContactIcons";
import AboutMe from "../components/organisms/AboutMe";
import TechnicalSkills from "../components/organisms/TechnicalSkills";
import MailButton from "../components/atoms/MailButton";

const Main = () => {
  return (
    <section className="w-full flex flex-col justify-between items-center">
      <div className="w-full flex flex-col justify-between items-center md:items-start md:flex-row gap-4 text-left">
        <AboutMe />
        <Avatar />
        <div className="md:hidden py-4">
          <ContactIcons />
        </div>
      </div>
      <MailButton />
      <TechnicalSkills />
    </section>
  );
};

export default Main;
