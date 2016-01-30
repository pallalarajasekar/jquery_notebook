/**
 * Created by harinaths on 29/1/16.
 */


$(document).ready(function(){


     //$('.book.inactive').css({display:'none'});

    //$('.table  tr:lt(2)').css({color:'red'})
    //$('.two, .five').css({background : 'gray'})


    //$('.toggle').click(function(){
    //    $('.on').toggleClass('off');
    //})


    $('div').delegate('.toggle','click', toggle)





})



var toggle= function(){
    $('.on').toggleClass('off');
}