// 1. Query selector for menu icon clicked _/
// 2. Changing menu button to hidden on click  _/
// 3. Changing navbar items to show _/
// 4. Hiding the nav items once any one of them is clicked. _/
// 5. Then nav items should appear ontop of everything else._/

var menu=document.getElementById('menu-bar');
var navBar=document.getElementById('navBar');
function starting() {
	menu.style.display='none';
	navBar.style.display='block';
	return(menu.style.display);
}

function second(){
	if (menu.style.display==='none') {
		menu.style.display='block';
		navBar.style.display='none';
	}
}

// function goingUp() {
	
// }

document.querySelector('#menu-bar').addEventListener("click", function(){
	// console.log('hinm');
	starting();
});

document.querySelector('#navBar').addEventListener("click", function(){
	second();
});
// document.querySelector('go-top').addEventListener("click", function(){
// 	goingUp();
// });

// ADDING AN ACTIVE ELEMENT TO THE NAVIGATION ITEMS
// Get the container element
var liHolder = document.getElementById("navBar");

// Get all buttons with class="btn" inside the container
var liItem = liHolder.getElementsByClassName("li-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < liItem.length; i++) {
  liItem[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}