//your JS code here. If required.
//your JS code here. If required.
const dropdown = document.getElementById("colorSelect");
// get the button
const button= document.getElementById("removeBtn");

//function to remove the color
function removeColor(){
const index= dropdown.selectedIndex;
if(index !== -1) {
dropdown.remove(index);
}
}

//add event listener
button.addEventListener("click", removeColor);