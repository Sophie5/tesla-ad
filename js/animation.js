document.addEventListener('DOMContentLoaded', function() {

var tl = new TimelineMax({repeat: 30, delay: 0});

tl.to("#building", 2.5, {opacity: 1});
tl.to("#what", 2.5, {opacity: 1});
tl.to("#matters", 2.5, {opacity: 1});
tl.to(".text", 2.5, {opacity: 0});
tl.to("#car", 5, {x: -1200});
tl.to(".wheels",3, {rotation: -600}, '-=5.1');
});
