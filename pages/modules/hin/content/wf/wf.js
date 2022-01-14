var txtArr = ["आ","अ","इ","ई","उ","ऊ","ऋ","ए","एै","ओ","औ","अं","अः","ख","क","ग","घ","ङ","छ","च","ज","झ",
				"ञ","ठ","ट","ड","ढ","ण","थ","त","द","ध","न","फ","प","ब","भ","म","र","य","ल","व","श","ष","स","ह",
				"त्र","क्ष","ज्ञ","श्र","ि","ा","ी","ु","ू","े","ृ","ै","ो","ौ","़","ं","ँ","्र"];
var txtBoxArr = ["tspan5877","tspan5913","tspan5950","tspan5987","tspan6024","tspan6061","tspan6098","tspan6135","tspan6172","tspan6209",
					"tspan6246","tspan6283","tspan6320","tspan6357","tspan6394","tspan6431","tspan6468","tspan6505","tspan6542","tspan6579",
					"tspan6616","tspan6653","tspan6690","tspan6727","tspan6764","tspan6801","tspan6838","tspan6875","tspan6912","tspan6949",
					"tspan6986","tspan7023","tspan7060","tspan7097","tspan7134","tspan7171","tspan7208","tspan7245","tspan7282","tspan7319",
					"tspan7356","tspan7393","tspan7430","tspan7467","tspan7504","tspan7541","tspan7578","tspan7615","tspan7652","tspan7689",
					"tspan7726","tspan7763","tspan7800","tspan7837","tspan7874","tspan7911","tspan7948","tspan7985","tspan8022","tspan8059",
					"tspan8096","tspan8133","tspan8287","tspan8324"];
var firstletters = new Array("आज","आह","आम","बल","चर","दल","डर","ईख","आठ","घन","घर","हल","हम","ईद","इन","जल","जन","कल","कर","मन","नट","पत्र","षट","सर","फल","उस","अब","आप","आम","आग","आठ","इस","इत्र","इन","ईख","ईट","ईद","ईश","उस","उन","उग","उठ","ऊन","एक","ओम","ओस");
var audiofirst = new Array("aaj","aah","aam","bal","char","dal","dar","eekh","aath","ghan","ghar","hal","hum","Id","in","jal","jan","kal","kar","man","nut","patra","shut","sar","phal","us","ab","aap","aam","aag","aath","is","itra","in","inkh","int","id","ish","us","un","ug","uth","oon","ek","om","os");
var secondletters = new Array("आलू","भालू","झूला","चूड़ी","बूढ़ा","शेर","देश","सेब","रेत","पेड़","देर","मेला","रेल","बेल","पैसा","पैर","थैला","मेल","कौआ","टोपी","रोटी","धोबी","गोभी","डोर","मोर","कूली","आँख","आटा","आभा","आशा","आना","आधा","आता","इरा","उमा","उड़ा","उठा","उगा","ऊषा","काम","कार","कान","काठ","काज","काल","खाल","खरा","खड़ा","खाता");
var audiosecond = new Array("aalu","baalu","jula","chudi","bhuda","sheer","desh","seeb","reeth","peed","deer","mela","reel","bheel","paisa","pair","thaila","maila","kauva","topi","roti","dhobhi","gobhi","door","moor","Kuli","ankh","aata","aabha","asha","aana","aadha","aata2","ira","uma","uda","utha","ugaa","usha","kaam","car","kaan","kaath","kaaj","kaal","khaal","khra","khara","khata");
var threeletters = new Array("ईमान","आइना","दवाई","लड़की","दीपक","मछली","चेहरा","सवेरा","अनार","मैदान", "मोटर","टोकरी","कटोरी","रसोई","नौकरी","चिमनी","दुकान","गुड़िया","चुहिया","कुसुम","बुढ़िया","अगर","अमन","असर","अक्षर","अमर", "आकर","आफत","आदर","आसन","आदत","इधर","इंजन","इकाई","उधर","उछल","उतर","उमस","ऊपर","एकड़","एकल","ऐनक", "ओस", "ओर","औरत","औषध","औसत","कमर","कसक","कपट");
var audiothree = new Array("eman","aaena","davaae","ladki","deepak","machli","chehera","saveera","annar","maidaan","motar","tokri","katori","rasoe","noukri","chimney","dukan","gudiya","chuhiya","kusum","budhiya","agar","aman","asar","akshar","amar","aakar","aafat","aadar","aasan","aadat","idhar","engine","ikaai","udhar","uchhal","utar","umas","upar","ekar","ekal","aenak","os","or","aurat","aushadh","ausat","kamar","kasak","kapat");

