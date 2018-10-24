//ennek el kellene tüntetni a paragrafusokat kattintáskor
    $(document).ready(function () {
        $('p').click(function () {
            $(this).hide();
        })
    });



$(document).ready(function() {
    //itt htmlben egy id-t adott egy gombnak és arra hivatkozik
    $('#button').click(function(){
        $("p").css("color","red")
            .slideUp(2000)
            .slideDown(2000);
    })
});

