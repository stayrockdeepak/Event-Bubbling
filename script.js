//Event Bubbling

const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener(
  "click",
  (e) => {
    console.log("Bubbling--> grandParent div is clicked");
  },
  { capture: false }
);

parent.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();
    console.log("Bubbling--> parent div is clicked");
  },
  { capture: false }
);

child.addEventListener(
  "click",
  (e) => {
    console.log("Bubbling--> child div is clicked");
  },
  { capture: false }
);
