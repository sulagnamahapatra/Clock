setInterval(tictoc, 1000);

function tictoc (){
    const now= new Date();
    var hr = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var hrd = 90.0+(hr*30.0)+(min/2.0);
    var mind = 90.0+(min*6.0);
    var secd = 90.0+(sec*6.0);
    $(".hour-hand").css("transform", "rotate("+hrd+"deg)");
    $(".min-hand").css("transform", "rotate("+mind+"deg)");
    $(".second-hand").css("transform", "rotate("+secd+"deg)");
}
