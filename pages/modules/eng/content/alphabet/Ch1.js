var displayId,aud;
(function(){


var txtArr = ["tspan859","tspan805","tspan913","tspan967",
			"tspan1021","tspan1075","tspan1129","tspan1183",
			"tspan1291","tspan1237","tspan1345","tspan1399",
			"tspan1453","tspan1561","tspan1507","tspan1615",
			"tspan1669","tspan1723","tspan1831","tspan1777",
			"tspan1885","tspan1939","tspan1993","tspan2101",
			"tspan2047","tspan2155"];
var objArr = [  "Layer_80","Layer_77","Layer_83","Layer_86",
				"Layer_89","Layer_92","Layer_95","Layer_98",
				"Layer_104","Layer_101","Layer_107","Layer_110",
				"Layer_113","Layer_119","Layer_116","Layer_122",
				"Layer_125","Layer_128","Layer_134","Layer_131",
				"Layer_137","Layer_140","Layer_143","Layer_149",
				"Layer_146","Layer_152"];
var tarArr = [  "path844","path790","path898","path952","path1006","path1060",
				"path1114","path1168","path1276","path1222","path1330","path1384",
				"path1438","path1546","path1492","path1600","path1654","path1708",
				"path1816","path1762","path1870","path1924","path1978","path2086",
				"path2032","path2140"];	
var dynText = [];				
var dynTextId = [];
	

var memoryFeed = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];									

function init() {
	// body...
	var tot = txtArr.length;
	aud=document.getElementById('main_audio');
	aud.onended=function(){
		var mainAud=new Audio("audio/EAct01/inst"+displayId+".mp3");
		mainAud.play();
	}
	for(var i=0;i<tot;i++){
		var j = document.getElementById(txtArr[i]);
			j.setAttribute("class","noselect");
			if(displayId==1){
				j.innerHTML = String.fromCharCode(65+i);
			}else{
				j.innerHTML = String.fromCharCode(97+i);
			}
			

		var k = document.getElementById(objArr[i]);
		k.setAttribute("transform","translate(75,0)");
		//k.setAttribute("cursor","pointer");
		$('#'+objArr[i]).css("cursor","pointer");
		$('#'+objArr[i]).click(onclickMethod);
		$('svg').css('width','100%');
		$('svg').css('height','auto');
		//console.log(k);
	}

//$("#g2192").click(function(){console.log($("svg").height()+":"+$("svg").css('transform') )})

}

window.onload=function() {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  displayId = urlParams.get('id');
  console.log(displayId);
  //const displayType = urlParams.get('type');
	  if(displayId==1){
	  			console.log("Nothing to change");
	  }else{
	  			console.log("this is Small_a Alphabet");
	  			ModifyText();
	  }
	  overlayClicked(displayId)
  
  }
  function ModifyText(){
  	document.title = "Small Alphabet";
  	$('#tspan165').html("English Alphabet - Small Letters");
  	$('#tspan2232').html("Here you are looking at small letters of the English alphabets. Click on every letter");
  	$('#tspan2234').html("and observe how they are written and how they are pronounced.");  		
  }
var timoutTimer;

function onclickMethod(e){
	var mm = objArr.indexOf(e.currentTarget.id);
	var jkm = memoryFeed.indexOf(mm);
	
	if(memoryFeed.length > 0 && jkm>=0) { memoryFeed.splice(jkm,1);};
	console.log(memoryFeed);
	
	var obj = document.getElementById(tarArr[mm]); 
	obj.setAttribute("fill","#ffdbac");
	var kk;
	if(displayId==1){
		kk = String.fromCharCode(65+mm);
		document.getElementById('myanimsvg').src="images/Anim1_"+kk+".html";
	}else{
		kk = String.fromCharCode(97+mm);
		document.getElementById('myanimsvg').src="images/Anim_"+kk+".html";
	}

	

	if(timoutTimer) { clearTimeout(timoutTimer);};
	 timoutTimer = setTimeout(myFunction, 2500);
	stopMusic();
	function myFunction() {
	  var lowkk = kk.toLowerCase();
	  var music = new Audio('audio/EAct01/'+lowkk +'.mp3');
	  music.play();
	  music.onended = function() {
		  if(memoryFeed.length==0){
		  	//#g2317 	TxtBG
		  	//#g2336	Txt
		  	//#g2338 	TransparentCover
		  	$('#g2317').css('display','block');
		  	$('#g2336').css('display','block');
		  	$('#g2338').css('display','block');		  	
		  	$('#myanimsvg').css('display','none');
		  }
		};
	}

}

$(document).ready(function(){
    
    init();
});


})()
