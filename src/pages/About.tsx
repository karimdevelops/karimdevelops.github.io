import "../styles/About.css";

export default function About() {
  return (
    <>
      <div className="about-cards padd-1">
        <div className="intro-card flex flex-column flex-gap-20">
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
      </div>
    </>
  );
}
