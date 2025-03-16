const header = document.querySelector("[userHeaderInput]");
const body = document.querySelector("[userBodyInput]");
const button = document.querySelector("[submitButton]");
const important = document.querySelector("#ImportantCheck");
const Worker = document.querySelector("#select_worker");
const tasksContainer = document.querySelector("#main-tasks__box");

const importantContent = "IMPORTANT &#x1F525";
const nonImportant = "No important";

const creatingTasks = () => {
  let number = 0;
  button.addEventListener("click", () => {
    number++;
    console.log(number);
    if (number == 5) {
      number = 4;
      tasksContainer.removeChild(tasksContainer.firstChild);
    }
    //console.log(Worker.value);
    let newDiv = document.createElement("div");
    if (important.checked) {
      newDiv.className = "Important";
      newDiv.innerHTML = `
        <h2>${header.value}</h2>
        <b>${Worker.value}</b>
        <b>${importantContent}</b>
        <div class="text-task">
          ${body.value}
        </div>
      `;
    } else {
      newDiv.className = "nonImportant";
      newDiv.innerHTML = `
        <h2>${header.value}</h2>
        <b>${Worker.value}</b>
        <b>${nonImportant}</b>
        <div class="text-task">
          ${body.value}
        </div>
        `;
    }
    tasksContainer.appendChild(newDiv);
  });
};

// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////

const App = () => {
  creatingTasks();
};

window.onload = App;
