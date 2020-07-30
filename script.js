/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/

/* TODO: Add a variable to store the "my-list" element */


/* TODO: Create the event listener that listens for a mouse click and runs the checkOffList function */


/* TODO: Declare the function checkOffList and add actions inside the { } */
let selected = false;

const testImage = document.getElementById("test-image");
testImage.onclick = handleClick;

function handleClick() {  
  selected = !selected
  
  if (selected) {
    testImage.classList.add("selected");
  } else {
    testImage.classList.remove("selected");
  }
}

