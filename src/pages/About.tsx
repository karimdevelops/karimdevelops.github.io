import { Link } from "@tanstack/react-router";

import "../styles/About.css";
import openSvg from "../assets/icons/open.svg";
import nowSvg from "../assets/icons/now.svg";
import UserClock from "../components/UserClock";
import MyClock from "../components/MyClock";
import SocialButtons from "../components/SocialButtons";
import TechIcons from "../components/TechIcons";

export default function About() {
  return (
    <>
      <div className="about-cards grid [grid-template-areas:'intro_intro_intro_skills''intro_intro_intro_skills''clock_projects_now_skills''clock_writings_now_skills''clock_contact_theme_credits'] gap-2 *:flex [&>div]:flex-col">
        <div className="intro-card">
          <div>
            <p className="text-(--txt-light-col)">hi there, i'm</p>
            <h2 className="inline-block bg-linear-to-r from-(--from-grad) to-(--to-grad) bg-clip-text text-transparent font-bold">
              Abdul Karim
            </h2>
            <p>
              a self taught developer started in 2022 turned professional,
              mainly focusing on user experience, micro interactions, and
              animations; with a love for backend too.
            </p>
          </div>
          <p>Feel free to reach out for work or chat :)</p>
          <SocialButtons />
        </div>
        <div className="skills-card">
          <h3 className="font-bold">Technologies I use</h3>
          <TechIcons />
        </div>
        <div className="clock-card">
          <p className="text-base text-(--txt-light-col)">my time</p>
          <MyClock />
          <p className="text-base text-(--txt-light-col)">your time</p>
          <UserClock />
        </div>
        <div className="theme-card">
          <h3 className="font-bold">pick theme</h3>
        </div>
        <Link className="projects-card justify-between" to="/projects">
          <h3 className="font-bold">projects</h3>
          <img src={openSvg} alt="open" height={24} width={24} />
        </Link>
        <a
          target="_blank"
          href="https://dev.to/karimdevelops"
          className="writings-card justify-between"
        >
          <h3 className="font-bold">writings</h3>
          <img src={openSvg} alt="open" height={24} width={24} />
        </a>
        <Link className="contact-card justify-between" to="/contact">
          <h3 className="font-bold">contact</h3>
          <img src={openSvg} alt="open" height={24} width={24} />
        </Link>
        <div className="now-card">
          <div className="flex justify-between">
            <h3 className="font-bold">
              now{" "}
              <a
                target="_blank"
                href="https://sive.rs/nowff"
                className="font-normal text-(--txt-light-col) text-base"
              >
                what's that
              </a>
            </h3>
            <img height={24} width={24} src={nowSvg} alt="now" />
          </div>
          <p className="text-base">doing Bachelors in SE & building stuff</p>
        </div>
        <div className="credits-card items-center">
          <span className="text-base text-(--txt-light-col)">
            © 2026 |{" "}
            <a
              target="_blank"
              href="https://github.com/karimdevelops/karimdevelops.github.io"
            >
              Portfolio
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
