import "./Contact.css"

function Contact() {
    return (
        <section id="contact" className="section contact">
            <h2>Contact</h2>
            <p>
                Interested in working together? Send me a message or connect with me
                online.
            </p>

            <div className="contact-links">
                <a href="mailto:your.email@example.com">Email</a>
                <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                >
                GitHub
                </a>
                <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                >
                LinkedIn
                </a>
            </div>
            </section>
    )
}

export default Contact;