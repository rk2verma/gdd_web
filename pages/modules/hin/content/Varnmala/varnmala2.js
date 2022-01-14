var nextGame=false,myAns,refArr,txtArr2,txtArr1,txtArr,totLev,levArr,lev,displayId,aud,txtBoxArr1,
txtBoxArr,music, xyArr = [];
(function(){



levArr = [[0,13],[13,38],[38,50]];
var iniArr = [0,13,38];
lev=0;

var dynText = [];				
var dynTextId = [];
txtBoxArr1=["g4116","g4128","g4140","g4152","g4164","g4176","g4188","g4200",
					"g4212","g4224","g4236","g4248","g4260",
					
					"g4272","g4284","g4296","g4308","g4320",
					"g4332","g4344","g4356","g4368","g4380",
					"g4392","g4404","g4416","g4428","g4440",
					"g4452","g4464","g4474","g4484","g4496",
					"g4508","g4520","g4532","g4544","g4556",
					
					"g4568","g4580","g4592","g4604","g4616",
					"g4628","g4640","g4652","g4664","g4676","g4688","g4700"]
 txtBoxArr = ["use1039","use1020","use1058","use1077",
						"use1096","use1115","use1134","use1153","use1191","use1172",
						"use1210","use1229","use1248",
						"use336","use317","use355","use374","use393",
						"use431","use412","use450","use469","use488",
						"use526","use507","use545","use564","use583",
						"use621","use602","use640","use659","use678",
						"use716","use697","use735","use754","use773",
						"use811","use792","use830",
						"use849","use868","use887","use906","use925","use963","use944",
						"use982","use1001"];
                          

      txtArr = ["अ","आ","इ","ई","उ","ऊ","ॠ","ए","ऐ","ओ","औ","अं","अ:",/*13*/
                     "क","ख","ग","घ","ङ",/*18*/
                     "च","छ","ज","झ","ञ",/*23*/
                     "ट","ठ","ड","ढ","ण",/*28*/
                     "त","थ","द","ध","न",/*33*/
                     "प","फ","ब","भ","म",/*38*/
                     "य","र","ल","व","श","ष","स","ह",/*46*/
                     "क्ष","त्र","ज्ञ",'श्र'];               /*50*/
		txtArr1 = [["अ","आ","इ","ई","उ","ऊ","ॠ","ए","ऐ","ओ","औ","अं","अ:"],/*13*/
                     ["क","ख","ग","घ","ङ",/*18*/
                     "च","छ","ज","झ","ञ",/*23*/
                     "ट","ठ","ड","ढ","ण",/*28*/
                     "त","थ","द","ध","न",/*33*/
                     "प","फ","ब","भ","म"],/*38*/
                     ["य","र","ल","व","श","ष","स","ह",/*46*/
                     "क्ष","त्र","ज्ञ",'श्र']];               /*50*/  



                     resetAll();
                     
                     $('#tspan301a').addClass('disabled1');
                     $('#tspan301').addClass('disabled1');
                     $('#tspan303').addClass('disabled1');
                     $('#tspan305').addClass('disabled1');
                     $('#tspan288').addClass('disabled1');
                     $('#g126').addClass('disabled1');



	
	 refArr = [[0,1,2,3,4,5,6,7,8,9,10,11,12],[13,14,15,16,17,18,19,20,21,22,23,24,25,
									26,27,28,29,30,31,32,33,34,35,36,37],[38,39,40,41,42,43,44,45,46,47,48,49]]
var memoryFeed = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
									26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49];									

function init() {
	// body...
	var tot = txtArr.length;
	aud=document.getElementById('main_audio');
	if(totLev==1){
		var aud1=new Audio("audio/GAct02/inst1_c0"+".mp3");			
		}else{
			aud1=new Audio("audio/GAct02/inst1"+".mp3");			
		} 
	aud.onended=function(){
		aud=aud1;
		aud.play();
	}
	//$('.La').show(); // loop to add cross btn.
	for(var i=0;i<50;i++){
			var objE= $('#'+txtBoxArr1[i]).find('text tspan').parent().parent();
      	var trns = $(objE).attr('transform'); //console.log(trns,$(objE).next().next().attr('transform'));
      	$(objE).next().next().attr('transform',trns);
      }  
      var st =levArr[2][0];
		var tot=levArr[2][1];
		//console.log(totLev);
      if(totLev==1){
			for(var i=st;i<tot;i++){
				$('#'+txtBoxArr1[i]).hide();
			}
      }else{
				$('#'+txtBoxArr1[i]).show();
      } 
}

window.onload=function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  totLev = urlParams.get('totLevVal');
  if(totLev==1){
  		$('#tspan301a').hide();
		$('#tspan301').show();
  }else{
  		$('#tspan301a').show();
		$('#tspan301').hide();
  }
}
  
