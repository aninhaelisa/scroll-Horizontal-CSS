var scrollAtual = 0;
$('.img').click(fazerScroll);

function fazerScroll(e) {
    var direcao = e.target.id == 'frente' ? 1 : -1;
    $('.img').animate({
        scrollLeft: scrollAtual += 200 * direcao
    }, 1000);
}



//img joji
$("#verjoji").on("click", function(){
    $("#imgjoji").show();
    $(".ver").hide();
});

$(".fechar").on("click", function(){
    $("#imgjoji").hide();
    $(".ver").show();
});

//img mozart
$("#mozartver").on("click", function(){
    $("#mozartimg").show();
    $(".ver").hide();
});

$(".fechar").on("click", function(){
    $("#mozartimg").hide();
    $(".ver").show();
});

//The Beatles
$("#beatlesver").on("click", function(){
    $("#beatlesimg").show();
    $(".ver").hide();
});

$(".fechar").on("click", function(){
    $("#beatlesimg").hide();
    $(".ver").show();
});

//The Rolling Stones
$("#stonesver").on("click", function(){
    $("#stonesimg").show();
    $(".ver").hide();
});

$(".fechar").on("click", function(){
    $("#stonesimg").hide();
    $(".ver").show();
});

//Madona
$("#madonaver").on("click", function(){
    $("#madonaimg").show();
    $(".ver").hide();
});

$(".fechar").on("click", function(){
    $("#madonaimg").hide();
    $(".ver").show();
});

//Riahna
$("#riahnaver").on("click", function(){
    $("#riahnaimg").show();
    $(".ver").hide();
});

$(".fechar").on("click", function(){
    $("#riahnaimg").hide();
    $(".ver").show();
});
