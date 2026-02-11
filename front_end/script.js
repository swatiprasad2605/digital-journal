const titleInput = document.getElementById("titleInput");
const contentInput = document.getElementById("contentInput");
const saveBtn = document.getElementById("saveBtn");
const entriesContainer = document.getElementById("entriesContainer");

saveBtn.addEventListener("click", function () {
  const title = titleInput.value;
  const content = contentInput.value;

  if (title === "" || content === "") {
    alert("Please fill in both fields.");
    return;
  }

  const entryDiv = document.createElement("div");

  entryDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <hr>
    `;

  entriesContainer.appendChild(entryDiv);

  titleInput.value = "";
  contentInput.value = "";
});
