function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let btn = document.querySelector(".submit");
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || msg.value == "") {
      emptyerror();
    } else if (!(re.test(email.value.trim()))) {
      error();  
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
      name.value = "";
      email.value = "";
      msg.value = "";
    }
  });
}
validate();

function sendmail(name, email, msg) {
  emailjs.send("service_qxqxyxi", "template_njaj7of", {
    to_name: name,
    from_name: email,
    message: msg,
  });
}

function emptyerror() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Please fill out the required fields!",
  });
}

function error() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Please enter a valid email address!",
  });
}

function success() {
  Swal.fire({
    icon: "success",
    title: "Sent!",
    text: "Message successfully sent!",
  });
}

