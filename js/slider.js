var n = 1;
var nazwaimg = "slider-img" + n;

function automatyczne(){

    $('#slider').removeClass(nazwaimg);

    if(n==5){
        n = 0;
    };

    n += 1;
    nazwaimg = "slider-img" + n;

    $('#slider').addClass(nazwaimg);
}

setInterval(automatyczne, 5000);