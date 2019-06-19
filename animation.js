document.addEventListener('DOMContentLoaded', function() {

var tl = new TimelineMax({repeat: 30, delay: 3});

tl.to("#building", 2, {opacity: 1});
tl.to("#what", 2, {opacity: 1});
tl.to("#matters", 2, {opacity: 1});
});
