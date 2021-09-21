"use strict";

/***************************************//* Start Function For Animate Header Website */
let page_x;
let page_y;
document.addEventListener("mousemove", (e) => {
    page_x = e.clientX;
    page_y = e.clientY;
});

function mouse_move() {
    let div_image = document.querySelector(".div_image_one");
    let div = document.createElement("div");
    div.setAttribute("class", "div_created_1");

    div.style.top = page_y + "px";
    div.style.left = page_x + "px";


    setInterval(() => {
        let sect_mouse_move = document.querySelector("#sect_mouse_move");
        if (document.documentElement.scrollTop > 600 || document.body.scrollTop > 600) {
            sect_mouse_move.style.opacity = "0";
        } else {
            sect_mouse_move.style.opacity = "1";
        }
    }, 10);


    let random = Math.floor(Math.random() * 10);

    if (random === 0) {
        div.style.backgroundColor = "#00d6d6";
    } else if (random === 1) {
        div.style.backgroundColor = "#239799";
    } else if (random === 2) {
        div.style.backgroundColor = "#009fd8";
    } else if (random === 3) {
        div.style.backgroundColor = "#38a5a7";
    } else if (random === 4) {
        div.style.backgroundColor = "#2e9ac6";
    }

    let min = -100;
    let max = 100;
    let random_dots = Math.floor(Math.random() * (max - min)) + min;

    setInterval(() => {
        div.setAttribute("class", "div_created_2");
        div.style.opacity = "0.6";
        div.style.transform = "translate(" + random_dots + "px," + random_dots + "px)";
        div.style.transition = "all 8s";
    }, 2000);


    setInterval(() => {
        div.remove();
    }, 10000);


    try {
        div_image.appendChild(div);
    } catch (err) {

    }
}

mouse_move();
/***************************************//* End Function For Animate Header Website */


/****************************************//* Start Function Timer */
function timer() {
    let time_1 = new Date().getTime();
    setInterval(() => {
        let time_2 = new Date().getTime();
        let distance = time_2 - time_1;
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        let h1 = document.querySelector("#h1_timer");
        h1.innerHTML = hours + ":" + minutes + ":" + seconds;
    }, 1000);
}

timer();
/****************************************//* End Function Timer */


/****************************************//* Start Function Email Copy */
function email_copy() {
    document.querySelectorAll(".h1_contact_us_3 , .u_s");
    document.execCommand("copy");
    let h2 = document.querySelector(".h1_copy");
    h2.style.display = "flex";
    h2.innerHTML = "Copied";
    h2.style.position = "fixed";
    h2.style.top = "60px";
    h2.style.zIndex = "3";
    setInterval(() => {
        h2.style.display = "none";
    }, 3000);
}

/****************************************//* End Function Email Copy */


/****************************************//* Start Let And Function Scroll And Animate */
function scroll_bar() {
    let header = document.querySelector("#header");
    let section_1 = document.querySelector("#main_sect");
    let section_2 = document.querySelector("#about_me");
    let section_3 = document.querySelector("#skills");
    let section_4 = document.querySelector("#contact_us");
    let section_5 = document.querySelector("#resume");
    let footer = document.querySelector(".footer");

    setInterval(() => {
        header.style.top = "0px";
        header.style.transition = "top 1s";
    }, 300);

    setInterval(() => {
        section_1.style.left = "0px";
        section_1.style.transition = "left 1s";
    }, 800);

    setInterval(() => {
        section_2.style.left = "0px";
        section_2.style.transition = "left 1s";
    }, 1200);

    setInterval(() => {
        section_3.style.left = "0px";
        section_3.style.transition = "left 1s";
    }, 1500);

    setInterval(() => {
        section_4.style.left = "0px";
        section_4.style.transition = "left 1s";
    }, 2000);

    setInterval(() => {
        section_5.style.left = "0px";
        section_5.style.transition = "left 1s";
    }, 2500);

    setInterval(() => {
        footer.style.opacity = "1";
        footer.style.transition = "opacity 2s";
    }, 3000);
}

/****************************************//* End Let And Function Scroll And Animate */


