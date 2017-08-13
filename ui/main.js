console.log('Loaded!');
var element = document.getElementById('main-text'
);
element.innerHTML = 'NEW VALUE';
var img = document.getElementById('madi');
img.onclick = function() {
    function moveRight() {
        var marginLeft = 0;
        marginLeft=marginleft + 10;
        img.style.marginLeft = marginLeft + 'px';
    }
    var interval = setInterval(moveRight,100);
}