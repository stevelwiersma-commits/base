import { profile, projects, about, skills } from './data.js'

export default function App() {
  return (
    <div className="page">
      <header className="rail">
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="summary">{profile.summary}</p>
        <nav aria-label="Sections">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
          <ul className="projects">
            {projects.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <p className="stack">{p.stack.join(', ')}</p>
                <p className="links">
                  {p.links.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" aria-labelledby="about-title">
          <h2 id="about-title">About</h2>
          {about.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Contact</h2>
          <p>
            Email me at <a href={`mailto:${profile.email}`}>{profile.email}</a>, or find me on{' '}
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a> and{' '}
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
        </section>
      </main>
    </div>
  )
}