/* Start Function progress_bar */
function progress_bar() {
    let div_progress_sect_1_1 = document.querySelector(".div_progress_sect_1_1");
    let div_progress_sect_1_2 = document.querySelector(".div_progress_sect_1_2");
    let div_progress_sect_1_3 = document.querySelector(".div_progress_sect_1_3");
    let div_progress_sect_1_4 = document.querySelector(".div_progress_sect_1_4");
    let div_progress_sect_1_5 = document.querySelector(".div_progress_sect_1_5");
    let div_progress_sect_1_6 = document.querySelector(".div_progress_sect_1_6");
    let div_progress_sect_1_7 = document.querySelector(".div_progress_sect_1_7");
    let div_progress_sect_1_8 = document.querySelector(".div_progress_sect_1_8");
    let div_progress_sect_1_9 = document.querySelector(".div_progress_sect_1_9");
    let div_progress_sect_1_10 = document.querySelector(".div_progress_sect_1_10");
    let div_progress_sect_2_1 = document.querySelector(".div_progress_sect_2_1");
    let div_progress_sect_2_2 = document.querySelector(".div_progress_sect_2_2");
    let div_progress_sect_2_3 = document.querySelector(".div_progress_sect_2_3");
    let div_progress_sect_2_4 = document.querySelector(".div_progress_sect_2_4");
    let div_progress_sect_2_5 = document.querySelector(".div_progress_sect_2_5");
    let div_progress_sect_2_6 = document.querySelector(".div_progress_sect_2_6");
    let div_progress_sect_2_7 = document.querySelector(".div_progress_sect_2_7");
    let div_progress_sect_2_8 = document.querySelector(".div_progress_sect_2_8");
    let div_progress_sect_2_9 = document.querySelector(".div_progress_sect_2_9");
    let div_progress_sect_2_10 = document.querySelector(".div_progress_sect_2_10");


    div_progress_sect_1_1.style.width = "0%";
    div_progress_sect_1_2.style.width = "0%";
    div_progress_sect_1_3.style.width = "0%";
    div_progress_sect_1_4.style.width = "0%";
    div_progress_sect_1_5.style.width = "0%";
    div_progress_sect_1_6.style.width = "0%";
    div_progress_sect_1_7.style.width = "0%";
    div_progress_sect_1_8.style.width = "0%";
    div_progress_sect_1_9.style.width = "0%";
    div_progress_sect_1_10.style.width = "0%";
    div_progress_sect_2_1.style.width = "0%";
    div_progress_sect_2_2.style.width = "0%";
    div_progress_sect_2_3.style.width = "0%";
    div_progress_sect_2_4.style.width = "0%";
    div_progress_sect_2_5.style.width = "0%";
    div_progress_sect_2_6.style.width = "0%";
    div_progress_sect_2_7.style.width = "0%";
    div_progress_sect_2_8.style.width = "0%";
    div_progress_sect_2_9.style.width = "0%";
    div_progress_sect_2_10.style.width = "0%";
    if (document.documentElement.scrollTop >= 1300 || document.body.scrollTop >= 1300) {
        div_progress_sect_1_1.style.width = "95%";
        div_progress_sect_1_2.style.width = "90%";
        div_progress_sect_1_3.style.width = "85%";
        div_progress_sect_1_4.style.width = "90%";
        div_progress_sect_1_5.style.width = "70%";
        div_progress_sect_1_6.style.width = "80%";
        div_progress_sect_1_7.style.width = "60%";
        div_progress_sect_1_8.style.width = "50%";
        div_progress_sect_1_9.style.width = "80%";
        div_progress_sect_1_10.style.width = "70%";
        div_progress_sect_2_1.style.width = "90%";
        div_progress_sect_2_2.style.width = "70%";
        div_progress_sect_2_3.style.width = "80%";
        div_progress_sect_2_4.style.width = "95%";
        div_progress_sect_2_5.style.width = "80%";
        div_progress_sect_2_6.style.width = "70%";
        div_progress_sect_2_7.style.width = "95%";
        div_progress_sect_2_8.style.width = "90%";
        div_progress_sect_2_9.style.width = "80%";
        div_progress_sect_2_10.style.width = "60%";


        div_progress_sect_1_1.style.transition = "width 2s ease-in-out";
        div_progress_sect_1_2.style.transition = "width 2s ease-in-out";
        div_progress_sect_1_3.style.transition = "width 2s ease-in-out";
        div_progress_sect_1_4.style.transition = "width 2s ease-in-out";
        div_progress_sect_1_5.style.transition = "width 2s ease-in-out";
        div_progress_sect_1_6.style.transition = "width 2s ease-in-out";
        div_progress_sect_1_7.style.transition = "width 2s ease-in-out";
        div_progress_sect_1_8.style.transition = "width 2s ease-in-out";
        div_progress_sect_1_9.style.transition = "width 2s ease-in-out";
        div_progress_sect_1_10.style.transition = "width 2s ease-in-out";
        div_progress_sect_2_1.style.transition = "width 2s ease-in-out";
        div_progress_sect_2_2.style.transition = "width 2s ease-in-out";
        div_progress_sect_2_3.style.transition = "width 2s ease-in-out";
        div_progress_sect_2_4.style.transition = "width 2s ease-in-out";
        div_progress_sect_2_5.style.transition = "width 2s ease-in-out";
        div_progress_sect_2_6.style.transition = "width 2s ease-in-out";
        div_progress_sect_2_7.style.transition = "width 2s ease-in-out";
        div_progress_sect_2_8.style.transition = "width 2s ease-in-out";
        div_progress_sect_2_9.style.transition = "width 2s ease-in-out";
        div_progress_sect_2_10.style.transition = "width 2s ease-in-out";
    }
}

