import { ArrowUpRight } from "lucide-react";

interface Props {
  text: string;
  link: string;
}

const RepoButton = ({ text, link }: Props) => {
  return (
    <>
      <a
        href={link}
        className="inline-flex 
              items-center 
              gap-2 
              bg-base-300/70
              border 
              border-gray-500/50
              hover:border-gray-500
              text-xs
              font-semibold 
              px-4 
              py-2 
              rounded-full 
              w-fit 
              transition-colors 
              duration-300
              group
              text-base-content/70
              hover:text-base-content
              "
      >
        <img
          height="15"
          width="15"
          src="https://cdn.simpleicons.org/github/black/white"
          alt="GitHub"
        />
        {text}
        <ArrowUpRight className="size-3.5 ml-3 text-gray-500 group-hover:text-blue-400 transition-colors duration-200" />
      </a>
    </>
  );
};

export default RepoButton;
