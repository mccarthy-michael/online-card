import headshot from "../assets/headshot.png";
import Email from "../assets/email.png";
import linkdin from "../assets/linkdin.png";

export default function Header() {
  return (
    <header>
      <img src={headshot} alt="headshot of myself" />
      <h1>Michael McCarthy</h1>
      <h3>Computer Scientist</h3>
      <section className="container">
        <a href="mailto:macmike0604@gmail.com">
          <button>
            <img src={Email} />
            Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/michael-mccarthy-8028a2328/">
          <button>
            <img src={linkdin} /> Linkedin
          </button>
        </a>
      </section>
    </header>
  );
}
