// JavaScript Document
var mySwiper = new Swiper('.swiper-container', {
	autoplay: 1000,//可选选项，自动滑动
	loop:true,
    pagination: '.swiper-pagination',
})
function getplaylist(limit,callbak){
	//console.log(111)
	if(isCache()){
		//console.log("访问缓存")
		var list=JSON.parse(localStorage.list)
		callbak(list)
	}else{
		$.ajax({
			type:"GET",
			//url:"http://musicapi.duapp.com/api.php?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset=0&limit="+limit,
			url:"json/topPlayList.json",
			success:function(data){
				//console.log("访问网络")
				var list=JSON.stringify(data.playlists)
				localStorage.cacheTime=new Date().getTime()

				localStorage.list=list
				//console.log(localStorage.list)
				callbak(data.playlists)

			}
		})
	}
	function isCache(){
		if(!localStorage.list){
			return false
		}
		if(new Date().getTime()-localStorage.cacheTime>=10*60*1000){
			return false
		}
		return true
	}

}

getplaylist(9,function(data){
	console.log(data)
	var time=$('.wrap ul')
	for(var i=0; i<data.length;i++){
		$('<li class="time">'+
			'<a href="#detail?id='+data[i].id+'" onclick="router('+"\'detail\'"+')">'+
				'<div class="renqi">'+(data[i].playCount/10000).toFixed(1)+'万</div>'+
				'<img src="'+data[i].coverImgUrl+'">'+
				//'<img src="./images/18657612813569597.jpg">'+
				'<p class="text">'+data[i].name+'</p>'+
			'</a>'+
		'</li>').appendTo(time)
	}


})
