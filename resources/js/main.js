/* ########################### scroll down button ########################### */


// time to scroll down in milliseconds
const scrollDownTime = 800;

// how far down the page it scrolls
// scrolls down until #scrollStopHere's TOP is at the TOP of window
scrollDistance = $("#scrollStopHere").offset().top - parseInt($("#scrollStopHere").css("margin-top"), 10);

scrollDown = () => $("html, body").animate({
  scrollTop: scrollDistance
}, scrollDownTime);
