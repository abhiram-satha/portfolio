import "./Contact.css"

export default function Contact() {
  return (
    <div id="contact" className="flex-form page">
<form action="https://getform.io/f/4276c753-0626-4eae-9a24-8fd9179f6ca4" method="POST">

<div class="mb-3">
    <input type="text" placeholder="Name" class="form-control" id="exampleInputName1"/>
  </div>


  <div class="mb-3">

    <input type="email" placeholder="Email Address" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text"></div>
  </div>

  <div class="mb-3">
    <input type="text" placeholder="Your Message" class="form-control" id="exampleInputMessage1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
  )
}

