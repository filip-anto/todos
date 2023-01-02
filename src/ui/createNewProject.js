/*

<!-- Trigger/Open The Modal -->
<button id="myBtn">Open Modal</button>*/
import datepicker from 'js-datepicker';
export default function createNewProject() {
  let modal = document.createElement("div");
  modal.classList.add("modal");

  let modalContent = document.createElement("div");
  modalContent.classList.add("modalContent");
  modal.appendChild(modalContent);


  let closeButton = document.createElement("span");
  closeButton.classList.add("closeButton");
  closeButton.innerHTML = "&times;";
  modal.appendChild(closeButton);

  let formSection = document.createElement("form");
  formSection.action = "submit";
  formSection.classList.add("newProjectForm");
  modalContent.appendChild(formSection);
  let formLegend = document.createElement("legend");
  formLegend.innerHTML = "Enter the details of the new project!";
  formSection.appendChild(formLegend);

  let formSubsection = document.createElement("div");
  formSubsection.classList.add("formSubsection");
  formSection.appendChild(formSubsection);

  let inputSection = document.createElement("div");
  inputSection.classList.add("inputSection");
  formSubsection.appendChild(inputSection);
  let titleLabel = document.createElement("label");
  titleLabel.classList.add("titleLabel");
  titleLabel.htmlFor = "titleLabel";
  titleLabel.innerHTML = "Enter the title!";
  inputSection.appendChild(titleLabel);
  let titleInput = document.createElement("input");
  titleInput.id = "titleInput";
  titleInput.name = "titleInput";
  titleInput.placeholder = "Enter the project's title"
  inputSection.appendChild(titleInput);


  inputSection = document.createElement("div");
  inputSection.classList.add("inputSection");
  formSubsection.appendChild(inputSection);
  let descriptionLabel = document.createElement("label");
  descriptionLabel.classList.add("descriptionLabel");
  descriptionLabel.htmlFor = "descriptionInput";
  descriptionLabel.innerHTML = "Enter the description!";
  inputSection.appendChild(descriptionLabel);
  let descriptionInput = document.createElement("input");
  descriptionInput.id = "descriptionInput";
  descriptionInput.name = "descriptionInput";
  descriptionInput.placeholder = "Enter the project's description"
  inputSection.appendChild(descriptionInput);

  inputSection = document.createElement("div");
  inputSection.classList.add("inputSection");
  formSubsection.appendChild(inputSection);




  let startingDateLabel = document.createElement("label");
  startingDateLabel.classList.add("startingDateLabel");
  startingDateLabel.htmlFor = "startingDateLabel";
  startingDateLabel.innerHTML = "Enter the starting date!";
  inputSection.appendChild(startingDateLabel);


  let startingDateInput = document.createElement("input");
  startingDateInput.id = "startingDateInput";
  inputSection.appendChild(startingDateInput);


  inputSection = document.createElement("div");
  inputSection.classList.add("inputSection");
  formSubsection.appendChild(inputSection);

  let endingDateLabel = document.createElement("label");
  endingDateLabel.classList.add("endingDateLabel");
  endingDateLabel.htmlFor = "endingDateLabel";
  endingDateLabel.innerHTML = "Enter the ending date!";
  inputSection.appendChild(endingDateLabel);

  let endingDateInput = document.createElement("input");
  endingDateInput.id = "endingDateInput";
  inputSection.appendChild(endingDateInput);

  /*inputSection.appendChild(picker);*/

  /*
  // Get the modal
  */

  /*
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  */

  // Get the <span> element that closes the modal


  // When the user clicks anywhere outside of the modal, close it
  /*window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }*/
  return (modal);
}

function projectDatePicker() {

  const startPicker = datepicker('#startingDateInput', { id: 1 });
  startPicker.setMin(new Date());
  const endPicker = datepicker('#endingDateInput', { id: 1 });
}
export { projectDatePicker };