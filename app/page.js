export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h1>Hi, I'm Sumangala</h1>

        <h2>Computer Science Engineering Student</h2>

        <p>
          I am a Computer Science Engineering student who is interested in
          technology, programming, and learning new skills.
        </p>

        <div className="buttons">
          <a href="/student-details" className="button">
            Student Details
          </a>

          <a href="/contact" className="button">
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}