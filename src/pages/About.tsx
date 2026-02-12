import { Link } from "@tanstack/react-router";

import "../styles/About.css";
import openSvg from "../assets/icons/open.svg";
import UserClock from "../components/UserClock";
import MyClock from "../components/MyClock";
import SocialButtons from "../components/SocialButtons";
import TechIcons from "../components/TechIcons";

export default function About() {
  return (
    <>
      <div className="about-cards grid grid-gap-10 padd-1">
        <div className="intro-card">
          <div>
            <p className="text-light">hi there, i'm</p>
            <h2 className="text-gradient">Abdul Karim</h2>
            <p>
              a self taught developer started in 2022 turned professional mainly
              focusing on user experience through micro interactions, and
              animations; with a love for backend too.
            </p>
          </div>
          <p>
            Feel free to reach out if you want to work with me or just for chat
            :)
          </p>
          <SocialButtons />
        </div>
        <div className="skills-card">
          <h3>Technologies I use</h3>
          <TechIcons />
        </div>
        <div className="clock-card">
          <p className="text-light">my time</p>
          <MyClock />
          <p className="text-light">your time</p>
          <UserClock />
        </div>
        <div className="theme-card">
          <h3>pick theme</h3>
        </div>
        <Link
          className="projects-card flex flex-sp-between flex-items-center"
          to="/projects"
        >
          <h3>projects</h3>
          <img src={openSvg} alt="open" height={24} width={24} />
        </Link>
        <a
          target="_blank"
          href="https://dev.to/karimdevelops"
          className="writings-card flex flex-sp-between flex-items-center"
        >
          <h3>writings</h3>
          <img src={openSvg} alt="open" height={24} width={24} />
        </a>
        <div className="now-card">
          <h3>
            now{" "}
            <a
              target="_blank"
              href="https://sive.rs/nowff"
              className="text-light"
            >
              what's that
            </a>
          </h3>
          <p className="text-small">doing Bachelors in SE & building stuff</p>
        </div>
        <div className="credits-card">
          <span className="text-light text-small">
            © 2026 |{" "}
            <a href="https://github.com/Ladvace/astro-bento-portfolio">
              Bento Portfolio
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
