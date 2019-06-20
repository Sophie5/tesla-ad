document.addEventListener('DOMContentLoaded', function() {

var tl = new TimelineMax({repeat: 30, delay: 0});

tl.to("#building", 2.5, {opacity: 1});
tl.to("#what", 2.5, {opacity: 1});
tl.to("#matters", 2.5, {opacity: 1});
});
