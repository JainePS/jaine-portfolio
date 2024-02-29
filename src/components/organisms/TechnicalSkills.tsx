import IconBxlReact from "../../icons/ReactIcon";
import IconLanguageTypescript from "../../icons/TypescriptIcon";

const TechnicalSkills = () => {
  return (
    <div className="w-full text-center my-4">
      <h5 className="font-medium text-white">Technical Skills</h5>
      <div className="w-full flex gap-4  justify-start items-center">
        <IconBxlReact />
        <div>
          <progress className="progress w-56" value="10" max="100"></progress>
        </div>
      </div>
      <div className="w-full flex gap-4  justify-start items-center">
        <IconLanguageTypescript />
        <div>
          <progress className="progress w-56" value="10" max="100"></progress>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
