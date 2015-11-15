window.onload=function(){

var frame=document.getElementById('frame');
var button=true;
var count=0;
var time=document.getElementById('time');
for(var i=0;i<50;i++){
	var colors='rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+
				Math.floor(Math.random()*255)+','+Math.random()+')';	
	var word=document.createElement('div');
		word.setAttribute('class','word');
		frame.appendChild(word);
		word.style.background=colors;
	var str=Math.floor(65+ Math.random()*57) ;
		while(str>=91&&str<=96){
			str=Math.floor(65+ Math.random()*57) ;
		}
		var st=String.fromCharCode(str);
		word.innerHTML=st;
}
var top=frame.firstElementChild;
document.onkeydown=function(e){
	if(e.shiftKey){
		if(e.keyCode!=top.innerHTML.charCodeAt(0)) return;
	}else{
		if(e.keyCode+32!=top.innerHTML.charCodeAt(0))  return;
	}
	top.style.background='black';
	top=top.nextElementSibling;
	if(top==null){	alert(count);	location.reload(); }
	if(button){
	var timeId=setInterval(function(){
		count+=1;
		time.innerHTML=count;
		if(count==50){
			clearInterval(timeId);
			alert('时间到');
			location.reload();
		}
	},1000);
	button=false;
}
	

}


};