$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
    $(this).toggleClass('open');
    $('.header-navbar__list').stop(true,true).slideToggle(500);
});