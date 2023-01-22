$('#chooseCheese').hide(0);
$('#chooseVeg').hide(0);
$('#chooseSauce').hide(0);
$('#chooseMeat').hide(0);

$('#cheese').click (function(){
    $('#chooseCheese').slideToggle(400)
});
$('#vegetables').click (function(){
    $('#chooseVeg').slideToggle(400)
});
$('#sauce').click (function(){
    $('#chooseSauce').slideToggle(400)
});
$('#meat').click (function(){
    $('#chooseMeat').slideToggle(400)
});
$('.item1').hide(0)

$('#feta').click(function(){
    $('.fet').hide(0)
    $('#fetaHide').show(0)
    sum = sum + 20
    $('#total').text('До оплати '+ sum+ 'грн.')
});
$('#chedder').click(function(){
    $('.ched').hide(0)
    $('#chedderHide').show(0)
    sum = sum + 20
    $('#total').text('До оплати '+ sum+ 'грн.')
});
$('#motzarella').click(function(){
    $('.motza').hide(0)
    $('#motzarellaHide').show(0)
    sum = sum + 20
    $('#total').text('До оплати '+ sum+ 'грн.')
});
$('#bergader').click(function(){
    $('.berga').hide(0)
    $('#bergaderHide').show(0)
    sum = sum + 20
    $('#total').text('До оплати '+ sum+ 'грн.')
});
$('#parmezan').click(function(){
    $('.parm').hide(0)
    $('#parmezanHide').show(0)
    sum = sum + 20
    $('#total').text('До оплати '+ sum+ 'грн.')
});
$('#bekon').click(function(){
    $('.bek').hide(0)
    $('#bekonHide').show(0)
    sum = sum + 25
    $('#total').text('До оплати '+ sum+ 'грн.')
});
$('#chicken').click(function(){
    $('.chick').hide(0)
    $('#chickenHide').show(0)
    sum = sum + 25
    $('#total').text('До оплати '+ sum+ 'грн.')
});
$('#shynka').click(function(){
    $('.shyn').hide(0)
    $('#shynkaHide').show(0)
    sum = sum + 25
    $('#total').text('До оплати '+ sum+ 'грн.')
});
$('#peperoni').click(function(){
    $('.pep').hide(0)
    $('#peperoniHide').show(0)
    sum = sum + 25
    $('#total').text('До оплати '+ sum+ 'грн.')
});
$('#alfredo').click(function(){
    $('.alf').hide(0)
    $('#alfredoHide').show(0)
    sum = sum + 10
    $('#total').text('До оплати '+ sum+ 'грн.')

});
$('#barbequ').click(function(){
    $('.barbek').hide(0)
    $('#barbequHide').show(0)
    sum = sum + 10
    $('#total').text('До оплати '+ sum+ 'грн.')
});
$('#chasnykovyi').click(function(){
    $('.chasnyk').hide(0)
    $('#chasnykovyiHide').show(0)
    sum = sum + 10
    $('#total').text('До оплати '+ sum+ 'грн.')
});
$('#corn').click(function(){
    $('.cor').hide(0)
    $('#cornHide').show(0)
    sum = sum + 15
    $('#total').text('До оплати '+ sum+ 'грн.')
});
$('#tomatos').click(function(){
    $('.toma').hide(0)
    $('#tomatosHide').show(0)
    sum = sum + 15
    $('#total').text('До оплати '+ sum+ 'грн.')
});
$('#shpynat').click(function(){
    $('.shpyn').hide(0)
    $('#shpynatHide').show(0)
    sum = sum + 15
    $('#total').text('До оплати '+ sum+ 'грн.')
});
$('#paper').click(function(){
    $('.pape').hide(0)
    $('#paperHide').show(0)
    sum = sum + 15
    $('#total').text('До оплати '+ sum+ 'грн.')
});
$('#mushrums').click(function(){
    $('.mush').hide(0)
    $('#mushrumsHide').show(0)
    sum = sum + 15
    $('#total').text('До оплати '+ sum+ 'грн.')
});
$('#ananas').click(function(){
    $('.anan').hide(0)
    $('#ananasHide').show(0)
    sum = sum + 15
    $('#total').text('До оплати '+ sum+ 'грн.')
});
let sum = 0;