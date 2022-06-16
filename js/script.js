var swiper = new Swiper(".mySwiper", {});
$(".alert-holder").fadeOut();


$(".home").click(function () {
    $(".cart").removeClass("active-cart", 'fast');
    $(".profile").removeClass("active", 'fast');
    $(".search").removeClass("active", 'fast');
    $(".home").addClass("active", 'fast');
    $(".homepage").fadeIn('fast');
    $(".checkoutpage").fadeOut('fast');
    $(".feedpage").fadeOut('fast');
    $(".profilepage").fadeOut('fast');
});


$(".cart").click(function () {
    $(".cart").addClass("active-cart", 'fast');
    $(".profile").removeClass("active", 'fast');
    $(".search").removeClass("active", 'fast');
    $(".home").removeClass("active", 'fast');
    $(".homepage").fadeOut('fast');
    $(".checkoutpage").fadeIn('fast');
    $(".feedpage").fadeOut('fast');
    $(".profilepage").fadeOut('fast');
});


$(".search").click(function () {
    $(".cart").removeClass("active-cart", 'fast');
    $(".profile").removeClass("active", 'fast');
    $(".search").addClass("active", 'fast');
    $(".home").removeClass("active", 'fast');
    $(".homepage").fadeOut('fast');
    $(".checkoutpage").fadeOut('fast');
    $(".feedpage").fadeIn('fast');
    $(".profilepage").fadeOut('fast');
});


$(".profile").click(function () {
    $(".cart").removeClass("active-cart", 'fast');
    $(".profile").addClass("active", 'fast');
    $(".search").removeClass("active", 'fast');
    $(".home").removeClass("active", 'fast');
    $(".homepage").fadeOut('fast');
    $(".checkoutpage").fadeOut('fast');
    $(".feedpage").fadeOut('fast');
    $(".profilepage").fadeIn('fast');
});


$(".all-cart").click(function () {
    $(".flannel").fadeIn('slow');
    $(".cargo").fadeIn('slow');
    $(".jacket").fadeIn('slow');
});


$(".shirt-cart").click(function () {
    $(".flannel").fadeIn('slow');
    $(".cargo").fadeOut('slow');
    $(".jacket").fadeOut('slow');
});

$(".pant-cart").click(function () {
    $(".flannel").fadeOut('slow');
    $(".cargo").fadeIn('slow');
    $(".jacket").fadeOut('slow');
});

$(".jacket-cart").click(function () {
    $(".flannel").fadeOut('slow');
    $(".cargo").fadeOut('slow');
    $(".jacket").fadeIn('slow');
});


$("#home-card-img-1").click(function () {
    $("#product-1").addClass("active-home-card-inspect", 'slow');
});


$("#remove-home-card-img-1").click(function () {
    $("#product-1").removeClass("active-home-card-inspect", 'slow');
});

$("#home-card-img-2").click(function () {
    $("#product-2").addClass("active-home-card-inspect", 'slow');
});


$("#remove-home-card-img-2").click(function () {
    $("#product-2").removeClass("active-home-card-inspect", 'slow');
});


$("#home-card-img-3").click(function () {
    $("#product-3").addClass("active-home-card-inspect", 'slow');
});


$("#remove-home-card-img-3").click(function () {
    $("#product-3").removeClass("active-home-card-inspect", 'slow');
});

$("#home-card-img-4").click(function () {
    $("#product-4").addClass("active-home-card-inspect", 'slow');
});


$("#remove-home-card-img-4").click(function () {
    $("#product-4").removeClass("active-home-card-inspect", 'slow');
});

$("#home-card-img-5").click(function () {
    $("#product-5").addClass("active-home-card-inspect", 'slow');
});


$("#remove-home-card-img-5").click(function () {
    $("#product-5").removeClass("active-home-card-inspect", 'slow');
});

$("#home-card-img-6").click(function () {
    $("#product-6").addClass("active-home-card-inspect", 'slow');
});


$("#remove-home-card-img-6").click(function () {
    $("#product-6").removeClass("active-home-card-inspect", 'slow');
});

$("#home-card-img-7").click(function () {
    $("#product-7").addClass("active-home-card-inspect", 'slow');
});


$("#remove-home-card-img-7").click(function () {
    $("#product-7").removeClass("active-home-card-inspect", 'slow');
});

$("#home-card-img-8").click(function () {
    $("#product-8").addClass("active-home-card-inspect", 'slow');
});


$("#remove-home-card-img-8").click(function () {
    $("#product-8").removeClass("active-home-card-inspect", 'slow');
});

$("#home-card-img-9").click(function () {
    $("#product-9").addClass("active-home-card-inspect", 'slow');
});


$("#remove-home-card-img-9").click(function () {
    $("#product-9").removeClass("active-home-card-inspect", 'slow');
});

$("#home-card-img-10").click(function () {
    $("#product-10").addClass("active-home-card-inspect", 'slow');
});


