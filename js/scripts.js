var btn = document.getElementById('menu'),
links = document.getElementById('links'),
body = document.querySelector('body'),
submenu = document.getElementsByClassName('subMenu');
btn.addEventListener("click", ()=>{
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
});
submenu[0].addEventListener("click", ()=>{
	submenu[0].classList.toggle('active');
	if (submenu[1].classList.contains('active')) {
		submenu[1].classList.remove('active');
	}
});
submenu[1].addEventListener("click", ()=>{
	submenu[1].classList.toggle('active');
	if (submenu[0].classList.contains('active')) {
		submenu[0].classList.remove('active');
	}
});