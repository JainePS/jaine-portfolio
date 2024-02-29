import profilePhoto from "../../assets/profilePhoto.jpg";

const Avatar = () => {
  return (
    <div className="avatar w-56 h-56 min-w-20">
      <img
        src={profilePhoto}
        alt="profile pic"
        className="w-10 h-10 rounded-3xl object-cover"
      />
    </div>
  );
};

export default Avatar;
