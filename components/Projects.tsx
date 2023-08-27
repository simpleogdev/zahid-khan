import Image from "next/image";
import { FC } from "react";

interface ProjectsProps {
  title: string;
  des: string;
  live: string;
  github: string;
  image: string
}

const Projects: FC<ProjectsProps> = ({ title, des, live, github, image }) => {
  return (
    <section className="mb-6">
      <div className="md:max-w-5xl md:mx-auto flex mx-5 md:flex-row flex-col items-center justify-center md:space-x-14">
        <div className="flex flex-col md:max-w-[40%]">
          <h4 className="md:text-3xl text-2xl font-bold my-3">{title}</h4>
          <p className="text-left md:text-base text-sm font-medium">
            {des}
          </p>
          <div className="flex items-center justify-start space-x-6">
            <a
              className="my-5 border-2 border-primary px-4 py-2 font-bold text-primary  hover:bg-primary hover:text-white transition duration-200 w-fit"
              href={live}
            >
              See Live
            </a>
            <a className="font-bold text-primary" href={github}>Source Code</a>
          </div>
        </div>
        <div>
          <Image
          className="cursor-pointer"
            src={image}
            alt="imdb"
            width={1980}
            height={1080}
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
