const readline = require("readline");

// Create an interface to interact with the user via command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tasks = []; // Array to store the tasks

// Function to add a task (with a simulated database delay)
function addTask(description) {
  console.log("Adding task, please wait...");
  setTimeout(() => {
    tasks.push(description);
    console.log(`Task added: ${description}`);
    askForAction();
  }, 2000); // Simulating a 2-second delay
}

// Function to view all tasks (with a simulated database delay)
function viewTasks() {
  console.log("Retrieving tasks, please wait...");
  setTimeout(() => {
    if (tasks.length === 0) {
      console.log("No tasks to show.");
    } else {
      console.log("Here are your tasks:");
      tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
    }
    askForAction();
  }, 1000); // Simulating a 1-second delay
}

// Function to ask the user for an action
function askForAction() {
  rl.question(
    "Would you like to (1) Add a task, (2) View tasks, or (3) Exit? ",
    (answer) => {
      if (answer === "1") {
        rl.question("Enter the task description: ", (description) => {
          addTask(description);
        });
      } else if (answer === "2") {
        viewTasks();
      } else if (answer === "3") {
        console.log("Goodbye!");
        rl.close();
      } else {
        console.log("Invalid option, please try again.");
        askForAction();
      }
    }
  );
}

// Start the application
console.log("Welcome to the Todo List Application!");
askForAction();
