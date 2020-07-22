/* ########################### scroll down button ########################### */


// time to scroll down in milliseconds
const scrollDownTime = 800;

// how far down the page it scrolls
scrollDistance =
$("#scrollStopHere").offset().top - parseInt($("#scrollStopHere").css("margin-top"), 10);

scrollDown = () => $("html, body").animate({
  scrollTop: scrollDistance
}, scrollDownTime);
