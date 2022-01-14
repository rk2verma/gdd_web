
var drgArr = ['drgItem0','drgItem1','drgItem2','drgItem3','drgItem4','drgItem5','drgItem6','drgItem7','drgItem8','drgItem9'];
var music,overlapThreshold="50%",count=0,refArr=[];
var msgFeed= [["Can you pull one fruit from","Geeta's table and put in on","Ramu's table?","","","",""],
["Great! Now how many","fruits are there on Geeta's","table?","Enter the answer with the ","help of the number pad.","",""],

["It is really a magic my friend! Let","us see it carefully! See previously","on Gita's table, there were 10",
"fruits. You took one from them,","that is, you subtracted 1 from the","number 10 and now on Geeta's","table there are 9 fruit's."],


["Great! Now how many","fruits are there on Geeta's","table?","","","",""],
["You are right! Now there are 8 ","fruits on Gita's table. Take","another fruit from Gita's table.","","","",""],

["Now how many fruits are ","there on Geeta's table?","I can bet that you can ","solve this.","","",""],
["Great, my friend! You are","right! Now Gita has 7 fruits","on her table. You have ",
"learnt it so quickly! Now","drag another fruit on","Ramu's table.",""],

["Now how many fruits are ","there on Geeta's table?","I can bet that you can ","solve this.","","",""],
["Oh! Great! You are right! Now","Gita has 6 fruits. We're having","great fun, aren't we? Now, let us",
"see if we subtract another fruit","from Gita's count, what will it","happen.",""],

["Now how many fruits are ","there on Geeta's table?","I can bet that you can ","solve this.","","",""],
["Great! Correct answer! Now Gita","has 5 fruits. We're having great ","fun, aren't we? Now, let us see ",
"if we subtract another fruit from ","Gita's count, what will it happen.","",""],

["Now how many fruits ","remain on Geeta's table?","","","","",""],
["Great! Correct answer again! ","Now Gita has 4 fruits. I like the","game so much! Now, let us see ",
"if we subract another fruit from ","Gita's count, what will it ","happen.",""],

["Now how many fruits ","remain on Geeta's table?","","","","",""],
["Correct answer my dear","friend! Now Gita has 3 ","fruits. Take out another","fruit from Gita's table.","","",""],

["Now how many fruits ","remain on Geeta's table?","","","","",""],
["Great! Correct answer! ","Now Gita has 2 fruits.","Take out another fruit from ","Gita's table.","","",""],

["Now how many fruits ","remain on Geeta's table?","","","","",""],
["Great! Correct answer! ","Now Gita has only 1 fruit","on her table.","","","",""],

["Now how many fruits ","remain on Geeta's table?","","","","",""],
["Correct! Now there is no fruit on","Gita's table. She gave all of her ","fruits to Ramu. Friends, if you ",
"want to solve this quiestion again,","please click on Me. To solve any ","different question, click on Home.",""]];




var dropAudio_Arr = new Array("greatNowhowMany1.mp3","greatNow2.mp3","howMany1.mp3",
		"howMany1.mp3","howMany1.mp3","howmanyRemains.mp3","howmanyRemains.mp3","howmanyRemains.mp3",
		"howmanyRemains.mp3","howmanyRemains.mp3");
var result_Arr = new Array("ans9.mp3","ans8.mp3","ans7.mp3","ans6.mp3","ans5.mp3","ans4.mp3",
											"ans3.mp3","ans2.mp3","ans1.mp3","ans no fruit.mp3");
var pos_arry = new Array("Correct Answer!","Excellent!","Great!","Congratulation!","Perfect!","Correct!","Correct! Your answer is right.","Great!","Excellent!","Great!");
var neg_arry = new Array("Take another fruit from Gita's table.","Check it again!","Please check them carefully!","Try it again!",
			"Please be mindful when you    check the numbers!","Be careful friend!","Check it again!");


var inp1='#tspan1943',inp2='#tspan1934',oup='#tspan1952';
var xyArr=[];
var keyBtn=['g1655','g1680','g1705','g1730','g1755','g1780','g1805','g1830','g1855','g1880','g1905'];

(function(){
window.addEventListener('load', function() {
  'use strict';
  setMouthId('#path1994');
  init();
})

})();

