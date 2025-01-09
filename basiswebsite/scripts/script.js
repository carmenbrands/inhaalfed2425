/* Hamburger menu*/
var mainMenu = document.querySelector('.mainMenu');
var closeMenu = document.querySelector('.closeMenu');
var openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%';
}


/* Voor het laten bekijken wanneer een section op de pagina is*/
var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

var hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



/* Voor het biepen van de auto*/
function playSound(bus) {
    document.getElementById(bus).play();
  };