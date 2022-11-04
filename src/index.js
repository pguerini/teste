import "./styles.css";

let data = null;
const choiceForm = document.querySelector("#choices");
const selected = document.querySelector("#choice");
const result = document.querySelector("#result");
const btnSubmit = document.querySelector("#submit-choice");
const imageContainer = document.querySelector(".image-container");
choiceForm.addEventListener("submit", (evt) => handleSubmit(evt));
selected.addEventListener("change", (evt) => cleanForm());

function cleanForm(evt) {
  result.innerHTML = "";
  imageContainer.innerHTML = "";
  btnSubmit.removeAttribute("disabled");
}

function handleSubmit(evt) {
  evt.preventDefault(); // evita refresh da pagina
  btnSubmit.setAttribute("disabled", "true");
  getData();

  console.log();
}

// handleResult(res);
const handleResult = ({ url, name }) => {
  const inputValue = selected.value;

  if (inputValue === name) {
    result.innerHTML = `<div class="win">WIN</div>`;
  } else {
    result.innerHTML = `<div class="lose">LOSE</div>`;
  }

  imageContainer.innerHTML = `<img src="${url}" data-name="${name}">`;
};

const getData = () => {
  console.log("This is the getData function");

  fetch("https://comp2132.com/fruit")
    .then((res) => res.json())
    .then((res) => {
      // console.log("Fetch is completed, res =", res);
      // const { url, name } = res;
      // console.log("Destruction:: ", url, name);
      handleResult(res);
    })
    .catch((error) => {
      console.error("ERROR::: ", error);
      // window.location.reload();
    });
};