/* End Function progress_bar */


/****************************************//* Start Function Theme */
function theme() {
    let body = document.querySelector("#body");
    let input_checkbox = document.querySelector("#input_checkbox_2:checked");

    if (input_checkbox) {
        body.style.backgroundColor = "#252525";
    } else {
        body.style.backgroundColor = "white";
    }
}

/****************************************//* End Function Theme */


/****************************************//* Start Function Animated Mouse Move */
function mouse_move_circle() {
    let section_mouse_move = document.querySelector("#section_mouse_move");
    let span = document.createElement("span");
    span.style.padding = "10px 10px";
    span.style.borderWidth = "2px";
    span.style.borderStyle = "solid";
    span.style.borderRadius = "50%";
    span.style.opacity = "1";
    span.style.position = "fixed";
    span.style.zIndex = "3";

    setInterval(() => {
        span.style.opacity = "0";
    }, 600);

    let random = Math.floor(Math.random() * 60);

    if (random === 0) {
        span.style.borderColor = "aqua";
    } else if (random === 1) {
        span.style.borderColor = "lightgreen";
    } else if (random === 2) {
        span.style.borderColor = "orange";
    } else if (random === 3) {
        span.style.borderColor = "cyan";
    } else if (random === 4) {
        span.style.borderColor = "bisque";
    } else if (random === 5) {
        span.style.borderColor = "lightpink";
    } else if (random === 6) {
        span.style.borderColor = "gold";
    } else if (random === 7) {
        span.style.borderColor = "peru";
    } else if (random === 8) {
        span.style.borderColor = "tomato";
    } else if (random === 9) {
        span.style.borderColor = "dodgerblue";
    } else if (random === 10) {
        span.style.borderColor = "mediumorchid";
    } else if (random === 11) {
        span.style.borderColor = "saddlebrown";
    } else if (random === 12) {
        span.style.borderColor = "royalblue";
    } else if (random === 13) {
        span.style.borderColor = "antiquewhite";
    } else if (random === 14) {
        span.style.borderColor = "aquamarine";
    } else if (random === 15) {
        span.style.borderColor = "burlywood";
    } else if (random === 16) {
        span.style.borderColor = "red";
    } else if (random === 17) {
        span.style.borderColor = "green";
    } else if (random === 18) {
        span.style.borderColor = "blue";
    } else if (random === 19) {
        span.style.borderColor = "lightblue";
    } else if (random === 20) {
        span.style.borderColor = "lightcoral";
    } else if (random === 21) {
        span.style.borderColor = "blueviolet";
    } else if (random === 22) {
        span.style.borderColor = "cornsilk";
    } else if (random === 23) {
        span.style.borderColor = "darkgray";
    } else if (random === 24) {
        span.style.borderColor = "crimson";
    } else if (random === 25) {
        span.style.borderColor = "darkseagreen";
    } else if (random === 26) {
        span.style.borderColor = "darkkhaki";
    } else if (random === 27) {
        span.style.borderColor = "lightskyblue";
    } else if (random === 28) {
        span.style.borderColor = "skyblue";
    } else if (random === 29) {
        span.style.borderColor = "indianred";
    } else if (random === 30) {
        span.style.borderColor = "limegreen";
    } else if (random === 31) {
        span.style.borderColor = "navajowhite";
    } else if (random === 32) {
        span.style.borderColor = "plum";
    } else if (random === 33) {
        span.style.borderColor = "tan";
    } else if (random === 34) {
        span.style.borderColor = "powderblue";
    } else if (random === 35) {
        span.style.borderColor = "yellow";
    } else if (random === 36) {
        span.style.borderColor = "papayawhip";
    } else if (random === 37) {
        span.style.borderColor = "sandybrown";
    } else if (random === 38) {
        span.style.borderColor = "olivedrab";
    } else if (random === 39) {
        span.style.borderColor = "darksalmon";
    } else if (random === 40) {
        span.style.borderColor = "rosybrown";
    } else if (random === 41) {
        span.style.borderColor = "khaki";
    } else if (random === 42) {
        span.style.borderColor = "dimgray";
    } else if (random === 43) {
        span.style.borderColor = "mediumvioletred";
    } else if (random === 44) {
        span.style.borderColor = "lightyellow";
    } else if (random === 45) {
        span.style.borderColor = "magenta";
    } else if (random === 46) {
        span.style.borderColor = "goldenrod";
    } else if (random === 47) {
        span.style.borderColor = "mediumpurple";
    } else if (random === 48) {
        span.style.borderColor = "lightgoldenrodyellow";
    } else if (random === 49) {
        span.style.borderColor = "greenyellow";
    } else if (random === 50) {
        span.style.borderColor = "salmon";
    } else if (random === 51) {
        span.style.borderColor = "snow";
    } else if (random === 52) {
        span.style.borderColor = "lightslategray";
    } else if (random === 53) {
        span.style.borderColor = "ivory";
    } else if (random === 54) {
        span.style.borderColor = "wheat";
    } else if (random === 55) {
        span.style.borderColor = "teal";
    } else if (random === 56) {
        span.style.borderColor = "sienna";
    } else if (random === 57) {
        span.style.borderColor = "darkgoldenrod";
    } else if (random === 58) {
        span.style.borderColor = "violet";
    } else if (random === 59) {
        span.style.borderColor = "darkgrey";
    } else if (random === 60) {
        span.style.borderColor = "deeppink";
    }

    span.style.transition = "opacity 1s";

    span.style.top = page_y + "px";
    span.style.left = page_x + "px";
    section_mouse_move.appendChild(span);
    setInterval(() => {
        span.remove();
    }, 600);
}

/****************************************//* End Function Animated Mouse Move */


/****************************************//* Start Animate Text */
setTimeout(() => {
    let h1 = document.querySelector(".h1_2");
    let h2 = document.querySelector(".h2_1");
    let div_text_animate = document.createElement("div");
    div_text_animate.setAttribute("class", "div_text_animate");


    let setint_1 = setInterval(() => {
        div_text_animate.innerHTML = "Amir Mohammad Koshkian";
        h1.appendChild(div_text_animate);
        clearInterval(setint_1);
    }, 3000);


    let setint_2 = setInterval(() => {
        h2.innerHTML = "من";
        div_text_animate.innerHTML = "Full Stack Developer";
        h1.appendChild(div_text_animate);
        clearInterval(setint_2);
    }, 9000);


    let setint_3 = setInterval(() => {
        h2.innerHTML = "سلام من";
        h1.innerHTML = "Amir Mohammad Koshkian";
        clearInterval(setint_3);
    }, 15000);
}, 100)
/****************************************//* End Animate Text */