$("#remove-home-card-img-10").click(function () {
    $("#product-10").removeClass("active-home-card-inspect", 'slow');
});

$("#home-card-img-11").click(function () {
    $("#product-11").addClass("active-home-card-inspect", 'slow');
});


$("#remove-home-card-img-11").click(function () {
    $("#product-11").removeClass("active-home-card-inspect", 'slow');
});


$("#home-card-img-12").click(function () {
    $("#product-12").addClass("active-home-card-inspect", 'slow');
});


$("#remove-home-card-img-12").click(function () {
    $("#product-12").removeClass("active-home-card-inspect", 'slow');
});

$("#home-card-img-12").click(function () {
    $("#product-12").addClass("active-home-card-inspect", 'slow');
});


$("#remove-home-card-img-13").click(function () {
    $("#product-13").removeClass("active-home-card-inspect", 'slow');
});

$("#home-card-img-14").click(function () {
    $("#product-14").addClass("active-home-card-inspect", 'slow');
});


$("#remove-home-card-img-14").click(function () {
    $("#product-14").removeClass("active-home-card-inspect", 'slow');
});



$("#inspect-cart-product-1").click(function () {
    $("#product-7").addClass("active-home-card-inspect", 'slow');
    $(".cart").removeClass("active-cart", 'slow');
    $(".profile").removeClass("active", 'slow');
    $(".search").removeClass("active", 'slow');
    $(".home").addClass("active", 'slow');
    $(".homepage").fadeIn('slow');
    $(".checkoutpage").fadeOut('slow');
    $(".searchpage").fadeOut('slow');
    $(".profilepage").fadeOut('slow');
});

$("#product-1-remove-cart").click(function () {
    $("#cart-product-1").fadeOut('slow');
});


$("#product-1-spec-1").click(function () {
    $("#product-1-spec-1").fadeOut('slow');
});

$("#product-1-remove-spec-2").click(function () {
    $("#product-1-spec-2").fadeOut('slow');
});

$("#inspect-cart-product-2").click(function () {
    $("#product-11").toggleClass("active-home-card-inspect", 'slow');
    $(".cart").removeClass("active-cart", 'slow');
    $(".profile").removeClass("active", 'slow');
    $(".search").removeClass("active", 'slow');
    $(".home").addClass("active", 'slow');
    $(".homepage").fadeIn('slow');
    $(".checkoutpage").fadeOut('slow');
    $(".searchpage").fadeOut('slow');
    $(".profilepage").fadeOut('slow');
});

$("#product-2-remove-cart").click(function () {
    $("#cart-product-2").fadeOut('slow');
});


$("#product-2-spec-1").click(function () {
    $("#product-2-spec-1").fadeOut('slow');
});
$("#product-2-spec-2").click(function () {
    $("#product-2-spec-2").fadeOut('slow');
});


$("#inspect-cart-product-3").click(function () {
    $("#product-12").toggleClass("active-home-card-inspect", 'slow');
    $(".cart").removeClass("active-cart", 'slow');
    $(".profile").removeClass("active", 'slow');
    $(".search").removeClass("active", 'slow');
    $(".home").addClass("active", 'slow');
    $(".homepage").fadeIn('slow');
    $(".checkoutpage").fadeOut('slow');
    $(".searchpage").fadeOut('slow');
    $(".profilepage").fadeOut('slow');
});

$("#product-3-remove-cart").click(function () {
    $("#cart-product-3").fadeOut('slow');
});


$(".add-to-cart-success").click(function () {
    $(".alert-holder").fadeIn('fast');
    $(".success").fadeIn('fast');
    $(".fail").fadeOut('fast');
    $(".info").fadeOut('fast');
});

$(".add-to-cart-success").click(function () {
    setTimeout(function () {
        $(".alert-holder").fadeOut();
    }, 2000);
});

$(".add-to-cart-fail").click(function () {
    $(".alert-holder").fadeIn('fast');
    $(".fail").fadeIn('fast');
    $(".success").fadeOut('fast');
    $(".info").fadeOut('fast');
});

$(".add-to-cart-fail").click(function () {
    setTimeout(function () {
        $(".alert-holder").fadeOut();
    }, 2000);
});

$(".add-to-cart-info").click(function () {
    $(".alert-holder").fadeIn('fast');
    $(".success").fadeOut('fast');
    $(".fail").fadeOut('fast');
    $(".info").fadeIn('fast');
});

$(".add-to-cart-info").click(function () {
    setTimeout(function () {
        $(".alert-holder").fadeOut();

    }, 2000);
});


$(".loved-div-holder").fadeOut();


$("#style-img-1").click(function(){
    $("#like-1-icon").toggleClass("red-btn-toggle", 'slow');
    $("#loved-div-holder-1").fadeIn();
  });
