var drgArr = ['path2001','path2005','path2009','path2013','path2017','path2021','path2025','path2029','path2033','path2037'];
var music,overlapThreshold="50%",count=0,refArr=[];
var msgFeed=[["Pull one fruit from Ramu's","table and put it on Geeta's",'table.','','',''],
			
			["Now how many fruits are","there on Geeta's table?","With the help of the number","pad, enter the digits here.",'',''],
			["There was no fruit on Geeta's table.","You put or added one fruit on her ",
			"table. This is called Addition. For ",
			"addition, '+' sign is used.","Pull another fruit from Ramu's table","and put it on Geeta's table."],

['','','','','',''],['','','','','','']];



var dragAudio_Arr = new Array("inst2_1.mp3","inst3_1.mp3","inst4_1.mp3","inst5_1.mp3","inst6_1.mp3","inst5_1.mp3","inst8_1.mp3","inst9_1.mp3","inst9_1.mp3","inst10_1.mp3");
var dropAudio_Arr = new Array("inst1_2.mp3","inst2_2.mp3","inst3_2.mp3","inst4_2.mp3","inst5_2.mp3","inst6_2.mp3","inst7_2.mp3","inst8_2.mp3","inst9_2.mp3","inst10_2.mp3");
var result_Arr = new Array("inst1_3.mp3","inst2_3.mp3","inst3_3.mp3","inst4_3.mp3","inst5_3.mp3","inst6_3.mp3","inst7_3.mp3","inst8_3.mp3","inst9_3.mp3","inst10_3.mp3");
var pos_arry = new Array("Correct Answer!","Excellent!","Great!","Congratulation!","Perfect!","Correct!","Correct! Your answer is right.","Great!","Excellent!","Great!");
var neg_arry = new Array("Check it again!","Please check them carefully!","Try it again!",
			"Please be mindful when you  check the numbers!","Be careful friend!","Check it again!");


var inp1='#tspan1227',inp2='#tspan1236',oup='#tspan1275';
var xyArr=[];
var keyBtn=['g1575','g1594','g1613','g1632','g1651','g1670','g1689','g1708','g1727','g1746','g1765'];

(function(){
window.addEventListener('load', function() {
  'use strict';
  //console.log(' loaded window')
  setMouthId('#path1544');
  init();
})

})();

function init(){
	$('#g2064').hide();
	$(inp1).html('0');
	$(inp2).html('0');
	$(oup).html('');
	for(var i=0;i<10;i++){
		$('#'+drgArr[i]).attr('class','drgObj');
		xyArr[i] = getTranslateXY(document.getElementById(drgArr[i]));
		$('#'+keyBtn[i]).bind('click',onKeyClick);
	}
	$('#'+keyBtn[10]).bind('click',onKeyClick)
	createDrag();
	music = document.getElementById('main_audio');
	music.onended=function(){
		mouthAnimation('neutral');
		music=new Audio('../../../audio/Mact10/menu.mp3');
		music.play();
		updateMessage(0);
		
	}
}


function createDrag(){
	$('#cover-rect').hide();
	Draggable.create('.drgObj', 
	{
      throwProps:true,
      bounds:"#path1212",
      zIndexBoost: true,
      zIndex: 9099,
  onPress: function(){
    var curEl = this.target;
    var  curTar = curEl;
    curEl.parentNode.appendChild(curEl);     
    var drgId = curEl.id; //console.log(drgId);
    var drgInd = drgArr.indexOf(drgId);
    if(music) {music.pause();}
  }, 
  onDragStart:function(e){
    if($(this).attr('y')<0){
      count--;
      refArr.splice(refArr.indexOf(this.target),1);  
      arrangeAll(); 
     }
     //disableAll();
  },  
  onDragEnd:function(e) {
      if(music){music.pause();}
      if (this.hitTest($('#path1773'), overlapThreshold)) {
      	updateMessage(1);
         submitEnable=true;
         $('#cover-rect1').hide();
       if(count<5){
          var xPos = count*78+125; //135,215 295 375 455
          var yPos = 362;
         }else{
           xPos = (count-5)*78+125;
           yPos = 442;
         }
         music = new Audio('../../../audio/Mact10/'+dropAudio_Arr[count]);
         music.play();
         mouthAnimation('happy');
         music.onended=function(){
					mouthAnimation('stop');
				}
				  count++;
         TweenLite.to(this.target, 0.3, {x:xPos, y:yPos});
         Draggable.get(this.target).disable();
         refArr.push(this.target);
         $('#cover-rect').show();
          $(inp2).html('1');  
          if($(oup).html()!=''){
          	$(inp1).html($(oup).html());
          	$(oup).html('');
          }
      }else{
       snapBack(this.target);
      }
      
  }  
});
}


