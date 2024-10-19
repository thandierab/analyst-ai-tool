function displayTips(response) {
  new Typewriter("#tips", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

function generateTips(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "fdb54d87boat51d444fdd3abf00cc2b3";
  let prompt = `provide accurate feedack for the user's question at ${instructionsInput.value}. Keep responses short, and accurate`;
  let context =
    "you are an experienced AI IT assistant. You are skilled in all IT areas including business intelligence, data analysis, business analysis, process analysis, and web development. Your mission is to provide responses to queries basic HTML. Do not include ```html``` Make sure to follow the user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let tipsElement = document.querySelector("#tips");
  tipsElement.classList.remove("hidden");
  tipsElement.innerHTML = `<div class="blink">⌛Generating tips for your query</div>`;

  axios.get(apiUrl).then(displayTips);
}

let tipsFormElement = document.querySelector("#tips-generator-form");
tipsFormElement.addEventListener("submit", generateTips);
