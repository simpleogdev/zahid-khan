import { FC } from "react";
import { AiFillGithub } from "react-icons/ai";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="footer flex text-4xl items-center justify-center space-x-8">
      <a href="https://github.com/simpleogdev">
        <AiFillGithub />
      </a>
    </footer>
  );
};

export default Footer;
