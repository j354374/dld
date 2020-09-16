function clearall() {
	var panels = document.querySelectorAll('.panel'),
		i;
	for(i = 0; i < panels.length; ++i) {
		panels[i].style.display = "none";
	}
}

function init() {
	//document.getElementById('clear-btn').addEventListener("click", clearall);
  const classbtns = document.querySelectorAll(".buttons");

for (let i = 0; i < classbtns.length; i++) {
  classbtns[i].addEventListener("click", function() {
    clearall(); 
    document.querySelector('#' + classbtns[i].getAttribute('data-value')).style.display = "inline";
    document.querySelector('#' + classbtns[i].getAttribute('data-value') + '-footer').style.display = "inline";
  });
}

}
window.addEventListener('load', init);
