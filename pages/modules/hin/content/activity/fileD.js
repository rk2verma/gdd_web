var inpT = ['#tspan941','#tspan968','#tspan1021','#tspan1048','#tspan1075'];
var objArr = ['#g936','#g963','#g1016','#g1043','#g1070']
var txtArr=[[['क','ख','ग','घ','ङ'],['कचरा','खत','गन्ना','गज','घर','कड़ाही','खरगोश','ङ','घड़ी']],
			[['च','छ','ज','झ','ञ'],['चश्मा','छतरी','जेवरात','जहाज','झण्डा','चरखा','छत','ञ','झगड़ा']],
			 [["ट","ठ","ड","ढ","ण"],['टमाटर','ठठेरा','डमरू','डंडा','ढक्कन','टोकरी','ठप्पा','ण','ढाल']]];


var incTxt = ['और सोचो','सोचकर क्लिक करो','और एक बार देखो','मुझे ऐसा नहीं लगता !'];
var corTxt = ['शाबाश!','बहुत अच्छा!','सुंदर, बहुत सुंदर!','खूबसूरत '];	

var imgArr=[['kachra','khat','ganna','gaj','ghar','kadahi','khargos','Nga','ghadi1'],
			['chasma','chhatri','jewraat','jahaaj','jhanda','charkha','chhat','eyan','jhagda2'],
			['tamatar','thathera','damru','danda','dhakkan','tokri','thappa','NA','dhal']];

var audArr=[['kachra.mp3','khat.mp3','ganna.mp3','gaj.mp3','ghar.mp3','kadai.mp3','khargos.mp3','Nga.mp3','ghadi.mp3'],
			['chasma.mp3','chhatri.mp3','jewarat.mp3','jahaaj.mp3','jhagda.mp3','charkha.mp3','chhat.mp3','Yan.mp3','jhanda.mp3'],
			['tamatar.mp3','thathera.mp3','damru.mp3','danda.mp3','dhakkan.mp3','tokri.mp3','thappa.mp3','NA.mp3','dhal.mp3']];			

var y0 = 220,row=0,col=0,isCorrect=false,isEnd=false,time1,refArr,aud,displayId;
var y,y1 = 385;
var dx0=150,dx1=185;
var tot=imgArr[0].length;
var xArr = [[400,220],[540,220],[698,220],[850,220],[1000,220],[426,385],[590,385],[780,385],[990,385]];
var lev=0,curWord=0;

(function() {
	// body...
	window.addEventListener('load', function() {
	  'use strict';
	  const queryString = window.location.search;
	  const urlParams = new URLSearchParams(queryString);
	  displayId = urlParams.get('id');
	  //displayId=1;
	  init();
	})
function init(){
	$('#text981').hide();
	 aud=document.getElementById('main_audio');
	// aud.onended=function(){
	// 	var mainAud=new Audio("../../../../audio/chitraWord/204"+".mp3");
	// 	mainAud.play();
	// }
	refArr = [];
	for(var i=0;i<tot;i++){
		$('#img'+i).attr('xlink:href','images/'+imgArr[displayId][i]+'.jpg');
	}
	Random_arr(refArr,txtArr[displayId][1].length);
	setWord();
	for(var i=0;i<5;i++){
		$(inpT[i]).html(txtArr[displayId][0][i]);
		$(inpT[i]).attr('font-size','40px');
		
		$(objArr[i]).click(function(){
			var mm=getTranslateXY($('#blink')[0])
			//console.log($('#tspan1097').html(),$(this).find('tspan').html().substr(0,1))
			if($('#tspan1097').html()==$(this).find('tspan').html()){

				y = (row==0)?y0:y1;
				isCorrect=true;
				feedMusic(true);
				
			}else{
				//wrong Answer
				feedMusic(false);
				time1=setTimeout(incorrectAns,1000)
			}
			// cover show
			
			//$('#blink').attr({'transform':'translate('+(mm.x+150)+','+(220)+')'});
		})
	}
}

})();

function getTranslateXY(elm) {
    var style = window.getComputedStyle(elm);
    var matrix = new WebKitCSSMatrix(style.transform); 
    return {x:matrix.m41,y:matrix.m42};
  }

function correctAns(){
	$('#img'+refArr[curWord-1]).hide();
	if(curWord<tot){
		
		$('#blink').attr({'transform':'translate('+(xArr[curWord][0])+','+xArr[curWord][1]+')'});
		setWord();
	}else{
		$('#blink').hide();
		for(var i=0;i<5;i++){
			$(objArr[i]).hide();
		}
		$('#text981').show();
		$('#tspan979').html('खेल समाप्त');
	}
	// cover hide
}
function incorrectAns(){
	// cover hide	
}

function feedMusic(bool){
	var kk=Math.floor(Math.random()*4);
	$('#rectCovF').show();
	if(aud){
			aud.pause();
		}
	if(bool){
		//
		$('#tspan979').html(corTxt[kk]);

		aud=new Audio("../../../../audio/colWord/corTxt"+kk+".mp3");
		aud.play();
		aud.onended=function(){
			$('#text981').hide();
			TweenLite.fromTo($('#g1129'),0.3,{scale:0.03},{scale:1})
			$('#g1129').show();
			aud=new Audio("../../../../audio/chitraWord/"+audArr[displayId][refArr[curWord]]);
			aud.play();
			aud.onended=function(){
				$('#rectCovF').hide();
			}
			//txtArr[1][refArr[curWord]]
			curWord++;
			time1=setTimeout(correctAns,1000);
		}
	}else{
		//
		$('#tspan979').html(incTxt[kk]);
		aud=new Audio("../../../../audio/colWord/incTxt"+kk+".mp3");
		aud.play();
		aud.onended=function(){
			$('#text981').hide();
			$('#rectCovF').hide();
		}
	}
	TweenLite.fromTo($('#text981'),0.3,{scale:0.03},{scale:1})
	$('#text981').show();
}

function Random_arr(Random_array,st)
{
	var Random_num_array = new Array();
	for (var i=0; i<st; i++)
	{
		Random_num_array[i] = i ;
	}
	while (Random_num_array.length > 0)
	{
		var r = Math.floor(Math.random() * Random_num_array.length);
		Random_array.push(Random_num_array[r]);
		Random_num_array.splice(r,1);
	}
}
function setWord(){
	$('#blink').attr({'transform':'translate('+(xArr[refArr[curWord]])+')'});
	$('#tspan1097').html(txtArr[displayId][1][refArr[curWord]].substr(0,1));
	$('#tspan1106').html(txtArr[displayId][1][refArr[curWord]]);
	$('#g1129').hide();
	
}

