var displayId,aud;
(function(){





var dynText = [];				
var dynTextId = [];
var txtBoxArr = ["use5308","use5289","use5327","use5346","use5365","use5384","use5403","use5422",
                     "use5460","use5441","use5479","use5498","use5517",
                     "use5555","use5536","use5574","use5593","use5612",
                    "use5650", "use5631","use5669","use5688","use5707",
                     "use5745","use5726","use5764","use5783","use5802",
                     "use5840","use5821","use5859","use5878","use5897",
                     "use5935","use5916","use5954","use5973","use5992",
                     "use6030","use6011","use6049","use6068","use6087","use6106","use6125","use6144",
                     "use6195","use6176","use6214","use6233"];
      var higherTxt=['g2253','g2292','g2331','g2370','g2409','g2448','g2487','g2526',
                     'g2604','g2643','g2682','g2721'];
      var txtBg = ["g771","g810","g849","g888","g927","g966","g1005","g1044",
                  "g1083","g1122","g1161","g1200","g1239",
                  "g1278","g1317","g1356","g1395","g1434",
                  "g1473","g1512","g1551","g1590","g1629",
                  "g1668","g1707","g1746","g1785","g1824",
                  "g1863","g1902","g1941","g1980","g2019",
                  "g2058","g2097","g2136","g2175","g2214",
                  "g2253","g2292","g2331","g2370","g2409","g2448","g2487","g2526",
                  "g2604","g2643","g2682","g2721"]                      

      var txtArr = ["अ","आ","इ","ई","उ","ऊ","ॠ","ए","ऐ","ओ","औ","अं","अ:",/*13*/
                     "क","ख","ग","घ","ङ",/*18*/
                     "च","छ","ज","झ","ञ",/*23*/
                     "ट","ठ","ड","ढ","ण",/*28*/
                     "त","थ","द","ध","न",/*33*/
                     "प","फ","ब","भ","म",/*38*/
                     "य","र","ल","व","श","ष","स","ह",/*46*/
                     "क्ष","त्र","ज्ञ",'श्र']               /*50*/

                     for(var i=0;i<50;i++){
                        $('#'+txtBoxArr[i]).next().find('text tspan').html(txtArr[i]);
                        $('#'+txtBoxArr[i]).next().next().click(onclickMethod);
                         // $('#'+txtBoxArr[i]).attr('font-size',"27px");
                         // $('#'+txtBoxArr[i]).addClass('disabled1');
                         // $('#'+txtBoxArr[i]).css('cursor','pointer');
                         // $('#'+txtBg[i]).css('cursor','pointer');
                         // $('#'+txtBg[i]).click(onclickMethod);
                     }
                     
                    /* $('#g771 g g g path').next().next().next().attr('fill','#ff0000');
                     
                     for(var i=38;i<50;i++){
                        $('#'+higherTxt[i-38]).css('display','none');
                        $('#'+txtBoxArr[i]).html('');
                     }*/
                     $('#tspan2777').addClass('disabled1');
                     $('#tspan2779').addClass('disabled1');
	

var memoryFeed = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
									26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49];									

function init() {
	// body...
	var tot = txtArr.length;
	aud=document.getElementById('main_audio');
	aud.onended=function(){
		aud=new Audio("audio/alphabet_hindi/inst1"+".mp3");
		aud.play();
	}
}

window.onload=function() {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  displayId = urlParams.get('id');console.log(displayId);
  if(displayId==0)
  	for(var i=38;i<50;i++){
  		$('#'+txtBoxArr[i]).prev().prev().prev().hide();
  		$('#'+txtBoxArr[i]).prev().prev().hide();
  		$('#'+txtBoxArr[i]).prev().hide();
  		$('#'+txtBoxArr[i]).hide();
  		$('#'+txtBoxArr[i]).next().hide();
  		$('#'+txtBoxArr[i]).next().next().hide();
  	}
  }
  
var timoutTimer;

function onclickMethod(e){
	aud.pause();
	
	//console.log($(this).attr('id')+$(this).prev().prev().attr('id'))
	var mm = txtBoxArr.indexOf($(this).prev().prev().attr('id')); //console.log(e.currentTarget.id)
	var jkm = memoryFeed.indexOf(mm);
	
	if(memoryFeed.length > 0 && jkm>=0) { memoryFeed.splice(jkm,1);};
	console.log(mm);
	
	
	$(this).prev().prev().attr('style','fill:#ffdbac');
	//obj.setAttribute("fill","#ffdbac");
	var kk;
		kk = (1+mm);
		document.getElementById('myanimsvg').src="images/Anim_"+kk+".html";
	

	

	if(timoutTimer) { clearTimeout(timoutTimer);};
	 	timoutTimer = setTimeout(myFunction, 2500);
		//stopMusic();
	function myFunction() {
	  
	  var music = new Audio('audio/alphabet_hindi/s'+kk +'.wav');
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
