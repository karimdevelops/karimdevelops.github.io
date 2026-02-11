import { Link } from "@tanstack/react-router";

import "../styles/About.css";
import openSvg from "../assets/open.svg";
import UserClock from "../components/UserClock";
import MyClock from "../components/MyClock";

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
              focusing on user experience through mini interactions, and
              animations; with a love for backend too.
            </p>
          </div>
          <p>
            Feel free to reach out if you want to work with me or just for chat
            :)
          </p>
        </div>
        <div className="skills-card">
          <h3>Technologies I use</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
            iusto! Consequuntur ducimus assumenda corrupti, eligendi repellat
            quia quasi ipsam incidunt expedita ad dolor, laboriosam, sequi
            voluptatem error voluptatum aperiam architecto?
          </p>
        </div>
        <div className="contact-card">
          <h4>let's start working together</h4>
          <div className="flex flex-column flex-gap-5">
            <p className="text-light">Contact Details</p>
            <a
              className="text-small text-italic"
              href="mailto:karimdevelops@gmail.com"
            >
              karim.develops@gmail.com
            </a>
          </div>
          <div className="flex flex-column flex-gap-5">
            <p className="text-light">Socials</p>
            <ul className="flex flex-column flex-gap-5">
              <li>
                <a target="_blank" href="https://www.github.com/karimdevelops">
                  Github
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/karimdevelops"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
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
        <Link className="projects-card flex flex-sp-between" to="/projects">
          <h3>projects</h3>
          <img src={openSvg} alt="open" height={24} width={24} />
        </Link>
        <a
          target="_blank"
          href="https://dev.to/karimdevelops"
          className="writings-card flex flex-sp-between"
        >
          <h3>writings</h3>
          <img src={openSvg} alt="open" height={24} width={24} />
        </a>
        <div>
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
          <p className="text-small">Currently studying: BS SE</p>
        </div>
        <div className="credits-card">
          <p className="text-light">© 2026 | inspired by:</p>
          <a href="https://github.com/Ladvace/astro-bento-portfolio">
            click here
          </a>
        </div>
      </div>
    </>
  );
}
