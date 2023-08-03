//You DO NOT need to use the below event if the <script> tag is at the bottom of your HMTL
//You DO NOT need to use the below event if you include defer in the <script defer src = ""> tag
document.addEventListener("DOMContentLoaded", () => {
  // ##access nodes
  const taskForm = document.getElementById("create-task-form");
  // const taskForm = document.quereySelector("#create-task-form")

  const ul = document.getElementById("tasks");
  // const ul = document.quereySelector("#tasks")

  // ###eventlistener (submit)
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //##get value of input
    //1.
    // grab specific input instead of having to read everything inside form
    // let toDoValue = document.getElementById("new-task-description").value

    //2.
    // searches through the event object: PREFERED METHOD
    // e.target will look through inputs solely for the form that triggered the event
    let toDoValue = e.target["new-task-description"].value;
    // we use brackets because - is a reserved symbol for subtraction so need to tell js it's a string
    // e.target.name.value
    // e.target["reserved-symbol-name"].value
    // "-" is reserved for subtraction

    //##create nodes (li) and (dlt)
    let li = document.createElement("li");
    li.textContent = toDoValue;
    ul.appendChild(li);

    let dlt = document.createElement("button");
    li.appendChild(dlt);

    //##gives function to the delete button
    dlt.addEventListener("click", (e) => {
      li.remove();
    });
  });
});
