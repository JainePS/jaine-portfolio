import profilePhoto from "../assets/profilePhoto.jpg";

const ProfileHeader = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex flex-col justify-between items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 font-primary font-bold text-4xl text-gray-900 dark:text-white">
            Hi, I'm Jaine! 👋
          </h2>
          <p className="italic font-primary font-light">Software Developer</p>
          <div className="avatar w-96 h-96 rounded-full">
            <img
              src={profilePhoto}
              alt="profile pic"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
