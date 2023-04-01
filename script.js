
let intro = document.querySelector("#intro");
let desktopNav = document.querySelector(".nav-1-container");

let screenWidth = document.querySelector(".main-container").offsetWidth;
let position = [3,9,16,24,30,50,40,60,70,80,90, 66, 90,65,45,86,35,45];
let i = 0
let prevBubbleLoc = 0;
let bubbleCreation = setInterval(() => {

    let bubble = document.createElement("span");
    bubble.classList.add("bubble");
    intro.append(bubble);
    let randomIndex =  Math.floor(Math.random()*(position.length))
    while(!(randomIndex >= prevBubbleLoc+5 || randomIndex < prevBubbleLoc-5) )
        randomIndex =  Math.floor(Math.random()*(position.length))
    bubble.style.left = `${position[randomIndex]}%`;
    i++;
    prevBubbleLoc = randomIndex
    if (i == 18)
        clearInterval(bubbleCreation);
    bubble.style.bottom = "-40px";
    }, 700);

let mediaQuery = window.matchMedia( "(max-width: 900px)" );
var lastScrollTop = 0;
let windownHeight = screen.height;
window.addEventListener("scroll", ()=>{
    if (!mediaQuery.matches) {
    document.getElementById("contactNav").href = "#contact";
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (lastScrollTop-15 > scrolled){
        desktopNav.style.transform = "translateY(-100%)";
    }
    else if(lastScrollTop< scrolled)
    desktopNav.style.transform = "translateY(0)";


    if(scrolled >= windownHeight/2){
        desktopNav.style.opacity = "1";    }
    else
    desktopNav.style.opacity = "0"
    lastScrollTop = scrolled <= 0 ? 0 : scrolled; // For Mobile or negative scrolling
    }
    else{
        document.getElementById("contactNav").href = "#intro";
    }

},false)


const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting)
            entry.target.classList.add('show');
    }
)})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(element => observer.observe(element))