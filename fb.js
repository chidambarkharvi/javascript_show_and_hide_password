const element = document.getElementById("submit-button");

element.addEventListener("click", (event) => {
  event.preventDefault();
});

function myFunction() {
  var x = document.getElementById("inputPassword5");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
