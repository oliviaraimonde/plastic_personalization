$("body").on("click", ".start-btn,.steps-btn", function (e) {
	e.preventDefault(); //have to add this so we don't get weird behavior in older browers (IE)
	const myPath = $(this), //this button clicked
		mySlide = myPath.data('id'), //grab id info in the data attriburte data-id
		mySlideBackground = mySlide + "-background", //convert to bakground id
		mySlideColor = myPath.data('color'); //grab volor in data attribute data-color
	console.log(mySlide);
	console.log(mySlideBackground);
	console.log(mySlideColor);
	$("#" + mySlideBackground).addClass('active').css("background-color", mySlideColor)
	$("#" + mySlide).addClass('active').css("background-color", mySlideColor)
	$('html, body').animate({ //body and html because different browers
		scrollTop: $("#" + mySlideBackground).offset().top
	}, 400);
})

//return to top
$("body").on("click", ".restart-btn", function (e) {
	e.preventDefault() //had to add this so we don't get weird behavior in older browsers
	$(".hide").removeClass('active') //hides all the divs that were unhidden
	scrollyUp(); //see function below to scroll up
});

//function that scrolls bavl up when .restart-btn is clicked
function scrollyUp() {
	$("html,body").animate({
		scrollTop: $(".intro").offset().top + "px"
	});
}
$(".calc-btn").on("click", function (e) {
	get_number();
	total_plastic();
})

function get_number() {
	numberOfPlasticBags = parseFloat($("#plasticBagsNumber").val());
	console.log(numberOfPlasticBags);
}

function total_plastic() {
	totalPlastic = numberOfPlasticBags * 10;
	console.log(totalPlastic)
} //repeat for the other four and multiply by 52