function init(){
	$('#img').attr('xlink:href','./images/fruits_copy_2000'+Math.ceil(Math.random()*5)+'_png.png');
	$('#g2064').hide();
	$(inp1).html('10');
	$(inp2).html('0');
	$(oup).html('10');
	for(var i=0;i<10;i++){
		if(i<5){
			$('#'+drgArr[i]).attr('transform','matrix(1,0,0,1,'+(40+20.5*i)+',70)');
		}else{
			$('#'+drgArr[i]).attr('transform','matrix(1,0,0,1,'+(40+20.5*(i-5))+',95)');
		}
		$('#'+drgArr[i]).find('use').attr('x','0');
		$('#'+drgArr[i]).find('use').attr('y','0');
		$('#'+drgArr[i]).attr('class','drgObj');
		xyArr[i] = getTranslateXY(document.getElementById(drgArr[i]));
		$('#'+keyBtn[i]).bind('click',onKeyClick);
		$('#'+keyBtn[i]).css('cursor','pointer');
	}
	$('#'+keyBtn[10]).bind('click',onKeyClick)
	createDrag();
	updateMessage(0);
	music = document.getElementById('main_audio');
	$('#covObj').hide();
	mouthAnimation('neutral');
	music.onended=function(){
		
		
	}
}


function createDrag(){
	$('#cover-rect').hide();
	Draggable.create('.drgObj', 
	{
      throwProps:true,
      bounds:"#bound-rect",
      zIndexBoost: true,
      zIndex: 9099,
  onPress: function(){
    var curEl = this.target;
    var  curTar = curEl;
    curEl.parentNode.appendChild(curEl);     
    var drgId = curEl.id; 
    var drgInd = drgArr.indexOf(drgId);
    if(music) {music.pause();}
  }, 
  onDragStart:function(e){
    if($(this).attr('y')<0){
      count--;
      refArr.splice(refArr.indexOf(this.target),1);  
      //arrangeAll(); 
     }
     //disableAll();
  },  
  onDragEnd:function(e) {
      if(music){music.pause();}
      if (this.hitTest($('#g1464'), overlapThreshold)) {
      	
         
       if(count<5){
          var xPos = count*20+154; //135,215 295 375 455
          var yPos = 71;
         }else{
           xPos = (count-5)*20+154;
           yPos = 96;
         }
         
         music = new Audio('../../../audio/subtractionBasic/'+dropAudio_Arr[count]);
         music.play();
         mouthAnimation('happy');
         music.onended=function(){
				 	mouthAnimation('stop');
				 }
				  count++;
				  updateMessage(2*count-1);
         TweenLite.to(this.target, 0.3, {x:xPos, y:yPos});
         Draggable.get(this.target).disable();
         refArr.push(this.target);
         $('#covObj').show();
         $('#covKey').hide();
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
			$('#tspan2013').html(msgFeed[idx][0]);
			$('#tspan2015').html(msgFeed[idx][1]);
			$('#tspan2017').html(msgFeed[idx][2]);
			$('#tspan2019').html(msgFeed[idx][3]);
			$('#tspan2021').html(msgFeed[idx][4]);
			$('#tspan2023').html(msgFeed[idx][5]);
			$('#tspan2025').html(msgFeed[idx][6]);
}

function feedMsg(kk){
	if(kk==undefined){kk=0};
	$('#tspan2013').html('');
	$('#tspan2015').html(neg_arry[kk].substr(0,30));
	$('#tspan2017').html(neg_arry[kk].substr(30,25));
	$('#tspan2019').html('');
	$('#tspan2021').html('');
	$('#tspan2023').html('');
	$('#tspan2025').html('');
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
    return {x:matrix.m41,y:matrix.m42};
}

function onKeyClick(e){
	var kk= keyBtn.indexOf(e.currentTarget.id);
	if(kk==0){
		$(oup).html('');
	}else{
		$(oup).html(''+(kk-1));			
		
		if(kk==Number($(inp1).html())){
			$('#covObj').hide();
      $('#covKey').show();
			updateMessage(2*count);
			if(count==1){
				setTimeout(feedMsg,22000);
			}
			if(music){music.pause()}
			music = new Audio('../../../audio/subtractionBasic/'+result_Arr[count-1]);
         	music.play();
         	mouthAnimation('happy');
         	music.onended=function(){
         		if(count==10){         			
         			//mascot click to repeat
         			$('#g2000').css('cursor','pointer');
         			$('#g2000').click(function(){
         				nextLevel();
         			})
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
      feedMsg(nn);
		}
		//console.log($(oup).html(),)
		
	}
}


function nextLevel(){	
	resetAll();
}

function resetAll(){
	$('#g2000').css('cursor','none');
	$('#img').attr('xlink:href','./images/fruits_copy_2000'+Math.ceil(Math.random()*5)+'_png.png');
	count=0;
	updateMessage(0);
	$(inp1).html('10');
	$(inp2).html('0');
	$(oup).html('10');
	for(var i=0;i<10;i++){
		snapBack(document.getElementById(drgArr[i]));
		Draggable.get($('#'+drgArr[i])).enable();
	}
}











