import React from 'react';



function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>This is where you can introduce yourself.</p>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Vite</li>
          </ul>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>Description of Project 1.</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Description of Project 2.</p>
          </div>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email: your.email@example.com</p>
          <p>Phone: +1234567890</p>
        </section>
      </main>
    </div>
  );
}

export default App;
