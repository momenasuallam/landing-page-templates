function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})

var scroll = new SmoothScroll('#navbar-navlist a', {
    speed: 300,
    offset: 60
});
var spy = new Gumshoe('#navbar-navlist a', {
    navClass: 'active', 
    contentClass: 'active', 
    offset: 70
});

 $(function () {
   var filterList = {
     init: function () {
       $("#gallery").mixItUp({
         selectors: {
           target: ".gallery-item",
           filter: ".filter",
         },
         load: {
           filter: ".actives, .memory, .passive", 
         },
       });
     },
   };

   filterList.init();
 });

function fadeIn() {
    var fade = document.getElementById("error-msg");
    var opacity = 0;
    var intervalID = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.5
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 200);
}

var slider = tns({
    container: '.client-slider',
    loop: true,
    autoplay: true,
    nav: false,
    controlsPosition: 'bottom',
    controls: false,
    autoplayButtonOutput: false,
    controlsText: ["<i class='mdi mdi-arrow-left'></i>", "<i class='mdi mdi-arrow-right'></i>"],
    responsive: {
        1024: {
            gutter: 25,
            items: 2
        },
        768: {
            gutter: 20,
            items: 1
        }
    }
});

const SELECTOR = {
    DEMO: document.querySelector('.heading-title'),
}

const CLASSES = {
    ANIMATED: `is-animated`
}

window.onload = function () {
    if (SELECTOR.DEMO !== null) {

        SELECTOR.DEMO.classList.add(CLASSES.ANIMATED);
        const timer = setInterval(() => {
            SELECTOR.DEMO.classList.remove(CLASSES.ANIMATED);
            clearInterval(timer)
        }, 700)
    }
}


