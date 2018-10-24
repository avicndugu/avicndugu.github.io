// 1. Query selector for menu icon clicked _/
// 2. Changing menu button to hidden on click  _/
// 3. Changing navbar items to show _/
// 4. Giving menu icons a new class that changes the navbar items
//    to show as one list. _/
// 5. Hiding the nav items once one of them is clicked.
// 6. Then nav items should appear ontop of everything else._/

var menu=document.getElementById('menu');
var navItems=document.getElementById('navBar');
function starting() {
	menu.style.display='none';
	navItems.style.display='block';

}

function second(){

}


document.querySelector('#menu').addEventListener("click", function(){
	console.log('hinm');
	starting();
});