import EmailIcon from "../../icons/EmailIcon";

const MailButton = () => {
  return (
    <a
      role="button"
      className="btn text-white bg-gradient-to-r w-full from-indigo-500 via-purple-500 to-pink-500"
      href="mailto:`jaine.aps@hotmail.com`?subject={subject}&body={body}"
    >
      CONTACT ME
      <EmailIcon />
    </a>
  );
};

export default MailButton;
