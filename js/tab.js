// JavaScript Document
function load(m){
    m=m||"home"
    router(m,$(".tabconteiner"))
}
load()
$(function(){
    //$('#m1').click(function(){
    //    load("home")
    //})
    //$('#m2').click(function(){
    //    load("songlist")
    //})
    //$('#m3').click(function(){
    //    load("order")
    //})
    //$('#m4').click(function(){
    //    load("remen")
    //})
    $('.banner li').click(function(){
        $(this).addClass("ab").siblings().removeClass('ab')
        if($(this).hasClass('m1')){
            load("home")
        }
        if($(this).hasClass('m2')){
            load("songlist")
        }
        if($(this).hasClass('m3')){
            load("order")
        }
        if($(this).hasClass('m4')){
            load("remen")
        }

    })
})