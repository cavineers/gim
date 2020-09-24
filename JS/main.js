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

function openActivity2() {
    document.getElementById('allCont').style.display = 'none';
    document.getElementById('activity2').style.display = 'block';
}

function closeEverything() {
    document.getElementById('activity1').style.display = 'none';
    document.getElementById('activity2').style.display = 'none';
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
            contentSpan.innerHTML = "Hi, welcome to the first lesson in our Gears in Motion Program! We are really excited to be sharing our GIM program with you today. GIM stands for Gears In Motion and will teach us about gears and how to turn together like gears in a system.<br><br>In this first activity you will be learning the basics of GIM and you will learn how gears work together to form a robot!<br><br><b>Lets Start by clicking the next arrow on the slide show and this page will update automatically giving you more information!<b>";
            break;
        case 2:
            contentSpan.innerHTML = "Here is a brief outline of the lesson you will taking today with us.<br><br>Click the next arrow again when you are ready to get started.";
            break;
        case 3:
            contentSpan.innerHTML = "What are gears?<br><br> Well, a gear is a wheel that has teeth that interlock together. Gears are typically used to move energy down a gear system, thus completing a certain task. A gear system is created when several gears are interlocked with one another.";
            break;
        case 4:
            contentSpan.innerHTML = "Gears turn together to complete all kinds of complex tasks!<br><br>Some examples of everyday items that use gears are bicycles, watches, locks, and so much more.<br><br><b>Think: How does this apply to all of us?</b><br>Be ready to answer on the next slide.";
            break;
        case 5:
            contentSpan.innerHTML = "When you help someone, it makes them feel good! In turn that prompts them to want to help someone else. Similarly to gears, helping others is a chain reaction of people working together to achieve something great!<br><br><b>That is it! You have completed activity 1. Head to activity 2 where you will need to complete a puzzle to build your virtual GIM!</b>";
            break;
    }
}

// TEST
function printMousePos(event) {
    console.log("clientX: " + event.clientX +
        " - clientY: " + event.clientY);
}

document.addEventListener("click", printMousePos);

// Puzzle Section
let puzzle1Objs = 0;
let arm1 = false;
let arm2 = false;
let leg1 = false;
let leg2 = false;
let body = false;
let head = false;

function checkIfDonePuzzle1() {
    if (puzzle1Objs == 6) { //Update with number of puzzle pieces!!
        document.getElementById('wrapper').style.background = 'lightgreen';
        document.getElementsByClassName('arm1')[0].classList.add('noBorder');
        document.getElementsByClassName('arm2')[0].classList.add('noBorder');
        document.getElementsByClassName('leg1')[0].classList.add('noBorder');
        document.getElementsByClassName('leg2')[0].classList.add('noBorder');
        document.getElementsByClassName('head')[0].classList.add('noBorder');
        document.getElementsByClassName('body')[0].classList.add('noBorder');
        //Animations
        //Arm1
        document.getElementsByClassName('arm1')[0].style.position = 'relative'
        document.getElementsByClassName('arm1')[0].style.zIndex = 10;
        document.getElementsByClassName('arm1')[0].animate([{
                transform: 'translate(0, 0)'
            },
            {
                transform: 'translate(120%, 5%)',
                height: '200px'
            }
        ], {
            duration: 1000,
            fill: 'forwards'
        });
        //Arm2
        document.getElementsByClassName('arm2')[0].style.position = 'relative'
        document.getElementsByClassName('arm2')[0].style.zIndex = 10;
        document.getElementsByClassName('arm2')[0].animate([{
                transform: 'translate(0, 0)'
            },
            {
                transform: 'translate(-120%, 5%)',
                height: '200px'
            }
        ], {
            duration: 1000,
            fill: 'forwards'
        });
        //Leg1
        document.getElementsByClassName('leg1')[0].style.position = 'relative'
        document.getElementsByClassName('leg1')[0].style.zIndex = 10;
        document.getElementsByClassName('leg1')[0].animate([{
                transform: 'translate(0, 0)'
            },
            {
                transform: 'translate(-4%, -45%)',
                height: '200px'
            }
        ], {
            duration: 1000,
            fill: 'forwards'
        });
        //Leg 2
        document.getElementsByClassName('leg2')[0].style.position = 'relative'
        document.getElementsByClassName('leg2')[0].style.zIndex = 10;
        document.getElementsByClassName('leg2')[0].animate([{
                transform: 'translate(0, 0)'
            },
            {
                transform: 'translate(4%, -45%)',
                height: '200px'
            }
        ], {
            duration: 1000,
            fill: 'forwards'
        });
        document.getElementById('completedText').style.display = 'block';
    }
}

