var btnArr = ["g7471","g7559","g7487","g7567","g7503","g7575","g7519","g7583","g7535","g7591","g7551",
				"g7599","g4967","g7607","g5003","g7615"];
var indArr = [0,1, 3,4, 6,7, 9,10, 12,13, 15,16, 18,19, 21,22];
// v for video b for text activity d for image activity
var pgArr = ["v0","b0","c0",
			 "v1","b1","d0",
			 "v2","b2","d1",
			 "v3","b3","d2",
			 "v4","b4","e0",
			 "v5",'b5','e1',
			 'v6','b6','e2',
			 'v7','b7','e3'];
var curPg1,totPg1=24;

// $('#nextBtn').hide();
// $('#backBtn').hide();
// $('#closeBtn').hide();
$('#closeBtn,#nextBtn,#backBtn').hide();

(function(){
	window.addEventListener('load', function() {
	  'use strict';
	  init();
	})
  	function init(){
		for(var i=0;i<totPg1;i++){
			$('#'+btnArr[i]).css('cursor','pointer');
			$('#'+btnArr[i]).click(function() {
			// body...
				console.log($(this).attr('id'));
				//console.log($(this).find('text').children()[0].html('स्वर'))
				$('#closeBtn').show();
				 $('#menuMc').hide();
				//loadPage('./Ch1.html');
				curPg1 = indArr[btnArr.indexOf($(this).attr('id'))];
				$('#closeBtn,#nextBtn,#backBtn').show();
				//loadPage1('./file 0'+pgArr[curPg1]+'.svg');
				loadPage1();
				updateBtn1(curPg1,totPg1);	
			})
		}
		$('#nextBtn').click(function(){
			if(curPg1<totPg1-1){
				curPg1++;
				console.log(curPg1,totPg1);
				updateBtn1(curPg1,totPg1);
				loadPage1();
			}
		});
		$('#backBtn').click(function(){
			if(curPg1>0) {
				curPg1--;
				console.log(curPg1,totPg1);
				updateBtn1(curPg1,totPg1);
				loadPage1();
			}
		});
		
	}

})()


// closeBtn  menuMc nextBtn backBtn 


function loadPage1(){
	//console.log(b); './video/videoPlayer.html?id='+2
	//'./file 0'+pgArr[curPg1]+'.svg'
	if(pgArr[curPg1].substring(0,1)=='v'){
		b='./video/videoPlayer.html?id='+pgArr[curPg1].substring(1);
		console.log(b);
	}else if(pgArr[curPg1].substring(0,1)=='b'){
		b='./fileB.html?id='+pgArr[curPg1].substring(1);
	}else if(pgArr[curPg1].substring(0,1)=='c'){
		b='./fileC.html?id='+pgArr[curPg1].substring(1);
	}else if(pgArr[curPg1].substring(0,1)=='d'){
		b='./fileD.html?id='+pgArr[curPg1].substring(1);
	}else{
		b='./fileE.html?id='+pgArr[curPg1].substring(1);
	}
	
  //$('#toc_container1').height($(window).innerHeight()-$('.header').height()-$('.footer').height());
	document.getElementById("toc_container1").innerHTML='<object  id="innerCon" type="text/html" data="'+b+'"></object>';
			console.log($('#toc_container1 object').height($('#container').height()))
			$('#toc_container1 object').width('100%');
			//console.log($('#toc_container1 object').height())
  			//$('#toc_container1 object').height('100%');
  			$('#toc_container1 object').css('padding','0');
			

  		updateSize1();
  		$('#toc_container1 object').css('text-align','center');
  		$('#toc_container1').css('text-align','center');
	//document.getElementById("toc_container").innerHTML='<object  type="text/html" data="'+b+'/toc.html?cls='+a+'"></object>';	
	//testFn();
	
	
}

