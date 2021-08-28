
    // Navigation 

    var menu = document.querySelector('.barra_nav');
    var menuBtn = document.querySelector(".barra_logo button");

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('opened');
    });
    var menuLink = document.querySelectorAll(".nav li");
    menuLink.forEach(menuLink => menuLink.addEventListener('click', () => {
        menu.classList.toggle('opened');
    }));


    // Theme Switcher
   const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

   function switchTheme(e) {
       if (e.target.checked) {
           document.documentElement.setAttribute('data-theme', 'dark');
       } else {
           document.documentElement.setAttribute('data-theme', 'light');
       }
   }
   toggleSwitch.addEventListener('change', switchTheme, false);


     
   // On Scroll Navbar
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        var barraFixed = document.getElementById("barra");
        if (prevScrollpos > currentScrollPos) {
            barraFixed.style.top = "0";

        } else {
            barraFixed.style.top = "-14vh";

        }
        prevScrollpos = currentScrollPos;
}
   

