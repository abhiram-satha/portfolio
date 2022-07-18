import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div id="contact" className="flex-form page">
        <div className="heading-flex">
        <h1 className="title-style">Contact</h1>
        </div>
        <br />
        <form
          action="https://getform.io/f/4276c753-0626-4eae-9a24-8fd9179f6ca4"
          method="POST"
        >
          <div class="mb-3">
            <input
              type="text"
              placeholder="Name"
              className="form-control text"
              name="name"
            />
            <br />
            <input
              type="email"
              placeholder="Email Address"
              className="form-control text"
              name="email"
            />
            <br />
            <div className="message-field">
              <textarea
                type="text"
                rows="5"
                placeholder="Your Message"
                className="form-control text message"
                name="message"
              />
            </div>
            <br />
            <button type="submit" className="contact-button btn">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