function updateMessage(idx){
		if(idx==11){
			$('#tspan2048').html('Great! Now Geeta has 10 fruits with');
			$('#tspan2050').html('her.');
			$('#tspan2052').html('Friends, if you want to play more,');
			$('#tspan2054').html('click on Me. If you want to play any');
			$('#tspan2056').html('other game, click on Home.');
			$('#tspan2058').html('');
		}else if(idx>2){
			$('#tspan2048').html(pos_arry[idx-2]);
			$('#tspan2050').html("Pull one fruit from Ramu's");
			$('#tspan2052').html("table and put it on Geeta's ");
			$('#tspan2054').html('table.');
			$('#tspan2056').html('');
			$('#tspan2058').html('');
		}else{
			$('#tspan2048').html(msgFeed[idx][0]);
			$('#tspan2050').html(msgFeed[idx][1]);
			$('#tspan2052').html(msgFeed[idx][2]);
			$('#tspan2054').html(msgFeed[idx][3]);
			$('#tspan2056').html(msgFeed[idx][4]);
			$('#tspan2058').html(msgFeed[idx][5]);
		}
		
		$('#g2064').show();
}

function feedMsg(kk){
	$('#tspan2048').html('');
	$('#tspan2050').html(neg_arry[kk].substr(0,28));
	$('#tspan2052').html(neg_arry[kk].substr(28,25));
	$('#tspan2054').html('');
	$('#tspan2056').html('');
	$('#tspan2058').html('');
}

function snapBack(ele){
  var drgInd = drgArr.indexOf(ele.id);
  TweenLite.to(ele, 0.3, {x:xyArr[drgInd].x, y:xyArr[drgInd].y+0});
  $(ele).find('tspan').html('');
  var count=refArr.length;
  
}

function getTranslateXY(elm) {
    var style = window.getComputedStyle(elm);
    var matrix = new WebKitCSSMatrix(style.transform); 
    return {x:matrix.m41-13,y:matrix.m42-12};
}

function onKeyClick(e){
	var kk= keyBtn.indexOf(e.currentTarget.id);
	if(kk==0){
		$(oup).html('');
	}else{
		if($(inp1).html()<9){
			$(oup).html(''+(kk-1));			
		}else{
			var mm=$(oup).html();
			$(oup).html(''+mm+''+(kk-1));
		}
		if(Number($(oup).html())-1==Number($(inp1).html())){
			$('#cover-rect').hide();
			$('#cover-rect1').show();
			updateMessage(2);
			if(count>1){
				updateMessage(count+1);
			}
			if(music){music.pause()}
			music = new Audio('../../../audio/Mact10/'+result_Arr[count-1]);
         	music.play();
         	mouthAnimation('happy');
         	music.onended=function(){
         		if(count==10){
         			music = new Audio('../../../audio/Mact10/end.mp3');
         			music.play();
         			//mascot click to repeat
         			$('#g1550').click(function(){
         				nextLevel();
         			})
         		}else{
         			music = new Audio('../../../audio/Mact10/'+dragAudio_Arr[count-1]);
         			music.play();
         			mouthAnimation('neutral');
         			music.onended=function(){
								mouthAnimation('stop');
							}
         		}
         	}
		}else{
			if(music){music.pause();mouthAnimation('stop');}
			var nn = Math.ceil(Math.random()*6);
			music = new Audio('../../../audio/Mact10/Wrong'+nn+'.mp3');
      music.play();
      mouthAnimation('sad');
      music.onended=function(){
				mouthAnimation('stop');
			}
      feedMsg(nn-1)
		}
		//console.log($(oup).html(),)
		
	}
}


function nextLevel(){
	
	resetAll();

}

function resetAll(){
	count=0;
	$(inp1).html('0');
	$(inp2).html('0');
	$(oup).html('');
	for(var i=0;i<10;i++){
		snapBack(document.getElementById(drgArr[i]));
		Draggable.get($('#'+drgArr[i])).enable();
	}
}






