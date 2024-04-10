const outputResultEl = document.getElementById("editor__output-result");

const resultAccordionEl = document.querySelectorAll(
  ".editor__output-result-accordion"
);

resultAccordionEl.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const isAccordionOpen = accordion.getAttribute("data-open") === "true";
    if (isAccordionOpen) accordion.setAttribute("data-open", "false");
    else accordion.setAttribute("data-open", "true");
  });
});

render();

function render() {
  const savedMode = localStorage.getItem(localStorageKey) ?? "CEL";
  if (savedMode === "VAP") outputResultEl.style.display = "flex";
  else outputResultEl.style.display = "none";
}
