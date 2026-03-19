import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div className="app">
      <h3>ACM Accessibility Workshop</h3>
      <h1>Common Accessibility Issues Demo</h1>
      <h4>Find the problems and fix them</h4>

      <div className="nav-links">
        <a href="#main">Click here</a>
        <a href="#form">More</a>
        <a href="#contact">Read more</a>
      </div>

      <div className="fake-button" onClick={() => setMenuOpen(!menuOpen)}>
        Toggle Menu
      </div>

      {menuOpen && (
        <div className="menu-box">
          <p>Workshop resources</p>
          <ul>
            <li>
              <a href="https://webaim.org/">Link</a>
            </li>
            <li>
              <a href="https://www.w3.org/WAI/">This</a>
            </li>
          </ul>
        </div>
      )}

      <main id="main">
        <section className="section">
          <h2>Featured Image</h2>
          <img
            className="featured-image"
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
            alt=""
          />
          <p>
            This image is here to support the content, but its accessibility could be improved.
          </p>
        </section>

        <section className="section">
          <h2>Post Actions</h2>
          <button className="icon-button" onClick={() => setLiked(!liked)}>
            ♥
          </button>
          <span>{liked ? "You liked this post." : "Like this post."}</span>
        </section>

        <section id="form" className="section">
          <h2>Workshop Sign Up</h2>

          <form>
            <div className="form-group">
              <label>Name</label>
              <br />
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="text-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Email address"
                className="text-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="topic">Favorite topic</label>
              <br />
              <select id="topic" className="text-input">
                <option>Choose one</option>
                <option>Semantic HTML</option>
                <option>ARIA</option>
                <option>Keyboard Navigation</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="topic">Experience level</label>
              <br />
              <select id="topic" className="text-input">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            <div className="form-group">
              <p>Preferred session time</p>
              <input type="radio" name="time" id="morning" />
              <span>Morning</span>
              <br />
              <input type="radio" name="time" id="afternoon" />
              <span>Afternoon</span>
            </div>

            <div className="form-group">
              <input type="checkbox" id="updates" />
              <span>Send me updates</span>
            </div>

            <button type="submit">Submit</button>
          </form>
        </section>

        <section className="section">
          <h2>Workshop Schedule</h2>
          <table className="schedule-table" border={1} cellPadding={8}>
            <tr>
              <td>Time</td>
              <td>Topic</td>
            </tr>
            <tr>
              <td>6:00 PM</td>
              <td>Intro to Accessibility</td>
            </tr>
            <tr>
              <td>6:30 PM</td>
              <td>Fix the Demo App</td>
            </tr>
          </table>
        </section>

        <section className="section">
          <h2>Newsletter</h2>
          <input type="text" placeholder="Enter email" className="newsletter-input" />
          <button className="newsletter-button"></button>
        </section>

        <section id="contact" className="section">
          <h2>More Resources</h2>
          <p>
            To learn more about accessibility,{" "}
            <a href="https://developer.mozilla.org/">click here</a>.
          </p>
          <p>
            You can also{" "}
            <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/">
              read more
            </a>.
          </p>
        </section>

        <section className="section">
          <h2>Custom Control</h2>
          <span
            className="custom-control"
            onClick={() => alert("This control was activated")}
          >
            Open Alert
          </span>
        </section>
      </main>
    </div>
  );
}

export default App;