/**
 * Created by hxsd on 2017/6/28.
 */
function getplayList(id,callback){
    $.ajax({
        type:"get",
        url:"https://api.imjad.cn/cloudmusic?type=playlist&id="+id,
        //url:"json/playlist.json?id="+id,
        success:function(data){
            callback(data.playlist)
            //console.log(data.playlist.tracks[0].ar[0].name)
        }
    })
}
var paras=getUrlParms()

getplayList(paras.id,function(data){

    var $musicList=$('.musicList')

    var li=$('.musicItem').html()

    //console.log(li)

    for(var i=0; i<data.tracks.length; i++){
        var music=data.tracks[i]

        var $li=$(li)

        $li.find('.num').html(i+1)

        $li.find('.music').html(music.name)

        $li.find('.name').html(music.ar[0].name)

        $li.appendTo($musicList)

        console.log(datdata.coverImgUrla)
        //if(isCollected(music.id)){
        //    $('.collected').hide().siblings().show()
        //}else{
        //    $('.collected2').hide().siblings().show()
        //}
        //
        //$li.find('.shoucang img').data("music",music).click(function(e){
        //    e.stopPropagation();
        //    //console.log($(this).data('music').id)
        //    var music=$(this).data('music')
        //    if(localStorage.getItem("collection")){
        //        var list=JSON.parse(localStorage.getItem("collection"))
        //
        //        if(isCollected(music.id)){
        //            list[music.id].isCollected=false;
        //            console.log(111)
        //            $(this).hide().siblings().show()
        //        }else{
        //            list[music.id]={"name":music.id,"artist":music.ar[0].name,isCollected:true};
        //            $(this).hide().siblings().show()
        //            console.log(222);
        //        }
        //    }else{
        //        localStorage.setItem("collection",list);
        //        list[music.id]={"name":music.id,"artist":music.ar[0].name,isCollected:true}
        //        var list={};
        //        localStorage.setItem("collection",JSON.stringify(list))
        //        console.log(list)
        //    }
        //    localStorage.setItem("collection",JSON.stringify(list))
        //    $(this).hide().siblings().show()
        //
        //})
        //
        //function isCollected(id){
        //    if(localStorage.getItem("collection")){
        //        var list=JSON.parse(localStorage.getItem("collection"))
        //        //console.log("空")
        //    }else{
        //        return false
        //    }
        //    if(list[id]&&list[id].isCollected){
        //        return true
        //    }else{
        //        return false
        //    }
        //}


        $li.data("music",music).click(function(){
            musicplay.play($(this).data("music"))
          //console.log($(this).data("music"))
            var img=$('.tabar_pic')
            img.attr("src",$(this).data("music").al.picUrl)
        })

        //$('.xiayiqu').click(function(){
        //    console.log($(li).data("music",music).id)
        //})
    }
    $('.muaicLi').click(function(){
        //var i=$(this).index()
        $(this).addClass('ac ac2').siblings().removeClass('ac ac2')
        var musicName=$(this).find('.music').html()
        var geshouName=$(this).find('.name').html()

        //if(localStorage.musicName==''){
        //    $('.musicName').html("正在载入...")
        //    $('.geshouName').html("正在载入...")
        //}else{
            localStorage.musicName=musicName
            $('.musicName').html(localStorage.musicName)
            $('.geshouName').html(geshouName)
            //console.log(localStorage.musicName)
        //}
    })
    $('.pave').click(function(){
        router("tab")
    })
    $(window).scroll(function(){

        if($(window).scrollTop()>=80){
            $('.detail_top').addClass('zhengtop')
        }else{
            $('.detail_top').removeClass('zhengtop')
        }

    })


})

























