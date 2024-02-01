// Import a function from another module (assuming you have fetchData.js)
import { fetchData } from "./fetchData.js";

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}!`;
  }
}

// Inheritance example
class Admin extends User {
  constructor(name) {
    super(name);
  }

  // Additional functionality specific to Admin
  accessLevel() {
    return `${this.name} has full access.`;
  }
}

const user = new User("Alice");
document.getElementById("greeting").innerText = user.greet();

document.getElementById("loadData").addEventListener("click", async () => {
  try {
    const data = await fetchData();
    document.getElementById("data").innerText = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
});
