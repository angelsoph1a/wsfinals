const scrollReveal = {
    distance: "50px",
    origin: "top",
    duration: 1000,
};

ScrollReveal().reveal(".header-container h1", scrollReveal);
ScrollReveal().reveal(".header-container h4", {
    ...scrollReveal,
    delay: 500,
});
ScrollReveal().reveal(".hcard", {
    ...scrollReveal,
    delay: 1000,
});