import "./Skills.css";
import skills from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills">
        <span className="bracket">[</span>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <span className="skill" key={skill}>
              {skill}
              {index < skills.length - 1 && (
                <span className="comma">,</span>
              )}
            </span>
          ))}
        </div>

        <span className="bracket">]</span>
      </div>
    </section>
  );
}

export default Skills;