var finalletters_arr = new Array(firstletters,secondletters,threeletters);
var finalaudio_arr = new Array(audiofirst,audiosecond,audiothree);
var audioPath = new Array("../../../../audio/GAct12_hindi/first/","../../../../audio/GAct12_hindi/second/","../../../../audio/GAct12_hindi/third/");
var audioP = "",lineArr=['#g8189 line','#g8218 line','#g8247 line'];
$('#g8383,#g8392,#subCover,#g8454 rect').hide();
var curLev=0,curObj,displayId,score,WClick,aud1;
var music;
var txtTopArr = [];									
(function(){
	//console.log('Hi',txtArr.length);
	//console.log('Hi',firstletters.length,audiofirst.length,secondletters.length,audiosecond.length,threeletters.length,audiothree.length);
	for(var i=0;i<txtBoxArr.length;i++){
		$('#'+txtBoxArr[i]).html(txtArr[i]);
		$('#'+txtBoxArr[i]).attr({'font-size':"25px",'y':'30'})
		$('#'+txtBoxArr[i]).parent().parent().parent().next().css('cursor','pointer');
		$('#'+txtBoxArr[i]).parent().parent().parent().next().bind('click',onClickTxt);
	}

	for(i=0;i<3;i++){
		$(lineArr[i]).hide();
	}

	$('#g8454').css('cursor','pointer');
	$('#g8454').click(function(){ // audioBtn
		//Repeat Word.
		playWord();
	})

	music = document.getElementById('main_audio');
	music.onended=function(){
		if(displayId==0){
			music=new Audio('../../../../audio/GAct12_hindi/inst_c0.mp3');
		}else if(displayId==1){
			music=new Audio('../../../../audio/GAct12_hindi/inst_c1.mp3');
		}else{
			music=new Audio('../../../../audio/GAct12_hindi/inst.mp3');
		}
		
		music.play();
		music.onended=function(){
			playWord();
		}
	}
	$('#subCover').css('cursor','pointer');
	$('#subCover').click(function(){ // submitBtn
		//Compare Word.
		var rand = Math.round(Math.random() * 6) + 1;
		if($('#tspan8388').html()==$('#tspan8369').html()){
			console.log('correct...');
			score++;
			$('#tspan8158').html(''+score);
			if(aud1!=undefined) aud1.pause();
			aud1=new Audio("../../../../audio/Feedback_Hindi/Correct" + rand + ".mp3");
			aud1.play();
			aud1.onended=function(){
				if(score<10){
					nextWord();	
				}else{
					if(curLev==Number(displayId)){
						$('#conclusion_ost').show();
						$('#subCover').hide();
					}else{
						$('#popup').show();
					}
				}				
			}
		}else{
			
			if(aud1!=undefined){ aud1.pause();}
			aud1=new Audio("../../../../audio/Feedback_Hindi/Wrong" + rand + ".mp3");
			aud1.play();
			$(lineArr[WClick]).show();
			
			if(WClick<2){
				WClick++;
			}else{
				$('#g8383,#g8392').show();
			}
		}

	});

	$('#rect8261').css('cursor','pointer'); // clearBtn
	$('#rect8261').click(function(){
		var tt = $('#tspan8369').html();
		//speak("आप अपनी पसंद से दो अक्षर");
		if(tt.length>0){
			$('#tspan8369').html(tt.substr(0,tt.length-1));
			if($('#tspan8369').html().length>0){
				$('#subCover').show();
			}else{
				$('#subCover').hide();
			}
		}
		//$('#tspan8369').html('');
	});




window.onload=function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  displayId = urlParams.get('id');
  console.log(displayId);
  switch(displayId){
  	case '0':
  		$('#tspan5705A,#tspan5696A,#tspan8470B,#tspan8472B').show();
  		$('#tspan5705,#tspan5696,#tspan8470A,#tspan8472A,#tspan8470,#tspan8472').hide();
  		$('#g8488, #g8509').show();
  		$('#g8523, #g8544').hide();
  		$('#g8558, #g8579').hide();
  		$('#g8581 rect').hide();
  		$('#g8546 rect').hide();
  		enableMatra();
  		$('#g8511 rect').attr('style','fill:green;stroke:black;stroke-width:1;opacity:0.1');
			curLev=0;	
			
  		
  	break;
  	case '1':
  		$('#tspan5705A,#tspan5696A,#tspan8470A,#tspan8472A').show();
  		$('#tspan5705,#tspan5696,#tspan8470,#tspan8472,#tspan8470B,#tspan8472B').hide();
  		$('#g8488, #g8509').show();
  		$('#g8523, #g8544').show();
  		$('#g8558, #g8579').hide();
  		$('#g8581 rect').hide();
  		
  	break;
  	default:
  		$('#tspan5705,#tspan5696,#tspan8470,#tspan8472').show();
  		$('#tspan5705A,#tspan5696A,#tspan8470A,#tspan8472A,#tspan8470B,#tspan8472B').hide();
  		$('#g8488, #g8509').show();
  		$('#g8558, #g8579').show();
  		$('#g8523, #g8544').show();

  	break;
  }
  	//$('#g8511, #g8546, #g8581').hide();
  	/*
  	if(displayId=='1'){

  	}else if(displayId=='2'){

  	}else{
  		$('#g8511 rect').show();  		
  	}
	*/
  }
  $('#g8511,#g8546,#g8581').css('cursor','pointer');
  $('#g8511 rect').bind('click',enableMatra);
  $('#g8546 rect,#g8581 rect').bind('click',enableAllMatra);

})()

