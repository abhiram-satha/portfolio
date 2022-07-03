import "./Contact.css"

export default function Contact() {
  return (
    <div id="contact" className="flex-form page">
    <form action="https://getform.io/f/4276c753-0626-4eae-9a24-8fd9179f6ca4" method="POST">
    <label>Name</label>
    <input type="text" name="name"/>
    <label>Email</label>
    <input type="email" name="email"/>
    <label>Message</label>
    <input type="text" name="message"/>
    

    <button type="submit">Send Message</button>
</form>
</div>
  )
}

<form action="https://getform.io/f/4276c753-0626-4eae-9a24-8fd9179f6ca4" method="POST">
  <div class="mb-3">
    <label class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>