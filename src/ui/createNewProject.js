/*

<!-- Trigger/Open The Modal -->
<button id="myBtn">Open Modal</button>*/
export default function createNewProject(){
let modal=document.createElement("div");
modal.classList.add("modal");

let modalContent=document.createElement("form");
modalContent.classList.add("modalContent");
modal.appendChild(modalContent);


let closeButton=document.createElement("span");
closeButton.classList.add("closeButton");
closeButton.innerHTML="&times;";
modal.appendChild(closeButton);
return (modal);
/*<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div>

<script>
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}</span>
*/
}