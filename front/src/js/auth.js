
$(function () {
    $("#login-btn").click(function () {
        $(".auth-mask").show()
    });
    $(".iconfont").click(function () {
        $(".auth-mask").hide()
    })
});


$(function () {
    $(".title-b").click(function () {
        var leftVal = $(".sign-group").css('left');
        if(leftVal === "-400px"){
            $(".sign-group").animate({'left':0},100)
        } else{
            $(".sign-group").animate({'left':-400},100)
        }
    })
});