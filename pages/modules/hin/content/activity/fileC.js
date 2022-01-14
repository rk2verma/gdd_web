/*
var inpT = ['#tspan941','#tspan968','#tspan1021','#tspan1048','#tspan1075'];
var objArr = ['#g936','#g963','#g1016','#g1043','#g1070'];*/
var inpT = ['#tspan968','#tspan1048'];
var objArr = ['#g963','#g1043']

var txtArr=[[['अ','आ'],['अनार','अजगर','आम','आकाश']],
			[['इ','ई'],['इमली','इनाम','ईद','ईख']],
			[['उ','ऊ'],['ऊषा','उपग्रह','ऊन','उन्नीस']],
			[['ए','ऐ'],['एकतारा','एड़ी','ऐनक','ऐतिहासिक']],
			[['ओ','औ'],['ओखली','ओढनी','औरत','औषध']],
			[['अं','ऋ'],['अंडा','ऋषि']]];


var incTxt = ['और सोचो','सोचकर क्लिक करो','और एक बार देखो','मुझे ऐसा नहीं लगता !'];
var corTxt = ['शाबाश!','बहुत अच्छा!','सुंदर, बहुत सुंदर!','खूबसूरत '];	

var imgArr=[['anaar','ajgar','aam','aakash'],['imli','inaam','eid','eikh'],
			['usha','upgrah','uun','uunees'],['ektaara','aidi','aeinak','aeitihasik'],
			['okhli','odhni','aurat','aushadh'],['anda','rishi']];

var audArr=[['anaar','ajgar','aam','aakash'],['imli','inaam','eid','eikh'],
			['usha','upgrah','uun','uunees'],['ektaara','aidi','aeinak','aeitihasik'],
			['okhli','odhni','aurat','aushadh'],['anda','rishi']];;			

var y0 = 220,row=0,col=0,isCorrect=false,isEnd=false,time1,refArr,aud,displayId;
var y,y1 = 385;
var dx0=150,dx1=185;
var tot=imgArr[0].length;
var xArr = [[460,220],[600,220],[758,220],[910,220]];
var lev=0,curWord=0;

(function() {
	// body...
	window.addEventListener('load', function() {
	  'use strict';
	  const queryString = window.location.search;
	  const urlParams = new URLSearchParams(queryString);
	  //displayId = 5;//urlParams.get('id');
	  displayId=0;
	  tot=imgArr[displayId].length;	  
	  $('#g936, #g1016,#g1070').hide();
	  $('#g1000').show();
	  init();
	})


})();

function init(){
	curWord=0;
	$('#text981').hide();
	aud=document.getElementById('main_audio');
	if(displayId==0){
		$(objArr[0]).bind('click',onClickFn);
	  $(objArr[1]).bind('click',onClickFn);
	}
	if(displayId==5){
		$('#g1142, #g1196').hide();
	}
	tot=imgArr[displayId].length;	
	refArr = [];
	for(var i=0;i<tot;i++){
		$('#img'+i).attr('xlink:href','./images/'+imgArr[displayId][i]+'.jpg');
		$('#img'+i).show();
	}
	Random_arr(refArr,txtArr[displayId][1].length);
	setWord();
	for(var i=0;i<2;i++){
		$(inpT[i]).html(txtArr[displayId][0][i]);
		$(inpT[i]).attr('font-size','40px');
		
	}
}


function onClickFn(){
			var mm=getTranslateXY($('#blink')[0]);
			//console.log($('#tspan1097').html(),$(this).find('tspan').html().substr(0,1))
			if($('#tspan1097').html()==$(this).find('tspan').html().substr(0,1)){

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
		}

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
		displayId++;
		if(displayId<6){
			init();
		}else{
			$('#blink').hide();
			if(displayId==6){
				$('#text981').show();
				$('#tspan979').html('खेल समाप्त');
				$('#g963,#g1043').hide();
			}
		}
		
		
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
			aud=new Audio("../../../../audio/chitraWord/"+audArr[displayId][refArr[curWord]]+'.mp3');
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

