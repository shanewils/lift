

// Get the modal
var modal = document.getElementById("myModal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function doorOpenLeft() {
    var element = document.getElementById("doorleft");
    element.classList.add("animateleft");
    setTimeout(() => { element.classList.add("hide"); }, 1000);
    setTimeout(() => { modal.style.display = "block"; }, 2000);
  }

function doorOpenRight() {
    var element = document.getElementById("doorright");
    element.classList.add("animateright");
    setTimeout(() => { element.classList.add("hide"); }, 1000);
    
  }