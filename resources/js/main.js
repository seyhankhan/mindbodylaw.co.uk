Calendly.initBadgeWidget({
  url: 'https://calendly.com/mindbodylaw/free-consultation-call',
  text: 'Schedule Free Call',
  color: '#2f2f2f',
  textColor: '#ffffff',
  branding: false
});


scrollDown = () => $("html, body").animate({
  scrollTop: $('#sand').offset().top // scrolls down to the specified element
}, 860); // 850 = time taken to scroll down in milliseconds


$(document).ready(() => {
  $(".calendly-badge-widget .calendly-badge-content").css({
    'padding': '15px 20px',
    'border-radius': '8px',
    'box-shadow': "rgba(47, 47, 47, 0.5) 0 2px 5px",
    'font-family': "Avenir, 'Nunito Sans', sans-serif",
    'text-transform': 'uppercase',
    'vertical-align': 'middle',
    'letter-spacing': '0.1em',
    'font-size': '0.8em',
    'color': 'white',
    '-webkit-user-select': 'none',  /* Chrome all / Safari all */
    '-moz-user-select': 'none',     /* Firefox all */
    '-ms-user-select': 'none',      /* IE 10+ */
    'user-select': 'none'           /* Likely future */
  })

  $(".calendly-badge-content").hover(() => {
      $(".calendly-badge-content").css("opacity", "0.8")
    }, () => {
      $(".calendly-badge-content").css("opacity", "1")
    }
  );
  
  $(".calendly-badge-content").html(`
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><rect x="4" y="5" width="16" height="16" rx="2" /><line x1="16" y1="3" x2="16" y2="7" /><line x1="8" y1="3" x2="8" y2="7" /><line x1="4" y1="11" x2="20" y2="11" /><rect x="8" y="15" width="2" height="2" /></svg>
    <br>
    SCHEDULE FREE CALL
  `);
});
