document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});


document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
        window.location.replace("trampa.html");
    }
});

(function() {
    var element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            throw new Error('Dev tools detected');
        }
    });

    setInterval(function() {
        console.log(element);
        console.clear();
    }, 1000);
})();
