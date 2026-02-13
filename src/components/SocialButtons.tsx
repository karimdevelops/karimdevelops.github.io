import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

import emailSvg from "../assets/icons/email.svg";
import githubSvg from "../assets/icons/github.svg";
import linkedinSvg from "../assets/icons/linkedin.svg";

export default function SocialButtons() {
  return (
    <div className="flex gap-5">
      <Tooltip>
        <TooltipTrigger>
          <a className="social-icon" href="mailto:karim.develops@gmail.com">
            <img src={emailSvg} alt="email" />
          </a>
        </TooltipTrigger>
        <TooltipContent>karimdevelops@gmail.com</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <a
            className="social-icon"
            target="_blank"
            href="https://github.com/karimdevelops"
          >
            <img src={githubSvg} alt="github" />
          </a>
        </TooltipTrigger>
        <TooltipContent>github</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <a
            className="social-icon"
            target="_blank"
            href="https://linkedin.com/in/karimdevelops"
          >
            <img src={linkedinSvg} alt="linkedin" />
          </a>
        </TooltipTrigger>
        <TooltipContent>linkedin</TooltipContent>
      </Tooltip>
    </div>
  );
}
