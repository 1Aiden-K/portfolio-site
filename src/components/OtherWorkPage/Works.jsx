import "./Works.css";
import works from "../../data/works";

function OtherWorks() {
  return (
    <section className="other-works" id="other-works">
      <h1 className="pageTitle">Other Works</h1>
      <h1 className="subTitle">Non-technical work and projects</h1>
      <div className="other-works__container">
        <div className="other-works__list">
          {works.map((work) => (
            <article className="work-card" key={work.title}>
              <div className="work-card__content">
                <h3 className="work-card__title">{work.title}</h3>

                <a
                  className="work-card__link"
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {work.displayLink}
                </a>

                <p className="work-card__description">
                  {work.description}
                </p>
              </div>

              <a
                className="work-card__preview"
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${work.title}`}
              >
                <img
                  src={work.image}
                  alt={`${work.title} website preview`}
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherWorks;