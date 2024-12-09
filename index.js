const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const names = ["Alice", "Bob", "Cynthia", "Damian", "Emma", "Frank", "Gina"];
const jobs = [
  "Writer",
  "Teacher",
  "Programmer",
  "Designer",
  "Driver",
  "Gardener",
];

function init() {
  /**
   * 👉 STEP 1: Grab the div with the id of "root"
   */
  const rootContainer = document.getElementById("root");
  /**
   * 👉 STEP 2:
   *    Create a new h1 element that says "Freelancer Forum"
   *    Add the new h1 to the root div
   */

  const heading = document.createElement("h1");
  heading.textContent = "Freelancer Forum";
  rootContainer.appendChild(heading);

  const h2 = document.createElement("h2");
  h2.textContent = "The average starting price is";
  rootContainer.appendChild(h2);

  const availableh1 = document.createElement("h1");
  availableh1.textContent = "Available Freelancers";
  rootContainer.appendChild(availableh1);

  /**
   * 👉 STEP 3:
   *    Create a table to hold our Freelancer Forum in
   */

  const table = document.createElement("table");
  rootContainer.appendChild(table);

  /**
   * 👉 STEP 5:
   *    Call the function you created in step 4
   */

  //   table.appendChild(table);

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  const nameColumn1 = document.createElement("th");
  nameColumn1.textContent = "Name";
  tbody.appendChild(nameColumn1);

  const jobColumn2 = document.createElement("th");
  jobColumn2.textContent = "Occupation";
  tbody.appendChild(jobColumn2);

  const priceColumn3 = document.createElement("th");
  priceColumn3.textContent = "Price";
  tbody.appendChild(priceColumn3);

  freelancers.forEach((person) => {
    const freeRow = document.createElement("tr");
    tbody.appendChild(freeRow);

    const nameCell = document.createElement("td");
    nameCell.textContent = person.name;
    freeRow.appendChild(nameCell);

    const jobCell = document.createElement("td");
    jobCell.textContent = person.occupation;
    freeRow.appendChild(jobCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = person.price;
    freeRow.appendChild(priceCell);

    tbody.appendChild(freeRow);
  });

  //   freeRender();
}

/**
 * 👉 STEP 4:
 *    Create a function to render the Freelancer Forum in our Freelancer Forum array
 */
function freeRender() {}

/**
 * 👉 STEP 6:
 *    Create a function to add a new Freelancer Forum to the Freelancer Forum array
 */

function addFreelancer() {
  const addPrice = Math.floor(Math.random() * 100);

  const addName = names[Math.floor(Math.random() * names.length)];

  const addJob = jobs[Math.floor(Math.random() * jobs.length)];

  freelancers.push({ name: addName, occupation: addJob, price: addPrice });

  freeRender();
}

/**
 * 👉 STEP 7:
 *    Add an interval to add a new Freelancer Forum every second
 */

init();
freeRender();
