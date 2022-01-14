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
var txtBoxArr = ["tspan815","tspan776","tspan854","tspan893","tspan932","tspan971","tspan1010","tspan1049",
                     "tspan1127","tspan1088","tspan1166","tspan1205","tspan1244",
                     "tspan1322","tspan1283","tspan1361","tspan1400","tspan1439",
                    "tspan1517", "tspan1478","tspan1556","tspan1595","tspan1634",
                     "tspan1712","tspan1673","tspan1751","tspan1790","tspan1829",
                     "tspan1907","tspan1868","tspan1946","tspan1985","tspan2024",
                     "tspan2102","tspan2063","tspan2141","tspan2180","tspan2219",
                     "tspan2297","tspan2258","tspan2336","tspan2375","tspan2414","tspan2453","tspan2492","tspan2531",
                     "tspan2609","tspan2648","tspan2687","tspan2726"];
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
                     "त्र","क्ष","ज्ञ",'श्र']               /*50*/

                     for(var i=0;i<50;i++){
                        $('#'+txtBoxArr[i]).html(txtArr[i]);
                         $('#'+txtBoxArr[i]).attr('font-size',"27px");
                         $('#'+txtBoxArr[i]).addClass('disabled1');
                         $('#'+txtBoxArr[i]).css('cursor','pointer');
                         $('#'+txtBg[i]).css('cursor','pointer');
                         $('#'+txtBg[i]).click(onclickMethod);
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
		var mainAud=new Audio("inst1"+".mp3");
		mainAud.play();
	}
}

window.onload=function() {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  displayId = urlParams.get('id');
  
  
  }
  
var timoutTimer;

function onclickMethod(e){
	var mm = txtBg.indexOf(e.currentTarget.id);console.log(e.currentTarget.id)
	var jkm = memoryFeed.indexOf(mm);
	
	if(memoryFeed.length > 0 && jkm>=0) { memoryFeed.splice(jkm,1);};
	//console.log(memoryFeed);
	
	var obj = document.getElementById(txtBg[mm]); 
	obj.setAttribute("fill","#ffdbac");
	var kk;
		kk = (1+mm);
		document.getElementById('myanimsvg').src="images/Anim_"+kk+".html";
	

	

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
