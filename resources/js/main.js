/* ########################### scroll down button ########################### */


// time to scroll down in milliseconds
const scrollDownTime = 850;

// how far down the page it scrolls
// scrolls down until #scrollStopHere's TOP is at the TOP of window
scrollDownTo = (identifier) => $("html, body").animate({
  scrollTop: $(identifier).offset().top - parseInt($(identifier).css("margin-top"), 10)
}, scrollDownTime);
