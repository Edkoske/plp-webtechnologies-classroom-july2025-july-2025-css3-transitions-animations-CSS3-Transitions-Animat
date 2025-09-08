// ==============================
// PART 2: JavaScript Functions
// ==============================

// Example: Function with parameters & return value
function calculateArea(width, height) {
  const area = width * height;
  document.getElementById("areaResult").textContent = `Area: ${area}`;
  return area;
}

// Scope demonstration
let globalMessage = "Hello from Global Scope!";

function scopeDemo() {
  let localMessage = "Hello from Local Scope!";
  console.log(globalMessage); // Accessible
  console.log(localMessage);  // Only inside this function
}
scopeDemo(); // Run immediately

// ==============================
// PART 3: Combine CSS + JS
// ==============================
const animateBtn = document.getElementById("animateBtn");
const magicBox = document.getElementById("magicBox");

// Toggle the "animate" class to trigger CSS animation
animateBtn.addEventListener("click", () => {
  magicBox.classList.toggle("animate");
});
