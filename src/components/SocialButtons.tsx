import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

import emailSvg from "../assets/icons/email.svg";
import githubSvg from "../assets/icons/github.svg";
import linkedinSvg from "../assets/icons/linkedin.svg";

export default function SocialButtons() {
  return (
    <div className="flex gap-5">
      <a className="social-icon" href="mailto:karim.develops@gmail.com">
        <Tooltip>
          <TooltipTrigger>
            <img src={emailSvg} alt="email" />
          </TooltipTrigger>
          <TooltipContent>karimdevelops@gmail.com</TooltipContent>
        </Tooltip>
      </a>
      <a
        className="social-icon"
        target="_blank"
        href="https://github.com/karimdevelops"
      >
        <Tooltip>
          <TooltipTrigger>
            <img src={githubSvg} alt="github" />
          </TooltipTrigger>
          <TooltipContent>github</TooltipContent>
        </Tooltip>
      </a>
      <a
        className="social-icon"
        target="_blank"
        href="https://linkedin.com/in/karimdevelops"
      >
        <Tooltip>
          <TooltipTrigger>
            <img src={linkedinSvg} alt="linkedin" />
          </TooltipTrigger>
          <TooltipContent>linkedin</TooltipContent>
        </Tooltip>
      </a>
    </div>
  );
}
