$(window).scroll(function(){

    if($(this).scrollTop()>=200){
        $("#navBar").addClass("noTransparrent");
    }
    else{
        $("#navBar").removeClass("noTransparrent");
    }

});




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // منع السلوك الافتراضي
        const targetId = this.getAttribute('href').substring(1); // الحصول على الاسم بدون #
        const targetElement = document.getElementById(targetId); // العثور على العنصر الهدف
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // التمرير إلى العنصر بسلاسة
        }
    });
});






$(document).ready(function(){
    $("a.scroll").on('click', function(event) {

        var hash = this.hash;

        $('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 800, function(){});
    
    });

    $('.circle').circleProgress({
        startAngle: -Math.PI / 2,
        fill: "#0575e6"
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('span').html(Math.round(stepValue * 100) + '%');
    });
    
    $(function () {
        $("#commentForm").validate();
    });

});
