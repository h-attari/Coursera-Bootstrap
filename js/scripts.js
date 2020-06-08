$(document).ready(function(){
    $("#mycarousel").carousel({interval: 2000});
    $("#carouselButton").click(function(){
        if($("#carouselButton").children("span").hasClass('fa-pause'))
        {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if($("#carouselButton").children("span").hasClass('fa-play'))
        {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
    var flag='';
    $("#reserveButton").click(function(){
        $("#registermodal").modal('show');
        flag='r';
    });
    $("#reserveCancel").click(function(){
        $("#registermodal").modal('hide');
        flag='';
    });
    $("#loginButton").click(function(){
        $("#loginmodal").modal('show');
        flag='l';
    });
    $("#loginCancel").click(function(){
        $("#loginmodal").modal('hide');
        flag='';
    });
    $(".close").click(function(){
        if(flag == 'r')
        {
            $("#registermodal").modal('hide');
            flag='';
        }
        else if(flag == 'l')
        {
            $("#loginmodal").modal('hide');
            flag='';
        }
    });
});