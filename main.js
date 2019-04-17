let grand_total = 0;

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
	e.preventDefault(); //this is where the calculator stuff begins

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
		let annual_total = grand_total * 52; //math for calucator

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
} //DRYer way to move through slides and calcule at the same time