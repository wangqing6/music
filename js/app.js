// JavaScript Document
function getUrlParms(){
	var sv={}

	var url= window.location.href
	
	var arr=url.split("?")
	
	var myarr=arr[1]
	
	if(arr.length!=2){
		return false;	
	}else{
		var arr2=myarr.split("&")
	}
	
	//console.log(arr2)
	for(var i=0; i<arr2.length; i++){
		var arr3=arr2[i].split("=")
		//console.log(arr3)
		sv[arr3[0]]=arr3[1]
	}
    return sv
		
}
//console.log(getUrlParms())

function geturl(){
	var url= window.location.href
	var arr=url.split("#")
	if(arr.length!=2){
		return false	
	}
	var p=arr[1]
	p=p.split("?")
	return p[0]
	

	
}
//console.log(geturl())

function router(m,container){
	container=container||$(".share")
	$.ajax({
		url:"views/"+m+".html",
		success: function(data){
			container.html(data)
			//console.log(data)
		}	
	})
	lodjs(m)
}

function lodjs(m){
	$.ajax({
		url:"js/"+m+".js"	
	})	
}

//$(function(){
//	//var m=geturl()
//	router("tab")
//})
//屏幕缩小改变尺寸
window.onresize=function(){
	var dom= document.documentElement;
	var w=dom.clientWidth;
 	dom.style.fontSize=w/6.4+"px"	
}
//第一次进入加载欢迎页
$(function(){
	if(!localStorage.count){
		localStorage.count=0
	}
	localStorage.count++
	//console.log(localStorage.count)
	if(localStorage.count==1){
		router("hello")
	}else{
		router("tab")
		router('audio',$('.tabar'))
	}

})















