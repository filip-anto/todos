import { compareAsc, format } from 'date-fns';
export default function createProject(title,description) {
    let projectCard = document.createElement("div");
    projectCard.classList.add("card");

    let titleLabel = document.createElement("div");
    titleLabel.classList.add("titleLabel");
    titleLabel.innerHTML = "Title:";
    projectCard.appendChild(titleLabel);

    let titleValue = document.createElement("div");
    titleValue.classList.add("titleValue");
    titleValue.innerHTML=title;
    projectCard.appendChild(titleValue);

    let descriptionLabel = document.createElement("div");
    descriptionLabel.classList.add("descriptionLabel");
    descriptionLabel.innerHTML = "Description:";
    projectCard.appendChild(descriptionLabel);

    let descriptionValue = document.createElement("div");
    descriptionValue.classList.add("descriptionValue");
    descriptionValue.innerHTML=description;
    projectCard.appendChild(descriptionValue);
    console.log(projectCard);
    return (projectCard);
}