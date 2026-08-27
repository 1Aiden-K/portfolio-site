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

          <a href="mailto:aiden.khanna@gmail.com" className="email">
            aiden.khanna@gmail.com
          </a>
        </div>

        <div className="contactLinks">
            <a
              href="https://www.linkedin.com/in/aiden-c-khanna-2407a9326/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/1Aiden-K"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              GitHub
            </a>
          </div>

        {/* Work */}
        <div className="contactSection">
          <h3>ACK Foundation</h3>
          <a href="mailto:contact@ackfoundation.org" className="email">
            contact@ackfoundation.org
          </a>
        </div>

        {/* Other */}
        <div className="contactSection">
          <h3>Beyond the Sound</h3>
          <a href="mailto:aiden.khanna@beyondthesound.net" className="email">
            aiden.khanna@beyondthesound.net
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;