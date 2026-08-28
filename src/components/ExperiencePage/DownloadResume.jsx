import './DownloadResume.css';

function ResumeDownloadButton() {
  return (
    <section className='section'>
      <h1 className="pageTitle">Experience</h1>
      <h1 className="subTitle">Work experience and resume</h1>
      <a
        href="/resume.pdf"
        download="AidenKhanna-Resume2026.pdf"
        className="btn primary"
      >
        Download Resume
      </a>
    </section>
  );
}

export default ResumeDownloadButton;