function updateSize1(){
			var wid = 	$(window).width();
  		var hei = 	$(window).height();
  		var ratio = wid/hei; //console.log(wid,hei,ratio,' is ratio')
  		 if(ratio>2.5){
  		 	$('#toc_container1').width('58%');  		 	
  		 }else if(ratio>2.3){
  		 	$('#toc_container1').width('66%');
  		 }else if(ratio>2.1){
  		 	$('#toc_container1').width('74%');
  		 }else if(ratio>1.9){
  		 	$('#toc_container1').width('82%');
  		 }else if(ratio>1.7){
  		 	$('#toc_container1').width('90%');
  		 }else if(ratio>1.5){
  		 	$('#toc_container1').width('100%');
  		 }
  		
  		$('#innerCon').css('text-align:center')
  		$('#toc_container1').css('text-align:center')
  		$('#innerCon').height($('#svgBG').height()*0.88);
  		$('#innerCon').width($('#svgBG').width());
}

function updateBtn1(a,b){
	$('#backBtn').show();
	$('#nextBtn').show();
	if(a==0){		
		enableDisable($('#backBtn'),false);
		enableDisable($('#nextBtn'),true);
		if(a==(b-1)){
			enableDisable($('#nextBtn'),false);
		}
	}else if(a==(b-1)){
		enableDisable($('#backBtn'),true);
		enableDisable($('#nextBtn'),false);
	}else{
		enableDisable($('#backBtn'),true);
		enableDisable($('#nextBtn'),true);
	}
}

function enableDisable(obj,bool){
	if(bool){
		obj.css('opacity','1');
		obj.css('cursor','pointer')
	}else{
		obj.css('opacity','0.4');
		obj.css('cursor','default')
	}
}

var animInterval,animState0,animState1;
var animState=false;
function mouthAnimation(cond){ 
	var happy0 = 'M 6.95 -1.25 L 7.075 -0.95 L 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q 0.196 4.313 7.075 -0.95 M -7.175 -0.3 L -7.325 0.05';
	var happy1 = 'M 14.13 -3.9 L 13.983 -1.983 L 14.373 -0.153 M -14.067 -2.253 L -13.857 -0.093 Q 0.183 5.757 13.977 -1.999 Q 1.833 16.617 -13.887 -0.123 M -14.397 2.067 L -13.857 -0.123 Z';
	var sad0   = 'M 6.95 -1.25 L 7.075 -0.95 L 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q -0.446 -1.829 7.075 -0.95 M -7.175 -0.3 L -7.325 0.05';
	var sad1   = 'M 6.95 -1.25 L 7.075 -0.95 L 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q -0.623 -2.228 7.075 -0.95 Q -0.324 2.132 -7.152 -0.302 M -7.175 -0.3 L -7.325 0.05 Z';
	var neu0   = 'M 6.95 -1.25 L 7.075 -0.95 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q 0.09296875 2.497265625 7.075 -0.95 M -7.175 -0.3 L -7.325 0.05'
	var neu1   = 'M 6.95 -1.25 L 7.075 -0.95 L 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q 0.093 2.4973 7.075 -0.95 Q 0.263 7.843 -7.152 -0.302 M -7.175 -0.3 L -7.325 0.05 Z'
	var stt    = 'M 6.95 -1.25 L 7.075 -0.95 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q 0.09296875 2.497265625 7.075 -0.95 M -7.175 -0.3 L -7.325 0.05';
	switch(cond){ 
		case 'happy' :
			p0=happy0;p1=happy1;
			animInterval = setInterval(animatemascot,300);
		break;
			case 'sad' :
			p0=sad0;p1=sad1;
			animInterval = setInterval(animatemascot,300);
		break;
			case 'neutral' :
			p0=neu0;p1=neu1;
			animInterval = setInterval(animatemascot,300);
		break;
			case 'stop' :
			clearInterval(animInterval);
			$('#mouthId g g path').attr('g',stt);
		break;
	}
}

function animatemascot(){
	animState=!animState;
	if(animState==false){ 		
		$('#mouthId g g path').attr('d',animState0);
		$('#mouthId g g path').attr('fill','none')
	}else{
		$('#mouthId g g path').attr('d',animState1)
		$('#mouthId g g path').attr('fill','#888')
	}
}

mouthAnimation('happy');


 