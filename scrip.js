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
