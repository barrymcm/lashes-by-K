// Two methods for timers - setTimeout and SetInterval (single / repeating)

/*function simpleMessage() {
	alert("This is just an alert box");
}

// settimeout is in milliseconds
setTimeout(simpleMessage,5000);*/

var myImage = document.getElementById("mainImage");

var imageArray = ["images/eyebrw_hdr_banner.jpg","images/eyelsh_hdr_banner.jpg","images/nails_hdr_banner.jpg"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds
var intervalHandle = setInterval(changeImage,5000);


myImage.onclick =  function() {
	clearInterval(intervalHandle);
};









