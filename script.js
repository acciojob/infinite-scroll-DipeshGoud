//your code here!

const list = document.getElementById("infi-list");

// Function to check if the user has reached the end of the list
function isEndOfListVisible() {
  const listRect = list.getBoundingClientRect();
  return listRect.bottom <= window.innerHeight;
}

// Function to add more list items
function addMoreListItems(n) {
  // Add 2 more list items
  for (let i = 1; i <= n; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = "List Item " + (list.childElementCount + i);
    list.appendChild(listItem);
  }
}

// Add 10 list items by default
addMoreListItems(10);

// Event listener for scroll event
window.addEventListener("scroll", function () {
  if (isEndOfListVisible()) {
    addMoreListItems(2);
  }
});