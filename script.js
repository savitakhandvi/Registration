
// Array of JSON objects
const events = [
    {
        name: "Web Development Workshop",
        category: "Technical",
        date: "2026-11-20"
    },
    {
        name: "Dance Competition",
        category: "Cultural",
        date: "2026-11-25"
    },
    {
        name: "Cricket Tournament",
        category: "Sports",
        date: "2026-12-05"
    },
    {
        name: "Coding Competition",
        category: "Technical",
        date: "2026-12-10"
    },
    {
        name: "Music Festival",
        category: "Cultural",
        date: "2026-12-15"
    }
];

function displayEvents() {

    let search = document.getElementById("search")
        .value.toLowerCase();

    let category = document.getElementById("category").value;

    let date = document.getElementById("date").value;

    let sort = document.getElementById("sort").value;

    // Filter events
    let filtered = events.filter(function(event) {

        return event.name.toLowerCase().includes(search)
        && (category === "All" || event.category === category)
        && (date === "" || event.date === date);

    });

    // Sort events by date
    filtered.sort(function(a, b) {

        if (sort === "asc") {
            return new Date(a.date) - new Date(b.date);
        } else {
            return new Date(b.date) - new Date(a.date);
        }

    });

    let container = document.getElementById("eventContainer");

    container.innerHTML = "";

    // No results message
    if (filtered.length === 0) {
        container.innerHTML =
            '<p class="no-result">No Results Found!</p>';
        return;
    }

    // Display event cards
    filtered.forEach(function(event) {

        container.innerHTML += `
            <div class="card">
                <h3>${event.name}</h3>
                <p>Category: ${event.category}</p>
                <p>Date: ${event.date}</p>
                <button>View Event</button>
            </div>
        `;

    });
}

// Event listeners
document.getElementById("search")
    .addEventListener("input", displayEvents);

document.getElementById("category")
    .addEventListener("change", displayEvents);

document.getElementById("date")
    .addEventListener("change", displayEvents);

document.getElementById("sort")
    .addEventListener("change", displayEvents);

// Display all events initially
displayEvents();
