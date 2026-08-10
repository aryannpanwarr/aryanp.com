import { projects, social } from "./projects";

export default function Home() {
  return (
    <div className="sheet">
      <header className="masthead">
        <h1>Aryan Panwar</h1>
        <nav className="social">
          <a href={social.github}>GitHub</a>
          <span className="sep">·</span>
          <a href={social.linkedin}>LinkedIn</a>
          <span className="sep">·</span>
          <a href={social.x}>X</a>
        </nav>
      </header>

      <section>
        <h2>About</h2>
        <p>I&apos;m a software engineer. I love building and exploring new things.</p>
        <p className="quiet">
          Lately that&apos;s been AI agents, and small models small enough to run on the
          device instead of a server.
        </p>
      </section>

      <section>
        <h2>Selected Work</h2>
        <div className="scroller">
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th className="col-links">Links</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.name}>
                  <td>
                    <span className="name">{project.name}</span>
                    <span className="blurb">{project.blurb}</span>
                  </td>
                  <td className="col-links">
                    {project.live && (
                      <>
                        <a href={project.live}>Live</a>
                        <span className="sep">·</span>
                      </>
                    )}
                    <a href={project.code}>Code</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          <a href={`mailto:${social.email}`}>{social.email}</a>
        </p>
        <p className="quiet">
          Everything else I&apos;ve built is on <a href={social.github}>GitHub</a>.
        </p>
      </section>
    </div>
  );
}
