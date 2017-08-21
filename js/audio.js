/**
 * Created by hxsd on 2017/6/28.
 */
var musicplay={
    play:function(music){
        $.ajax({
            url:"http://musicapi.duapp.com/api.php?type=url&id="+music.id,
            success:function(data){
                console.log(data)
                var audio=$('#audio').get(0)
                audio.src=data.data[0].url

                audio.play()

                $('.hide').hide().siblings().show()
            }
        })

    }
}
$('.bofang img').click(function(){
    var audio=$('#audio').get(0)
    if(audio.paused){
        audio.play()
        $(this).hide().siblings().show()
    }else{
        audio.pause()
        $(this).hide().siblings().show()
    }

})

















