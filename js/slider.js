var n = 1;
var nazwaimg = "slider-img" + n;

function automatyczne(){

    $('#slider').addClass(nazwaimg);
    
    if(n==5){
        n = 0;
    };

    n -= 1;
    nazwaimg = "slider-img" + n;
    n += 2;

    $('#slider').removeClass(nazwaimg);
}

setInterval(automatyczne, 5000);
