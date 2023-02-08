var addToDoButton = document.getElementById("addToDo");
var toDoContainer = document.getElementById("toDoContainer");
var inputField = document.getElementById("inputField");

addToDoButton.onclick = function () {
    // verifier si l'input n'est pas vide
    if (inputField.value != "") {
        //si l'input n'est pas vide on créer le paragraphe
        var paragraph = document.createElement("p");
    }
    //valorise le paragraphe avec le contenu de l'input
    paragraph.innerHTML = inputField.value;

    //style du paragaphe
    paragraph.classList.add("paragraphe_style");
    //insérer le paragraphe dans l'élément toDoContainer
    toDoContainer.appendChild(paragraph);

    //on vide l'input une fois le paragraphe ajouté
    inputField.value = "";

    //barré le paragraphe quand pn clique dessus
    paragraph.addEventListener("click", function () {
        paragraph.classList.add("paragraph_click");
    });

    // supprimer la tache
    paragraph.addEventListener("dblclick", function () {
        toDoContainer.removeChild(paragraph);
    });
};
