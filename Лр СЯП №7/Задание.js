let form = document.getElementById("form7");
let button = document.getElementById(   "print");
button.onclick = function print(event) {
    event.preventDefault();
    let faculty = form.querySelector("textarea").value;
    let lastName = form.querySelector("#lastName").value;
    let firstName = form.querySelector("#firstName").value;
    let specialty = form.specialty.value;
    let course = form.course.value;
    let hobbies = [];
    for (let i = 0; i < form.hobbies.length; i++) {
        if (form.hobbies[i].checked)
            hobbies.push(form.hobbies[i].value);
    }

    document.write("<h4>" + faculty + "</h4>" + "Студент " + lastName
        + firstName + " специальность " + specialty + " курс "
        + course + " должен сдавать следующие предметы:<br>");
    let ul = document.createElement("ul");
    for (let i = 0; i < hobbies.length; i++) {
        ul.appendChild(document.createElement("li")).innerHTML = hobbies[i];
    }

    document.body.appendChild(ul);

    //Четвертое задание
    let secondForm = document.createElement("secondForm");
    let select =  secondForm.appendChild(document.createElement("select"));
    for (let i = 0; i < hobbies.length; i++) {
        select.appendChild(document.createElement("option")).innerHTML = hobbies[i];
    }
    document.body.appendChild(secondForm);
}
