export default function Summary() {
  return (
    <div className="summary-flex">
      <h2 className="intro-homepage">Hi. My name is</h2>
      <h1>Abhiram Sathasivam.</h1>
      <h2 className="intro-homepage">And I am a Full-Stack Web Developer.</h2>

      <p>
        Checkout my portfolio below. If you are interested in my work, drop me a
        <a className="para-text" href="#contact">
          {" "}
          message
        </a>
        .
      </p>
    </div>
  );
}
