import "./Contacts.css";

function Contact() {
  return (
    <section className="section">
      <h1 className="pageTitle">Contact</h1>
      <h1 className="subTitle">Links to all of my relevant contacts</h1>

      <div className="contactContainer">

        {/* Personal */}
        <div className="contactSection">
          <h3>Professional</h3>

          <a href="mailto:your@email.com" className="email">
            your@email.com
          </a>
        </div>

        <div className="contactLinks">
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              GitHub
            </a>
          </div>

        {/* Work */}
        <div className="contactSection">
          <h3>Work</h3>
          <a href="mailto:work@email.com" className="email">
            work@email.com
          </a>
        </div>

        {/* Other */}
        <div className="contactSection">
          <h3>Other</h3>
          <a href="mailto:other@email.com" className="email">
            other@email.com
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;