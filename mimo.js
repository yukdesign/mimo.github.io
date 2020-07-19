$('body').on('click', '.home-menu', function(event) {
    event.preventDefault()
    $("body .nav-mobile").css("height", "100vh");
})

$('body').on('click', '.close', function(event) {
    event.preventDefault()
    $("body .nav-mobile").css("height", "0");
})