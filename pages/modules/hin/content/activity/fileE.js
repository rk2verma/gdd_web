var inpT = ['#tspan941','#tspan968','#tspan1021','#tspan1048','#tspan1075','#tspan1075A'];
var objArr = ['#g936','#g963','#g1016','#g1043','#g1070','#g1070A']
var txtArr=[[['त','थ','द','ध','न'],['तरबूज','थरमस','दरवाजा','दादी','धन','तारे','थाली','नाग','नयन','धान']],
			[['प','फ','ब','भ','म'],['पतंग','फल','बकरी','मंदिर','भवन','पशु','बर्तन','फौज','महल','भोजन']],
			 [["य","र","ल","व","श","ष"],['यमराज','रथ','लड़की','वर','शहर','वकील','युवक','षट्कोण','राजा','लड़का','शलगम','षट']],
			 [["स","ह","क्ष","त्र","ज्ञ"],
			 ['सेब','हल','क्षत्रिय','त्रिशूल','संतरा','हाथ','ज्ञानी','त्रिभुज','त्रिदेव','त्रयोदश']]];
// क्षमा    त्रयोदश त्रुटि    
// त्रयोदश त्रुटि त्रस्त त्राहि  ज्ञान ज्ञानी ज्ञाता ज्ञानयोगी ज्ञानवर्धक     श्रमिक श्रम श्रीखंड श्रीमान
var imgHolder = ["g1136","g1142","g1148","g1154","g1174","g1184","g1190","g1196","g1196A","g1196B","g1196C","g1202"];


var incTxt = ['और सोचो','सोचकर क्लिक करो','और एक बार देखो','मुझे ऐसा नहीं लगता !'];
var corTxt = ['शाबाश!','बहुत अच्छा!','सुंदर, बहुत सुंदर!','खूबसूरत '];	

var imgArr=[['tarbuj','tharmas','darwaja','dadi','dhan','taare','thaali','aam (Custom)','nayan (Custom)','dhaan'],
			['patang','fal','bakri','mandir','bhawan','pashu','bartan','fauz','mahal','bhojan'],
			['yamraj','rath','ladki','var','shahar','wakil','yuwak','shatkon','raja','ladka','shalgam','shat'],
			['seb','hal','kshtriya','trishul','santra','haath','gyaani','tribhuj','tridev','trayodash']];

var audArr=[['tarbuj.mp3','tharmas.mp3','darwaja.mp3','dadi.mp3','dhan.mp3','taare.mp3','thaali.mp3','naag.mp3','nayan.mp3','dhaan.mp3'],
			['patang.mp3','fal.mp3','bakri.mp3','mandir.mp3','bhawan.mp3','pashu.mp3','bartan.mp3','fauz.mp3','mahal.mp3','bhojan.mp3'],
			['yamraj.mp3','rath.mp3','ladki.mp3','var.mp3','shahar.mp3','wakil.mp3','yuwak.mp3','shatkon.mp3','raja.mp3','ladka.mp3','shalgam.mp3','shat.mp3'],
			['seb.mp3','hal.mp3','kshtriya2.mp3','trishul.mp3','santra.mp3','haath.mp3','gyaani.mp3','tribhuj.mp3','tridev.mp3','tryodash_1.mp3']];			




var y0 = 220,row=0,col=0,isCorrect=false,isEnd=false,time1,refArr,aud,displayId;
var y,y1 = 385;
var dx0=150,dx1=185;
var tot=imgArr[0].length;
var xArr=[];
var xArr1 = [[400,220],[540,220],[698,220],[850,220],[1000,220],  [426,385],[590,385],[780,385],[990,385],[1010,385]];
var xArr2 = [[400,220],[540,220],[698,220],[850,220],[1000,220],[1100,220],  [426,385],[590,385],[780,385],[990,385],[1010,385],[1110,385]];
var lev=0,curWord=0;

(function() {
	// body...
	window.addEventListener('load', function() {
	  'use strict';
	  const queryString = window.location.search;
	  const urlParams = new URLSearchParams(queryString);
	  displayId = urlParams.get('id');
	  console.log(displayId);
	 
	 // displayId=1;
	  tot=imgArr[displayId].length;
	  init();
	})
function init(){
	$('#text981').hide();
	 aud=document.getElementById('main_audio');
	// aud.onended=function(){
	// 	var mainAud=new Audio("../../../../audio/chitraWord/204"+".mp3");
	// 	mainAud.play();
	// }
	xArr=[];
	refArr = [];
	for(var i=0;i<tot;i++){
		$('#img'+i).attr('xlink:href','images/'+imgArr[displayId][i]+'.jpg');
		if(tot==10){
			if(i%2==0){
				var xp=-400+80*i;
				var yp=-120;
			}else{
				var xp=-400+80*(i-1);
				var yp=55;
			}
			

		}else{
			if(i%2==0){
				var xp=-470+80*i;
				var yp=-120;
			}else{
				var xp=-470+80*(i-1);
				var yp=55;
			}
		}
		xArr[i]=[];
		xArr[i].push(xp);
		xArr[i].push(yp);
		$('#'+imgHolder[i]).attr('transform','translate('+1*xp+','+1*yp+')');
	//	$('#'+imgHolder[i]).attr('width','500px');
	//	$('#'+imgHolder[i]).attr('height','500px');
	}
	if(tot==10){
		$('#'+imgHolder[10]).hide();
		$('#'+imgHolder[11]).hide();
		$('#g1070A').hide();
	}
	Random_arr(refArr,txtArr[displayId][1].length);
	setWord();
	for(var i=0;i<txtArr[displayId][0].length;i++){
		$(inpT[i]).html(txtArr[displayId][0][i]);
		$(inpT[i]).attr('font-size','40px');
		
		$(objArr[i]).click(function(e){
			var mm=getTranslateXY($('#blink')[0])
			//console.log($('#tspan1097').html(),$(this).find('tspan').html().substr(0,1));
			if($('#tspan1097').html()==$('#'+$(this).attr('id')).find('tspan').html()){
			
				y = (row==0)?y0:y1;
				isCorrect=true;
				feedMusic(true);
				
			}else{
				//wrong Answer
				feedMusic(false);				
			}
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
	$('#img'+refArr[curWord-1]).hide();console.log(refArr)
	if(curWord<tot){
		setWord();
	}else{
		$('#blink').hide();
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
		$('#text981').show();
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
				curWord++;
				correctAns();
			}
			
		}
	}else{
		//
		$('#tspan979').html(incTxt[kk]);
		aud=new Audio("../../../../audio/colWord/incTxt"+kk+".mp3");
		aud.play();
		aud.onended=function(){
			$('#text981').hide();
			$('#rectCovF').hide();
			incorrectAns();
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
	var nn = txtArr[displayId][1][refArr[curWord]].substr(0,1)
	if(displayId==3){
		var mm = txtArr[displayId][0].length;
		for(var i=0;i<mm;i++){
			if(txtArr[displayId][0][i].substr(0,1)==nn){
				$('#tspan1097').html(txtArr[displayId][0][i]);
				
					$('#tspan1097').hide();
				
				break;
			}
		}
	}else{
		$('#tspan1097').html(txtArr[displayId][1][refArr[curWord]].substr(0,1));
	}
	
	$('#tspan1106').html(txtArr[displayId][1][refArr[curWord]]);
	$('#g1129').hide();
	console.log(txtArr[displayId][1][refArr[curWord]].length, "is setNow");
	var tr=40-txtArr[displayId][1][refArr[curWord]].length*10;
	$('#g1121').attr('transform','translate('+tr+')');
}

