document.addEventListener("DOMContentLoaded", function() {

//Menu
 
var nav = document.querySelector(".nav>li");
var ul = document.querySelectorAll("ul .hide>li");

	nav.addEventListener("mouseover", function(){
		for (var i=0; i<ul.length; i++){
			ul[i].style.display = "block";
		};
		// console.log(ul);
	});

	nav.addEventListener("mouseout", function(){
		for (var i=0; i<ul.length; i++){
			ul[i].style.display = "none";
		};
		// console.log(ul);
	});

//Hide of white line in block2
var images = document.querySelectorAll(".blok2 > div");
// console.log(images);

for(i=0; i<images.length; i++){
	images[i].addEventListener("mouseover", function(){
		var whiteline = this.querySelector(".whiteline");
		whiteline.style.display = "none";
	});

	images[i].addEventListener("mouseout", function(){
		var whiteline = this.querySelector(".whiteline");
		whiteline.style.display ="block";
	});
};


//Slider

var leftAroow = document.querySelector(".less");
var rightAroow = document.querySelector(".greater");
var blackChair = document.querySelector("div .blackChair");


function slider(arg){
arg.addEventListener("click", function(){
	if(blackChair.classList.contains("blackChair")){
		blackChair.classList.remove("blackChair");
		blackChair.classList.add("redChair");
	}else if(blackChair.classList.contains("redChair")){
		blackChair.classList.remove("redChair");
		blackChair.classList.add("blueChair");
	}else{
		blackChair.classList.remove("blueChair");
		blackChair.classList.add("blackChair");
	}
});

}
slider(leftAroow);
slider(rightAroow);


});













