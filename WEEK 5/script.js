// =======================
// Part 1: Variables & Conditionals
// =======================

let userName = "Brian";
let userScore = 85;

if (userScore >= 90) {
  console.log("Excellent job, " + userName + "!");
} else if (userScore >= 70) {
  console.log("Good effort, " + userName + "!");
} else {
  console.log("Keep trying, " + userName + "!");
}

// =======================
// Part 2: Custom Functions
// =======================

// Function to greet the user
function greetUser(name) {
  return `Hello, ${name}! Welcome to the project.`;
}

// Function to double a number
function doubleNumber(num) {
  return num * 2;
}

console.log(greetUser(userName));
console.log("Double of 10 is:", doubleNumber(10));

// =======================
// Part 3: Loop Examples
// =======================

// For loop to populate a list
for (let i = 1; i <= 5; i++) {
  console.log("Item " + i);
}

// While loop to count down
let count = 3;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

// =======================
// Part 4: DOM Interactions
// =======================

// Change text content
document.getElementById("title").textContent = "JS Project: DOM in Action";

// Add event listener to button
document.getElementById("actionBtn").addEventListener("click", function () {
  document.getElementById("message").textContent = "Button clicked!";
  populateList();
});

// Dynamically add list items
function populateList() {
  const list = document.getElementById("list");
  list.innerHTML = ""; // Clear previous items
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = `List item ${i}`;
    list.appendChild(li);
  }
}