var timoutTimer;

$(document).ready(function(){
    init();
});

})()





function snapBack(ele){
  var drgInd = txtBoxArr1.indexOf(ele.id);
  TweenLite.to(ele, 0.3, {x:xyArr[drgInd].x, y:xyArr[drgInd].y});
}


function getTranslateXY(elm) {
    var style = window.getComputedStyle(elm);
    var matrix = new WebKitCSSMatrix(style.transform); 
    return {x:matrix.m41,y:matrix.m42};
  }

function onDrop(dragged, dropped) {
	
	var a = $(dragged).find('text tspan').html();
	var b = $(dropped).find('text tspan').html();
	$(dragged).find('text tspan').html(b);
	$(dropped).find('text tspan').html(a);
  	xy= getTranslateXY(dropped); 
  TweenLite.to(dragged, 0.3, {x:xy.x, y:xy.y});
  var drgId = dragged.id; //console.log(drgId);
  var drgInd = txtBoxArr1.indexOf(drgId);
  var tarInd = txtBoxArr1.indexOf(dropped.id);
  //ansArr[tarInd] = namArr[refArr[drgInd]];
  //checkThis(tarInd,dragged);

}

// OK btn 
$('#g128').css('cursor','pointer');
$('#g128').click(function () {
	// body...
	$('#g197').hide();
	$('#g283,#g292').show();
	var st=levArr[lev][0];
	var tot=levArr[lev][1];
	for(var i=st;i<tot;i++){
		$('#'+txtBoxArr1[i]).children('.B.S').removeClass('S1');
	}
	$('.La').hide();
	if(nextGame){
		nextGame=false;	
		aud=new Audio("audio/GAct02/inst"+(lev+2)+".mp3");
		aud.play();
		endGame();		
	}else{
		if(myAns){			
			if($('#text113D').css('display')=='none'){
				$('#g197').show(); 
				$('#g283,#g292').hide();
				$('#text113D').show();
				$('#text113C').hide();
				$('#text113').hide();

			}else{
				pauseGame();
				var st1=levArr[lev][0];
				var tot1=levArr[lev][1];
				for(var i=st1;i<tot1;i++){
					$('#'+txtBoxArr[i]).prev().removeClass('U');
					$('#'+txtBoxArr[i]).next().find('text tspan').removeClass('T');
					$('#'+txtBoxArr[i]).removeClass('S');
					$('#'+txtBoxArr1[i]).removeClass('drgObj');					
				}	
				lev=0;
				resetAll();				
			}
			
		}else{
			playGame();
		}
		
	}
})

// Submit btn 
$('#g283,#g292').css('cursor','pointer');
$('#g283,#g292').click(function (){
	// body...
	$('#g283,#g292').hide();
	aud.pause();
	pauseGame();
	myAns=true;
	var st=levArr[lev][0];
	var tot=levArr[lev][1];
	for(var i=st;i<tot;i++){
		if($('#'+txtBoxArr1[i]).find('text tspan').html()==txtArr[i]){
			//console.log('correct at'+i);
		}else{
			//console.log('in-correct at '+i) // g4116 - use1039
			$('#'+txtBoxArr1[i]).children('.B.S').addClass('S1')
			myAns=false;
			$('#'+txtBoxArr1[i]).children('.L.M').next().show();
		}

	}
	//console.log("0-"+$('#'+txtBoxArr1[0]).children().next().next().next().addClass('S1'));
	//console.log(i+"-"+myAns);
	if(myAns){
		$('#text113C').show();
		$('#text113,#text113D').hide();
		if(lev<totLev) { 
			nextGame=true;
		}else{
			//endGame
			//lev++;
			//$('#g128').hide();
		}
		aud=new Audio("audio/GAct02/Win1"+".wav");
		aud.play();
	}else{
		$('#text113C,#text113D').hide();
		$('#text113').show();
		aud=new Audio("audio/GAct02/Wrong1"+".wav");
		aud.play();
	}
	$('#g197').show();
	
	
});

