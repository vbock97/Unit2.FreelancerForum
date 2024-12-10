const freelancers = [
  { name: "Twyla", price: 25, job: "gardener" },
  { name: "Cynthia", price: 51, job: "programmer" },
  { name: "Angelina", price: 43, job: "teacher" },
  { name: "Todd", price: 81, job: "teacher" },
  { name: "Ryan", price: 43, job: "teacher" },
  { name: "Toni", price: 76, job: "programmer" },
  { name: "Edge", price: 47, job: "teacher" },
  { name: "August", price: 72, job: "driver" },
];

const names = ["Alice", "Tina", "Karrin", "Dominic", "Emma", "Frank", "Gina"];
const jobs = [
  "Writer",
  "Teacher",
  "Programmer",
  "Designer",
  "Driver",
  "Gardener",
];

const maxLength = 15;

function init() {
  /**
   * 👉 STEP 1: Grab the div with the id of "root"
   */
  const rootContainer = document.getElementById("root");

  /**
   * 👉 STEP 2: Create a new h1 element that says "Freelancer Forum"
   * Add the new h1 to the root div
   */
  const heading = document.createElement("h1");
  heading.textContent = "Freelancer Forum";
  rootContainer.appendChild(heading);

  const h2 = document.createElement("h2");
  h2.textContent = "The average starting price is $" + calculateAveragePrice();
  rootContainer.appendChild(h2);

  const availableh1 = document.createElement("h1");
  availableh1.textContent = "Available Freelancers";
  rootContainer.appendChild(availableh1);

  /**
   * 👉 STEP 3: Create a table to hold our Freelancer Forum in
   */
  const table = document.createElement("table");
  rootContainer.appendChild(table);

  const thead = document.createElement("thead");
  table.appendChild(thead);

  const headerRow = document.createElement("tr");
  thead.appendChild(headerRow);

  const nameColumn1 = document.createElement("th");
  nameColumn1.textContent = "Name";
  headerRow.appendChild(nameColumn1);

  const jobColumn2 = document.createElement("th");
  jobColumn2.textContent = "Occupation";
  headerRow.appendChild(jobColumn2);

  const priceColumn3 = document.createElement("th");
  priceColumn3.textContent = "Price";
  headerRow.appendChild(priceColumn3);

  /**
   * 👉 STEP 5: Call the function to render the freelancers
   */
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  freeRender();
}

/**
 * 👉 STEP 4: Function to render freelancers in the table
 */
function freeRender() {
  const table = document.querySelector("table");
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  freelancers.forEach((person) => {
    const freeRow = document.createElement("tr");
    tbody.appendChild(freeRow);

    const nameCell = document.createElement("td");
    nameCell.textContent = person.name;
    freeRow.appendChild(nameCell);

    const jobCell = document.createElement("td");
    jobCell.textContent = person.job;
    freeRow.appendChild(jobCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = `$${person.price}`;
    freeRow.appendChild(priceCell);
  });

  const h2 = document.querySelector("h2");
  h2.textContent = "The average starting price is $" + calculateAveragePrice();
}

/**
 * 👉 STEP 6: Function to add a new freelancer to the array
 */
function addFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const job = jobs[Math.floor(Math.random() * jobs.length)];
  const price = Math.floor(Math.random() * 100);

  freelancers.push({ name, price, job });
  freeRender();
}

/**
 * 👉 STEP 7: Add an interval to add a new freelancer every second
 */
const addFreelancerIntervalId = setInterval(() => {
  addFreelancer();

  if (freelancers.length >= maxLength) {
    clearInterval(addFreelancerIntervalId);
  }
}, 1000);

function calculateAveragePrice() {
  const total = freelancers.reduce(
    (subtotal, current) => subtotal + current.price,
    0
  );
  return Math.round(total / freelancers.length);
}

init();
