console.warn('%cDO NOT PASTE ANYTHING HERE! Doing so can cause hackers to get access to your account and data! ', 'background: #222; color: #bada55; font-size: 20px;')

function openSideMenu() {
    document.getElementById("sideBar").style.zIndex = "9000";
    document.getElementById("sideBar").style.display = "block";
}

function closeSlider() {
    document.getElementById("sideBar").style.zIndex = "-1";
    document.getElementById("sideBar").style.display = "none";
}

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};

function openActivity1() {
    document.getElementById('allCont').style.display = 'none';
    document.getElementById('activity1').style.display = 'block';
}

function closeEverything() {
    document.getElementById('activity1').style.display = 'none';
    document.getElementById('allCont').style.display = 'block';
}

// Slide Show Functions

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    updateInstructions(n);
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function updateInstructions(index) {
    let contentSpan = document.getElementById('directions');
    switch (index) {
        case 1:
            console.log('hi')
            contentSpan.innerHTML = "Hi, welcome to the first lesson in our Gears in Motion Program! We are really excited to be sharing our GIM program with you today. GIM stands for Gears In Motion and will teach us about gears and how to turn together like gears in a system.<br><br>In this first activity you will be learning the basics of GIM and you will learn how gears work together to form a robot!<br><br><b>Lets Start by clicking the next arrow on the slide show and this page will update automatically giving you more information!<b>";
            break;
        case 2:
            contentSpan.innerHTML = "Here is a brief outline of the lesson you will taking today with us.<br><br>Click the next arrow again when you are ready to get started.";
            break;
        case 3:
            contentSpan.innerHTML = "What are gears?<br><br> Well, a gear is a wheel that has teeth that interlock together. Gears are typically used to move energy down a gear system, thus completing a certain task. A gear system is created when several gears are interlocked with one another.";
            break;
    }
}

// TEST
function printMousePos(event) {
    console.log("clientX: " + event.clientX +
        " - clientY: " + event.clientY);
}

document.addEventListener("click", printMousePos);