$("#like-1-icon").click(function () {
    $("#like-1-icon").toggleClass("red-btn-toggle", 'slow');
});
$("#style-img-1").click(function () {
    setTimeout(function () {
        $("#loved-div-holder-1").fadeOut();
    }, 100);
});



$("#style-img-2").click(function(){
    $("#like-2-icon").toggleClass("red-btn-toggle", 'slow');
    $("#loved-div-holder-2").fadeIn();
  });
$("#like-2-icon").click(function () {
    $("#like-2-icon").toggleClass("red-btn-toggle", 'slow');
});
$("#style-img-2").click(function () {
    setTimeout(function () {
        $("#loved-div-holder-2").fadeOut();
    }, 100);
});




$("#style-img-3").click(function(){
    $("#like-3-icon").toggleClass("red-btn-toggle", 'slow');
    $("#loved-div-holder-3").fadeIn();
  });
$("#like-3-icon").click(function () {
    $("#like-3-icon").toggleClass("red-btn-toggle", 'slow');
});
$("#style-img-3").click(function () {
    setTimeout(function () {
        $("#loved-div-holder-3").fadeOut();
    }, 100);
});


$("#style-img-4").click(function(){
    $("#like-4-icon").toggleClass("red-btn-toggle", 'slow');
    $("#loved-div-holder-4").fadeIn();
  });
$("#like-4-icon").click(function () {
    $("#like-4-icon").toggleClass("red-btn-toggle", 'slow');
});
$("#style-img-4").click(function () {
    setTimeout(function () {
        $("#loved-div-holder-4").fadeOut();
    }, 100);
});


$("#style-img-5").click(function(){
    $("#like-5-icon").toggleClass("red-btn-toggle", 'slow');
    $("#loved-div-holder-5").fadeIn();
  });
$("#like-5-icon").click(function () {
    $("#like-5-icon").toggleClass("red-btn-toggle", 'slow');
});
$("#style-img-5").click(function () {
    setTimeout(function () {
        $("#loved-div-holder-5").fadeOut();
    }, 100);
});


$("#style-img-6").click(function(){
    $("#like-6-icon").toggleClass("red-btn-toggle", 'slow');
    $("#loved-div-holder-6").fadeIn();
  });
$("#like-6-icon").click(function () {
    $("#like-6-icon").toggleClass("red-btn-toggle", 'slow');
});
$("#style-img-6").click(function () {
    setTimeout(function () {
        $("#loved-div-holder-6").fadeOut();
    }, 100);
});


const shareBtn1 = document.getElementById("share-1");
shareBtn1.addEventListener('click', event => {
    if(navigator.share){
        navigator.share({
            text:"check out Fashion by John Doe",
            url:'app.html'
        })
        .catch((err) =>console.error(err));
    }
    else{
        alert("Unable to share");
    }
});


const shareBtn2 = document.getElementById("share-2");
shareBtn2.addEventListener('click', event => {
    if(navigator.share){
        navigator.share({
            text:"check out Fashion by John Doe",
            url:'app.html'
        })
        .catch((err) =>console.error(err));
    }
    else{
        alert("Unable to share");
    }
});




const shareBtn3 = document.getElementById("share-3");
shareBtn3.addEventListener('click', event => {
    if(navigator.share){
        navigator.share({
            text:"check out Fashion by John Doe",
            url:'app.html'
        })
        .catch((err) =>console.error(err));
    }
    else{
        alert("Unable to share");
    }
});


const shareBtn4 = document.getElementById("share-4");
shareBtn4.addEventListener('click', event => {
    if(navigator.share){
        navigator.share({
            text:"check out Fashion by John Doe",
            url:'app.html'
        })
        .catch((err) =>console.error(err));
    }
    else{
        alert("Unable to share");
    }
});


const shareBtn5 = document.getElementById("share-5");
shareBtn5.addEventListener('click', event => {
    if(navigator.share){
        navigator.share({
            text:"check out Fashion by John Doe",
            url:'app.html'
        })
        .catch((err) =>console.error(err));
    }
    else{
        alert("Unable to share");
    }
});



const shareBtn6 = document.getElementById("share-6");
shareBtn6.addEventListener('click', event => {
    if(navigator.share){
        navigator.share({
            text:"check out Fashion by John Doe",
            url:'app.html'
        })
        .catch((err) =>console.error(err));
    }
    else{
        alert("Unable to share");
    }
});



$("#section-1").click(function () {
    $("#section-1").toggleClass("active-section", 'slow');
    $("#section-2").removeClass("active-section", 'slow');
    $("#section-3").removeClass("active-section", 'slow');
});

$("#section-2").click(function () {
    $("#section-2").toggleClass("active-section", 'slow');
    $("#section-1").removeClass("active-section", 'slow');
    $("#section-3").removeClass("active-section", 'slow');
})
$("#section-3").click(function () {
    $("#section-3").toggleClass("active-section", 'slow');
    $("#section-2").removeClass("active-section", 'slow');
    $("#section-1").removeClass("active-section", 'slow');
});