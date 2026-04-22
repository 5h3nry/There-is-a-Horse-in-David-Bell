const state = {
  user: null,
  isLoading: false,
};

function logIn() {
  let user = document.getElementById("userInput").value;
  let pass = document.getElementById("passInput").value;

  if (user === "a.stoddard" && pass === "AlphaCentauri1") {
    document.getElementById("invalid").innerHTML = "";
    user = "a.stoddard";
  } else {
    event.preventDefault;
    document.getElementById("userInput").classList.add("invalid");
    document.getElementById("passInput").classList.add("invalid");
    document.getElementById("userInput").addEventListener("animationend", (event) => { document.getElementById("userInput").classList.remove("invalid");})
    document.getElementById("passInput").addEventListener("animationend", (event) => { document.getElementById("passInput").classList.remove("invalid");})
    document.getElementById("invalid").innerHTML = "<span>INVALID LOGIN</span>";
    document.getElementById("logIn").reset();
  }
}