disableMatra();
function ModifyText(){

}
function disableMatra(){
	$('#tspan8369').html('');
	$('#g8511 rect,#g8546 rect,#g8581 rect').attr('style','fill:blue;stroke:black;stroke-width:1;opacity:0.1')
	if(displayId=='0'){
		$('#g8546 rect,#g8581 rect').attr('style','fill:blue;stroke:black;stroke-width:1;opacity:0')
	}else if(displayId=='1'){
		$('#g8581 rect').attr('style','fill:blue;stroke:black;stroke-width:1;opacity:0')
	}
	for(var i=0;i<64;i++){
		$('#'+txtBoxArr[i]).parent().parent().parent().next().css('cursor','default');
		$('#'+txtBoxArr[i]).parent().parent().parent().next().find('path').attr({'fill-opacity':'0.4','fill':'#ffffff'});
		$('#'+txtBoxArr[i]).parent().parent().parent().next().unbind('click',onClickTxt);
	}
}
function enableMatra(e){
	disableMatra();
	for(var i=0;i<50;i++){
		$('#'+txtBoxArr[i]).parent().parent().parent().next().css('cursor','pointer');
		$('#'+txtBoxArr[i]).parent().parent().parent().next().find('path').attr({'fill-opacity':'0.0','fill':'#ffffff'});
		$('#'+txtBoxArr[i]).parent().parent().parent().next().bind('click',onClickTxt);
	}
	$(this).attr('style','fill:green;stroke:black;stroke-width:1;opacity:0.1');
	curLev=0;	
	init();
}
function enableAllMatra(e){
	disableMatra();
	for(var i=0;i<64;i++){
		$('#'+txtBoxArr[i]).parent().parent().parent().next().css('cursor','pointer');
		$('#'+txtBoxArr[i]).parent().parent().parent().next().find('path').attr({'fill-opacity':'0.0','fill':'#ffffff'});
		$('#'+txtBoxArr[i]).parent().parent().parent().next().bind('click',onClickTxt);
	}
	$(this).attr('style','fill:green;stroke:black;stroke-width:1;opacity:0.1');
	if($(this).parent().attr('id')=='g8546'){
		curLev=1;
	}else{
		curLev=2;
	}	
	init();
}

function onClickTxt(e){
	//console.log($(this).attr('id'));
	//console.log($(this).prev().find('tspan').html())
	$('#subCover').show();
	var clkTxt = $(this).prev().find('tspan').html();
	var oldTxt= $('#tspan8369').html();
	$('#tspan8369').html(oldTxt+clkTxt);	
}	


