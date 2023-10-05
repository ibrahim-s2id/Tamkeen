import translation from "./translation.js";

if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'en')
}

const arabiSelector = document.querySelector("#arabi");
arabiSelector.addEventListener("click", () => {
    localStorage.setItem("lang", "ar");
    setLanguage("ar");
    localStorage.setItem("sliderDIR", false);
    $(".owlll-slide").css("direction", "rtl");
    $(".gallery-slider").css("direction", "ltr");
    $(".subscribe").css("flex-direction", "row-reverse");
    $(".clip").css("transform", "rotate(180deg)");
    $(".services>div:nth-child(2)>i").css("transform", "rotateY(0deg)");
    $(".services>div:nth-child(2)>i").addClass("rotatemin");
    $(".services>div:nth-child(2)>i").removeClass("rotateadd");
})

const englSelector = document.querySelector("#engl");
englSelector.addEventListener("click", () => {
    localStorage.setItem("lang", "en");
    setLanguage("en");
    localStorage.setItem("sliderDIR", true);
    $(".gallery-slider").css("direction", "ltr");
    $(".owlll-slide").css("direction", "ltr");
    $(".subscribe").css("flex-direction", "row");
    $(".clip").css("transform", "rotate(0deg)");
    $(".services>div:nth-child(2)>i").css("transform", "rotateY(180deg)");
    $(".services>div:nth-child(2)>i").addClass("rotateadd");
    $(".services>div:nth-child(2)>i").removeClass("rotatemin");
})

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(localStorage.getItem("lang"));
    if (localStorage.getItem("lang") === "ar") {
        $(".gallery-slider").css("direction", "ltr");
        $(".gallery-thumbs").css("direction", "ltr");
        $(".select-btn").find(".lan").html("العربية");
        $(".first-row").find("input").attr("placeholder", "ما الخدمة التي تريد البحث عنها؟");
        $(".subscribe").css("flex-direction", "row-reverse");
        $(".subscribe").find("input").attr("placeholder", "البريد الإلكتروني");
        $(".clip").css("transform", "rotate(180deg)");
        $(".services>div:nth-child(2)>i").css("transform", "rotateY(0deg)");
        $(".services>div:nth-child(2)>i").addClass("rotatemin");
        $(".services>div:nth-child(2)>i").removeClass("rotateadd");
    }
    else {
        $(".select-btn").find(".lan").html("English");
        $(".owlll-slide").css("direction", "ltr");
        $(".first-row").find("input").attr("placeholder", "What service are you looking for?");
        $(".subscribe").find("input").attr("placeholder", "Email");
        $(".clip").css("transform", "rotate(0deg)");
        $(".services>div:nth-child(2)>i").css("transform", "rotateY(180deg)");
        $(".services>div:nth-child(2)>i").addClass("rotateadd");
        $(".services>div:nth-child(2)>i").removeClass("rotatemin");
    }
});

$(document).ready(function () {
    if (!localStorage.getItem('sliderDIR')) {
        localStorage.setItem('sliderDIR', 'true')
    }
    $("#ahmad").owlCarousel({
        nav: true,
        items: 1,
        dots: false,
        loop: true,
        rtl: localStorage.getItem("sliderDIR"),
    });
});


// change language
const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-i18n");
        element.textContent = translation[language][translationKey];
    });
    document.dir = language === "ar" ? "rtl" : "ltr";
    if (language === "ar") {
        document.body.style.fontFamily = "Cairo";
        $(".first-row").find("input").attr("placeholder", "ما الخدمة التي تريد البحث عنها؟");
        $(".subscribe").find("input").attr("placeholder", "البريد الإلكتروني");

    }
    else {
        document.body.style.fontFamily = "Raleway";
        $(".first-row").find("input").attr("placeholder", "What service are you looking for?");
        $(".subscribe").find("input").attr("placeholder", "Email");
    }
}



import confetti from "https://esm.run/canvas-confetti@1";

$(".cnnn").click(function () {
    confetti({
        particleCount: 150,
        spread: 60
    });
})