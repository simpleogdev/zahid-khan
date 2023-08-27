import Image from "next/image";
import { FC } from "react";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <section className="about text-white mb-1 border border-primary">
      <div className="flex items-center py-10 justify-center">
        <h3 className="uppercase font-bold text-4xl">About Me</h3>
      </div>
      <div className="flex md:flex-row flex-col max-w-5xl mx-auto items-center justify-center md:space-x-20 my-6">
        <div className="md:max-w-[60%] mr-5">
          <Image
            className="h-[300px] shadow-lg rounded-md w-[300px] object-cover object-center"
            src="/images/profile-pic.jpg"
            alt="profile"
            width={1980}
            height={1080}
            quality={100}
            priority
          />
        </div>
        <div className="md:max-w-[50%] md:text-start text-center md:mx-0 mx-5 md:my-0 my-16">
          <p className="leading-[1.65]">
            I am self though front-end developer who is passionate about building awesome
            website’s and application’s! I have currently learned and used HTML, CSS,
            Tailwind CSS, Next JS, Javascript, React. On personal level, I am self-driven & hard
            working, I am able to adapt very quick and overall I am very curious. Also, I
            am really friendly who can fit in any team.
          </p>
          <p className="my-5">My current skills</p>
          <p> HTML, CSS,
            TAILWIND CSS, Next JS, Javascript, React, Typescript, Supabase, My SQL, APIs,
            , GIT</p>
        </div>
      </div>
    </section>
  );
};

export default About;
