const navSlider = ()=>{
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.links');
	
	burger.addEventListener('click', ()=>{
		nav.classList.toggle('navSliderOn');
	});
}
navSlider();
