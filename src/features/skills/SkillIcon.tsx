import { ReactNode } from "react";

interface SkillIconProps {
  skillName: string;
  skillIcon: ReactNode;
}

const SkillIcon = ({ skillName, skillIcon }: SkillIconProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primaryColor text-[30px] text-secondaryColor shadow-md transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg sm:h-[60px] sm:w-[60px] sm:text-[35px]">
        {skillIcon}
      </div>
      <span className="text-lg font-medium">{skillName}</span>
    </div>
  );
};

export default SkillIcon;
