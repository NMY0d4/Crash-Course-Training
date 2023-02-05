console.log("Hello World!");
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    form.classList.toggle("hidden");
    btn.textContent = !form.classList.contains("hidden")
        ? "Close"
        : "share a fact";
});
