import { FC } from "react";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  return (
    <main className="md:max-w-[1070px] mx-auto flex items-center md:justify-start justify-center min-h-screen">
      <div className="md:block flex flex-col items-center justify-center">
        <h1 className="md:text-6xl text-4xl md:mx-0 mx-5 md:text-start text-center md:block flex flex-col items-center justify-center font-bold md:leading-[1.25] leading-[1.45]">
          Hi, my name is <span className="text-primary">Zahid Khan</span> <br className="md:block hidden"/> Front End
          Developer
        </h1>
      <div className="my-5">
        <button className="border-2 border-primary px-4 py-2 font-bold text-primary text-2xl hover:bg-primary hover:text-white transition duration-200">
          Know more
        </button>
      </div>
      </div>
    </main>
  );
};

export default Main;
 