const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
];

isLaptop = !(toMatch.some((toMatchItem) => {
  return navigator.userAgent.match(toMatchItem);
}));

if (isLaptop) {
  window.open('/', '_self');
}