function init(){
	$('#g8383,#g8392,#popup').hide();
	$('#g8454 rect').show();
	curObj=0;
	score=0;
	WClick=0;
	for(i=0;i<3;i++){
		$(lineArr[i]).hide();
	}
	qArray = new Array();
	Random_arr(qArray,finalletters_arr[curLev].length-1);
	$('#tspan8369').html('')
	$('#tspan8388').html(finalletters_arr[curLev][qArray[curObj]]);
	//playWord();

}


function Random_arr(Random_array,st)
{
	var Random_num_array = new Array();
	for (var i=0; i<st; i++)
	{
		Random_num_array[i] = i + 1;
	}
	while (Random_num_array.length > 0)
	{
		var r = Math.floor(Math.random() * Random_num_array.length);
		Random_array.push(Random_num_array[r]);
		Random_num_array.splice(r,1);
	}
}
function playWord(){
	var audioP = audioPath[curLev]+finalaudio_arr[curLev][qArray[curObj]];
	var aud2 = new Audio(audioP);
	aud2.play();
	mouthAnimation('neutral');
	aud2.onended=function(){
		mouthAnimation('stop');
	}
}
function nextWord(){
	$('#g8383,#g8392').hide();
	curObj++;
	WClick=0;
	for(i=0;i<3;i++){
		$(lineArr[i]).hide();		
	}
	$('#tspan8369').html('')
	$('#tspan8388').html(finalletters_arr[curLev][qArray[curObj]]);
	playWord();
}

//**** Mouth Animation 

var animInterval,p0,p1;
var animState=false;
function mouthAnimation(cond){ 
   var happy0 = 'M 14.133 -3.903 L 13.983 -1.983 L 14.373 -0.153 M -12.115 -1.785 L -12.32 -0.636 Q -0.064 3.843 13.977 -1.999 Q -0.035 8 -12.299 -0.595 M -12.423 1.066 L -12.32 -0.575 Z';
   var happy1 ='M 14.133 -3.903 L 13.983 -1.983 L 14.373 -0.153 M -12.115 -1.785 L -12.32 -0.636 Q -0.064 3.843 13.977 -1.999 Q 0.55 15.523 -12.299 -0.595 M -12.423 1.066 L -12.32 -0.575 Z';
   var sad0='M 6.95 -1.25 L 7.075 -0.95 L 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q -0.446 -1.829 7.075 -0.95 M -7.175 -0.3 L -7.325 0.05';
   var sad1='M 6.95 -1.25 L 7.075 -0.95 L 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q -0.623 -2.228 7.075 -0.95 Q -0.324 2.132 -7.152 -0.302 M -7.175 -0.3 L -7.325 0.05 Z';
   var neu0='M 6.95 -1.25 L 7.075 -0.95 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q 0.09296875 2.497265625 7.075 -0.95 M -7.175 -0.3 L -7.325 0.05'
   var neu1='M 6.95 -1.25 L 7.075 -0.95 L 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q 0.093 2.4973 7.075 -0.95 Q 0.263 7.843 -7.152 -0.302 M -7.175 -0.3 L -7.325 0.05 Z'
   var stt=' M 6.95,-1.25 0.125,0.3 0.2,0.45 M -7,-0.65 -7.175,-0.3 q 7.26796875,2.7972656 14.25,-0.65 m -14.25,0.65 -0.15,0.35';
   switch(cond){ 
      case 'happy' :
         p0=happy0;p1=happy1;
         animInterval = setInterval(animatewith,300);
      break;
         case 'sad' :
         p0=sad0;p1=sad1;
         animInterval = setInterval(animatewith,300);
      break;
         case 'neutral' :
         p0=neu0;p1=neu1;
         animInterval = setInterval(animatewith,300);
      break;
         case 'stop' :
         clearInterval(animInterval);
         $('#mouthId g g path').attr('d',stt);
      break;
   }
}

function animatewith(){
   animState=!animState;
   if(animState==false){      
      $('#mouthId g g path').attr('d',p0);
      $('#mouthId g g path').attr('fill','#e32f02')
   }else{
      $('#mouthId g g path').attr('d',p1)
      $('#mouthId g g path').attr('fill','#e32f02')
   }
}

//** 

function speak (message) {
  var msg = new SpeechSynthesisUtterance(message)
  var voices = window.speechSynthesis.getVoices()
  msg.voice = voices[1]
  window.speechSynthesis.speak(msg)
}