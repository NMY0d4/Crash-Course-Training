// DATA
const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

// Load data from supabase
async function loadFacts() {
    const res = await fetch(
        "https://uzufnxbyhxwpxumayfll.supabase.co/rest/v1/facts",
        {
            headers: {
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6dWZueGJ5aHh3cHh1bWF5ZmxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU2MTIyNzgsImV4cCI6MTk5MTE4ODI3OH0.FqkhQKufDTCOBa-u18swZUJWdxLhmMtwxm8gnHnt6tY",
                authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6dWZueGJ5aHh3cHh1bWF5ZmxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU2MTIyNzgsImV4cCI6MTk5MTE4ODI3OH0.FqkhQKufDTCOBa-u18swZUJWdxLhmMtwxm8gnHnt6tY",
            },
        }
    );
    const data = await res.json();

    createFactsList(data);
}

loadFacts();

function createFactsList(dataArray) {
    const htmlArr = dataArray.map(
        (fact) => `
        <li class="fact">
            <p>
            ${fact.text}
                <a
                class="source"
                href="${fact.source}"
                target="_blank"
                >
                (Source)
                </a>
                <span
                    class="tag"
                    style="background-color: ${
                        CATEGORIES.find((cat) => cat.name === fact.category)
                            .color
                    }"
                    >
                    ${fact.category}
                </span>
            </p>
        </li>
    `
    );
    const html = htmlArr.join("");
    factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility
btn.addEventListener("click", (e) => {
    e.preventDefault();
    form.classList.toggle("hidden");
    btn.textContent = !form.classList.contains("hidden")
        ? "Close"
        : "share a fact";
});
