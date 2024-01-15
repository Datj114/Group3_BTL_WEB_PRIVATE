const menuBar = document.querySelector('.menu>i');
const close = document.querySelector('.menu ul i');
menuBar.addEventListener('click', function () {
    document.querySelector('.menu ul').style.transform = 'translateX(0)';
    document.querySelector('.menu ul').style.opacity = '1';
});
close.addEventListener('click', function () {
    document.querySelector('.menu ul').style.transform = ' translateX(-270px)';
    document.querySelector('.menu ul').style.opacity = '0';
});
// When the user scrolls the page, execute myFunction
window.addEventListener('scroll', function () {
    myFunction();
});

// Get the header
var header = document.querySelector('nav');

// Get the offset position of the navbar
// var sticky = header.offsetTop;
// console.log(sticky);
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    var a = this.pageYOffset;
    console.log(a);

    if (a > 110) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}
