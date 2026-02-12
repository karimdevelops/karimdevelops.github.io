import emailSvg from "../assets/icons/email.svg";
import githubSvg from "../assets/icons/github.svg";
import linkedinSvg from "../assets/icons/linkedin.svg";

export default function SocialButtons() {
  return (
    <div className="flex flex-gap-20">
      <a className="social-icon" href="mailto:karim.develops@gmail.com">
        <img src={emailSvg} alt="email" />
      </a>
      <a
        className="social-icon"
        target="_blank"
        href="https://github.com/karimdevelops"
      >
        <img src={githubSvg} alt="github" />
      </a>
      <a
        className="social-icon"
        target="_blank"
        href="https://linkedin.com/in/karimdevelops"
      >
        <img src={linkedinSvg} alt="linkedin" />
      </a>
    </div>
  );
}
