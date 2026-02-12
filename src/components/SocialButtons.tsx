import emailSvg from "../assets/icons/email.svg";
import githubSvg from "../assets/icons/github.svg";
import linkedinSvg from "../assets/icons/linkedin.svg";

export default function SocialButtons() {
  return (
    <div className="flex flex-gap-20">
      <a href="mailto:karim.develops@gmail.com">
        <img className="social-icon" src={emailSvg} alt="email" />
      </a>
      <a target="_blank" href="https://github.com/karimdevelops">
        <img className="social-icon" src={githubSvg} alt="github" />
      </a>
      <a target="_blank" href="https://linkedin.com/in/karimdevelops">
        <img className="social-icon" src={linkedinSvg} alt="linkedin" />
      </a>
    </div>
  );
}