window.onclick = function(e) {
    if (document.getElementById('completeMsg').style.display === 'block') {
        document.getElementById('completeMsg').style.display = 'none';
        window.location.reload();
    } else {
        document.getElementById('completeMsg').style.display = 'none';
    }
};

function closeModal() {
    document.getElementById('completeMsg').style.display = 'none';
    window.location.reload();
}

$(".photo").draggable();
$(".photo").draggable({ revert: "invalid" });

$("target.arm1").droppable({
    accept: "#arm1",
    drop: function(event, ui) {
        ui.draggable
            .css("left", "auto")
            .css("top", "auto")
            .css("width", "100%")
            .css("height", "100%")
            .css("background-repeat", "no-repeat")
            .css("background-size", "100% 100%")
            .appendTo('.arm1');
        if (arm1 == false) {
            puzzle1Objs++;
            checkIfDonePuzzle1();
            arm1 = true;
        }
    }
});

$("target.arm2").droppable({
    accept: "#arm2",
    drop: function(event, ui) {
        ui.draggable
            .css("left", "auto")
            .css("top", "auto")
            .css("width", "100%")
            .css("height", "100%")
            .css("background-repeat", "no-repeat")
            .css("background-size", "100% 100%")
            .appendTo('.arm2');
        if (arm2 == false) {
            puzzle1Objs++;
            checkIfDonePuzzle1();
            arm2 = true;
        }
    }
});

$("target.head").droppable({
    accept: "#head",
    drop: function(event, ui) {
        ui.draggable
            .css("left", "auto")
            .css("top", "auto")
            .css("width", "100%")
            .css("height", "100%")
            .css("background-repeat", "no-repeat")
            .css("background-size", "100% 100%")
            .appendTo('.head');
        if (head == false) {
            puzzle1Objs++;
            checkIfDonePuzzle1();
            head = true;
        }
    }
});

$("target.body").droppable({
    accept: "#body",
    drop: function(event, ui) {
        ui.draggable
            .css("left", "auto")
            .css("top", "auto")
            .css("width", "100%")
            .css("height", "100%")
            .css("background-repeat", "no-repeat")
            .css("background-size", "100% 100%")
            .appendTo('.body');
        if (body == false) {
            puzzle1Objs++;
            checkIfDonePuzzle1();
            body = true;
        }
    }
});

$("target.leg1").droppable({
    accept: "#leg1",
    drop: function(event, ui) {
        ui.draggable
            .css("left", "auto")
            .css("top", "auto")
            .css("width", "100%")
            .css("height", "100%")
            .css("background-repeat", "no-repeat")
            .css("background-size", "100% 100%")
            .appendTo('.leg1');
        if (leg1 == false) {
            puzzle1Objs++;
            checkIfDonePuzzle1();
            leg1 = true;
        }
    }
});

$("target.leg2").droppable({
    accept: "#leg2",
    drop: function(event, ui) {
        ui.draggable
            .css("left", "auto")
            .css("top", "auto")
            .css("width", "100%")
            .css("height", "100%")
            .css("background-repeat", "no-repeat")
            .css("background-size", "100% 100%")
            .appendTo('.leg2');
        if (leg2 == false) {
            puzzle1Objs++;
            checkIfDonePuzzle1();
            leg2 = true;
        }
    }
});