import "./Experiences.css";
import experiences from "../../data/experiences.jsx";

export default function Experience() {
  return (
    <section className="section experience" id="section">
      {experiences.map((job) => (
        <article className="experienceItem" key={job.company}>
          <div className="experienceHeading">
            <div>
              <h3>{job.role}</h3>
              <p>{job.company}</p>
            </div>

            <span className="date">{job.date}</span>
          </div>

          <ul>
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}