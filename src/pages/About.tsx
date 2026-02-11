import "../styles/About.css";

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
          <h3>About</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
            iusto! Consequuntur ducimus assumenda corrupti, eligendi repellat
            quia quasi ipsam incidunt expedita ad dolor, laboriosam, sequi
            voluptatem error voluptatum aperiam architecto?
          </p>
        </div>
        <div className="contact-card">
          <h3>Contact</h3>
        </div>
        <div className="clock-card"></div>
        <div className="projects-card"></div>
        <div className="writings-card"></div>
        <div className="credits-card"></div>
      </div>
    </>
  );
}