function startActivity(lev){ 
	//console.log(lev,levArr)
	//$('#g197').hide();
	

	var st=levArr[lev][0];
	var tot=levArr[lev][1];
	for(var i=st;i<tot;i++){

		$('#'+txtBoxArr[i]).prev().addClass('U');
		$('#'+txtBoxArr[i]).next().find('text tspan').addClass('T');
		$('#'+txtBoxArr[i]).addClass('S');

		$('#'+txtBoxArr1[i]).addClass('drgObj');
	}
	var droppables = $(".drgObj");
	var overlapThreshold = "50%";


	Draggable.create('.drgObj',{
	      throwProps:true,
	      bounds:"#path267",
	      zIndexBoost: true,
	      zIndex: 9099,
	  onPress: function(){
	    var curEl = this.target;
	    var  curTar = curEl;
	    curEl.parentNode.appendChild(curEl);
	    aud.pause();
	    var drgId = curEl.id; 
	    var drgInd = txtBoxArr1.indexOf(drgId);
	    var lc1=txtArr.indexOf($(curEl).find('text tspan').html());
	    aud=new Audio('audio/alphabet_hindi/s'+(lc1+1)+'.wav');
	    aud.play();
	    //var kk=txtArr1[lev][refArr[drgInd]];
	    // var ind = ansArr.indexOf(kk);
	    // if(ind>-1){
	    //   ansArr[ind]=undefined;
	    // }
	  },
	 
	  onDragEnd:function(e) {
	    var i = droppables.length;
	    while (--i > -1) {
	      if (this.hitTest(droppables[i], overlapThreshold)) {
	        onDrop(this.target, droppables[i]);
	        return 0;
	      }
	    }
	    snapBack(this.target);
	  }
	});


}

function pauseGame(){
	var st1=levArr[lev][0];
		var tot1=levArr[lev][1];
		for(var i=st1;i<tot1;i++){
			$('#'+txtBoxArr1[i]).removeClass('drgObj');
			Draggable.get('#'+txtBoxArr1[i]).disable();
		}	
}
function playGame(){
	var st1=levArr[lev][0];
		var tot1=levArr[lev][1];
		for(var i=st1;i<tot1;i++){
			$('#'+txtBoxArr1[i]).addClass('drgObj');
			Draggable.get('#'+txtBoxArr1[i]).enable();
		}	
}
function endGame(){
		var st1=levArr[lev][0];
		var tot1=levArr[lev][1];
		for(var i=st1;i<tot1;i++){
			$('#'+txtBoxArr[i]).prev().removeClass('U');
			$('#'+txtBoxArr[i]).next().find('text tspan').removeClass('T');
			$('#'+txtBoxArr[i]).removeClass('S');
			$('#'+txtBoxArr1[i]).removeClass('drgObj');
			//Draggable.get('#'+txtBoxArr1[i]).disable();
		}	
		lev++;

		startActivity(lev);
}


function resetAll(){      

        txtArr1[0].sort(() => (Math.random() > .5) ? 1 : -1);
        txtArr1[1].sort(() => (Math.random() > .5) ? 1 : -1);
        txtArr1[2].sort(() => (Math.random() > .5) ? 1 : -1);
		 txtArr2=[];
		for(var i=0;i<txtArr1[0].length;i++){
			txtArr2.push(txtArr1[0][i]);
		}
		for(var i=0;i<txtArr1[1].length;i++){
			txtArr2.push(txtArr1[1][i]);
		}
		for(var i=0;i<txtArr1[2].length;i++){
			txtArr2.push(txtArr1[2][i]);
		}


	   for(var i=0;i<50;i++){
	      $('#'+txtBoxArr1[i]).find('text tspan').html(txtArr2[i]);
	      //$('#'+txtBoxArr[i]).next().find('text tspan').addClass('disabled1');
	     // $('#'+txtBoxArr1[i]).click(onclickMethod);
	      xyArr[i] = getTranslateXY(document.getElementById(txtBoxArr1[i]));

		//	Draggable.get('#'+drgArr[i]).disable();

			$('#'+txtBoxArr[i]).prev().removeClass('U');
			$('#'+txtBoxArr[i]).next().find('text tspan').removeClass('T');
			$('#'+txtBoxArr[i]).removeClass('S');
			$('#'+txtBoxArr1[i]).removeClass('drgObj');
	
	   }

         var arr1 = ["a", "b", "c", "d"];
         arr1.sort(() => (Math.random() > .5) ? 1 : -1);
         //console.log(txtArr2);
         startActivity(lev);
   }