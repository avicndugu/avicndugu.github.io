// 1. Query selector for menu icon clicked _/
// 2. Changing menu button to hidden on click  _/
// 3. Changing navbar items to show _/
// 4. Giving menu icons a new class that changes the navbar items
//    to show as one list. _/
// 5. Hiding the nav items once one of them is clicked.
// 6. Then nav items should appear ontop of everything else._/

var menu=document.getElementById('menu');
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


document.querySelector('#menu').addEventListener("click", function(){
	console.log('hinm');
	starting();
});

document.querySelector('#navBar').addEventListener("click", function(){
	second();
})