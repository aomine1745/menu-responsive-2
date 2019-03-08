var btn = document.getElementById('menu'),
links = document.getElementById('links'),
wall = document.querySelector('.wall'),
submenu = document.getElementsByClassName('subMenu');
btn.addEventListener("click", ()=>{
	if(links.classList.contains('active')){
		links.classList.remove('active');
		wall.classList.remove('wall-effect');
		wall.classList.remove('wall-block');
	}else{
		links.classList.add('active');
		setTimeout(()=>{
			wall.classList.add('wall-effect');
		},1);
		wall.classList.add('wall-block');
	}
});
wall.addEventListener("click", ()=>{
	links.classList.remove('active');
		wall.classList.remove('wall-effect');
		wall.classList.remove('wall-block');
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