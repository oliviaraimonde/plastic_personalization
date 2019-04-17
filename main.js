let grand_total = 0;

// $("body").on("click", ".start-btn,.steps-btn", function (e) {
// 	e.preventDefault(); //have to add this so we don't get weird behavior in older browers (IE)
// 	const myPath = $(this), //this button clicked
// 		mySlide = myPath.data('id'), //grab id info in the data attriburte data-id
// 		mySlideBackground = mySlide + "-background", //convert to bakground id
// 		mySlideColor = myPath.data('color'); //grab volor in data attribute data-color
// 	console.log(mySlide);
// 	console.log(mySlideBackground);
// 	console.log(mySlideColor);
// 	$("#" + mySlideBackground).addClass('active').css("background-color", mySlideColor)
// 	$("#" + mySlide).addClass('active').css("background-color", mySlideColor)
// 	$('html, body').animate({ //body and html because different browers
// 		scrollTop: $("#" + mySlideBackground).offset().top
// 	}, 400);
// });

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

$("body").on("submit", "form", function (e) {
	e.preventDefault();

	// const myPath = $(this), //this button clicked
	// 	mySlide = myPath.data('id'), //grab id info in the data attriburte data-id
	// 	mySlideBackground = mySlide + "-background", //convert to bakground id
	// 	mySlideColor = myPath.data('color'); //grab volor in data attribute data-color
	// console.log(mySlide);
	// console.log(mySlideBackground);
	// console.log(mySlideColor);
	// $("#" + mySlideBackground).addClass('active').css("background-color", mySlideColor)
	// $("#" + mySlide).addClass('active').css("background-color", mySlideColor)
	// $('html, body').animate({ //body and html because different browers
	// 	scrollTop: $("#" + mySlideBackground).offset().top
	// }, 400);

	const $this_slide = $(this).closest("div.choices, .intro"),
		$next_slide = $this_slide.nextAll("div.choices").eq(0),
		number = $this_slide.find("input[type='number']").val(),
		weight = parseFloat($this_slide.find("input[name='weight']").val());

	console.log($(this));
	console.log($this_slide);
	console.log($next_slide);

	if (!$this_slide.hasClass("intro")) {
		const slide_total = number * weight;

		grand_total = grand_total + slide_total;
		let annual_total = grand_total * 52;

		console.log("number:", number);
		console.log("weight:", weight);
		console.log("slide_total:", slide_total);
		console.log("grand_total:", grand_total);
		console.log("annual_total:", annual_total);

		$("#my_total").find("span").text(annual_total.toLocaleString());

	}

	goToSlide($next_slide);
});

function goToSlide($slide) {
	$slide.removeClass("hide").addClass("active");
	$slide.find(".hide").removeClass("hide").addClass("active");

	$("html, body").animate({
		scrollTop: $slide.offset().top + "px"
	}, 400);
}

// $(".calc-btn").on("click", function (e) {
// 	get_number();
// 	total_plastic();
// });
//
// function get_number() {
// 	numberOfPlasticBags = parseFloat($("#plasticBagsNumber").val());
// 	console.log(numberOfPlasticBags);
// } //repeat for all four
//
// function total_plastic() {
// 	totalPlastic = numberOfPlasticBags * 10;
// 	console.log(totalPlastic)
// } //input other four values and multiply by 52