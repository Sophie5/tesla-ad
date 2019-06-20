document.addEventListener('DOMContentLoaded', function() {

var tl = new TimelineMax({repeat: 30, delay: 0});

tl.to("#building", 2.5, {opacity: 1});
tl.to("#what", 2.5, {opacity: 1});
tl.to("#matters", 2.5, {opacity: 1});
tl.to(".text", 2.5, {opacity: 0});
tl.to("#car", 5, {x: -1200});
tl.to(".wheels",3, {rotation: -600}, '-=5.1');
tl.to("#logo", 3, {x: -405, y: 35, scale: 1.7}, "-=3" );
tl.to("#slogan", 3, {opacity: 1});
});
