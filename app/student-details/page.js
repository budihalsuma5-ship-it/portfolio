export default function StudentDetails() {
  return (
    <main>
      <h1>Student Details</h1>

      <section>
        <h2>About Me</h2>
        <p>
          I am a Computer Science Engineering student interested in technology,
          programming and learning new skills.
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <p><strong>Degree:</strong> B.E. Computer Science and Engineering</p>
        <p>
          <strong>College:</strong> Sahyadri College of Engineering and
          Management
        </p>
      </section>

      <section>
        <h2>Skills</h2>

        <ul>
          <li>C Programming</li>
          <li>C++</li>
          <li>Java</li>
          <li>Python</li>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>Next.js</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>

        <div className="project">
          <h3>Hostel Complaint Management System</h3>
          <p>
            A system developed to manage and track hostel complaints.
          </p>
        </div>

        <div className="project">
          <h3>Student Management Portal</h3>
          <p>
            A web application for managing and displaying student information.
          </p>
        </div>
      </section>
    </main>
  );
}