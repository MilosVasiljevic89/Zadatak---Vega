$(document).ready(function(){


$(".burger").click(function(){
        $(".maincontent").toggleClass("sidebaractivatedformain");
        $(".sidebar").toggleClass("sidebaractivatedforside");
    });


$(".prt1").click(function(){
        $(".i1").show();
        $(".i2").hide();
        $(".i3").hide();
        $(".i4").hide();

        $(".img1").addClass("rotate");
        $(".img2").removeClass("rotate");
        $(".img3").removeClass("rotate");
        $(".img4").removeClass("rotate");
        
    });


$(".prt2").click(function(){
        $(".i1").hide();
        $(".i2").show();
        $(".i3").hide();
        $(".i4").hide();

        $(".img1").removeClass("rotate");
        $(".img2").addClass("rotate");
        $(".img3").removeClass("rotate");
        $(".img4").removeClass("rotate");
        
    });


$(".prt3").click(function(){
        $(".i1").hide();
        $(".i2").hide();
        $(".i3").show();
        $(".i4").hide();

        $(".img1").removeClass("rotate");
        $(".img2").removeClass("rotate");
        $(".img3").addClass("rotate");
        $(".img4").removeClass("rotate");
        
    });


$(".prt4").click(function(){
        $(".i1").hide();
        $(".i2").hide();
        $(".i3").hide();
        $(".i4").show();

        $(".img1").removeClass("rotate");
        $(".img2").removeClass("rotate");
        $(".img3").removeClass("rotate");
        $(".img4").addClass("rotate");
        
    });



});