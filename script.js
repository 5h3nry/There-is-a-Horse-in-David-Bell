const state = {
  user: null,
  isLoading: false,
}

function logIn() {
  let user = document.getElementById('userInput').value
  let pass = document.getElementById('passInput').value

    if(user === "a.stoddard" && pass === "AlphaCentauri1") {
      unlockedStoddard = true;
    } else {
    alert('Please enter a valid login.');
  }
};