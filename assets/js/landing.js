<<<<<<< HEAD

window.addEventListener('resize', () => {
    console.log('device size:', window.innerWidth);
if (window.innerWidth < 375) {
    document.querySelector('.navbar').style.display = 'none';
    console.log(display);
} else {
    document.querySelector('.navbar').style.display = 'block';
    console.log(display);
}
})

if (screen.width > 500) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'helper.js';
    head.appendChild(script);
}



=======
// potentially add a button that creates smiley face confetti when clicked.
>>>>>>> b8af43a24c435b3c789d0d9a8b4e99a464570056
