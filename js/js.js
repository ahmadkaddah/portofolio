$(window).scroll(function () {

    if ($(this).scrollTop() >= 200) {
        $("#navBar").addClass("noTransparrent");
    }
    else {
        $("#navBar").removeClass("noTransparrent");
    }

});

$(document).ready(function () {
    $("a.scroll").on('click', function (event) {

        var hash = this.hash;

        $('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 800, function () { });

    });

    $('.circle').circleProgress({
        startAngle: -Math.PI / 2,
        fill: "#0575e6"
    }).on('circle-animation-progress', function (event, progress, stepValue) {
        $(this).find('span').html(Math.round(stepValue * 100) + '%');
    });

    $(function () {
        $("#commentForm").validate();
    });

});

// زر العودة للأعلى
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

$(document).ready(function () {
    $("#scrollTop").on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1500); // تمرير سلس وبطيء
    });
});

// زر تبديل الثيم
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// التحقق من الثيم المحفوظ
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', function () {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// شريط تقدم القراءة
$(window).scroll(function () {
    // حساب النسبة المئوية للتمرير
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;

    // تحديث عرض شريط التقدم
    $("#progressBar").css('width', scrolled + '%');
});
