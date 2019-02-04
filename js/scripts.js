var btn = document.getElementById('menu');
var links = document.getElementById('links');
var body = document.querySelector('body');
btn.addEventListener("click", aparecer);
function aparecer(){
	if(links.classList.contains('active')){
		links.classList.remove('active');
		body.classList.remove('bg-oscuro');
		setTimeout(()=>{
			body.classList.remove('transition');
		},500);
	}else{
		links.classList.add('active');
		body.classList.add('transition');
		body.classList.add('bg-oscuro');
	}
}