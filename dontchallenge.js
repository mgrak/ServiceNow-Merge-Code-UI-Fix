var id = setInterval(function(){
if (document.querySelectorAll("#remember_device_div > div > label").length > 0){
	console.log('check');
	document.querySelectorAll("#remember_device_div > div > label")[0].click();
	clearInterval(id);
}
}, 100); 
