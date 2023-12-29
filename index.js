let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let totalPeopleEl = document.getElementById("total-people");

let gecmisBilgi = localStorage.getItem("gecmisBilgi");
let totalPeople = parseInt(localStorage.getItem("totalPeople")) || 0;

if (gecmisBilgi !== null) {
    saveEl.textContent = gecmisBilgi;
} else {
    saveEl.textContent = "";
}

if (!isNaN(totalPeople)) {
    totalPeopleEl.textContent = "Total people: " + totalPeople;
} else {
    totalPeopleEl.textContent = "Total people: 0";
}

let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    localStorage.setItem("gecmisBilgi", saveEl.textContent);

    totalPeople += count;
    localStorage.setItem("totalPeople", totalPeople);
    
    if (!isNaN(totalPeople)) {
        totalPeopleEl.textContent = "Total people: " + totalPeople;
    }

    countEl.textContent = 0;
    count = 0;
}
