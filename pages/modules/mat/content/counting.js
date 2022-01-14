var a1,b1,c1,d1,e1,f1,g1,music,refArr,stage=0, level=0,xyArr = [];
var tot=0 ;var ansArr = [];
var submitEnable=false,count=0;
var timArr = ['13.3,14.6','15,16','0,1.2','10.2,11.7',
              '3.4,4.5','5.2,6.4','20,21','6.8,8.1',
              '16.6,17.8','18.3,19.8','8.5,9.8','11.9,13.1',
              '1.7,3.1'];
//dragAndDrop(drgArr,drpArr,tarId,boundId);
var levelArr = ['g4071','g4084','g4097','g4110'];
var objArr = ['use3632','path3670','g3652','g3660','g3668'];
function counting(a,b,c){
    a1=a;b1=b;c1=c; d1=d;//e1=e;f1=f;g1=g;
  }


function resetAll(){
  count=0;
  refArr=[];
  stage++;console.log(stage)
  updateMessage();
  if(stage==3){
    level++;
    stage=0; 
    if(level==4){
      level=0;
      for(var i=1;i<4;i++){
        $('#'+levelArr[i]).attr('opacity','1');   
      }
      
    }
    enableAll();
    showMessage(3)
  } 
  var levAud= ['five','ten','fifteen_head','twenty']
  if(music){music.pause()}
    if(stage==0){
      music = new Audio('./soundsA/clickOnyourFavFruit'+'.mp3');
      music.play();      
    }else{
      music = new Audio('./soundsA/'+levAud[level]+'.mp3');
      music.play();
    }
      
  for(var i=0;i<tot;i++){
    $('#'+a1[i]).find('tspan').html('');
    TweenLite.to($('#'+a1[i]), 0.3, {x:xyArr[i].x, y:xyArr[i].y+0});
  }  

}

(function(){

var namArr , drpArr, drgArr , drpTxtArr , drgTxtArr ;




/////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener('load', function() {
  'use strict';
  init();
   //setTimeout(init,3000);

function init(){
  refArr =[];
  drgArr = a1;
  drpArr = b1;
  showMessage(3);
  tot = drgArr.length;
  // shuffleArray(refArr);
  console.log($('#'+drgArr[2]));
  for(var i=0;i<tot;i++){
   
    $('#'+drpArr[i]).attr('class','tarObj');
    $('#'+drgArr[i]).attr('class','drgObj');//.hide(); 
    $('#'+drgArr[i]).find('tspan').html('');
    xyArr[i] = getTranslateXY(document.getElementById(drgArr[i]));
  }  
  $('#main_audio').on('ended', function(){
    music = new Audio('./soundsA/WelcomeLetusplaythegameofcountingthefruitsClickonyourfavouritefruits.mp3');
    music.play();
    music.onended=function(){
      
    }
  })
  enableAll();
  music= document.getElementById('main_audio');

  $('#g3722').bind('click',onSubmit);
}

var xy,overlapThreshold = "50%",droppables = $(".tarObj");


function onSubmit(){
  if(submitEnable){
    //$('#g3722').unbind('click');
    console.log('submit called');
    if(refArr.length==5*(level+1)){
      console.log('submit clicked correct');  
      $('#nxtBtn').attr('style','opacity:1');
      $('#nxtBtn').bind('click',onNxt);
      if(music){music.pause()}

      music = new Audio('./soundsA/_'+((level+1)*5)+'_Right.mp3');
      showMessage(2);
      music.play();
      music.onended=function(){
        if(level==3){
          music = new Audio('./soundsA/Clickhomeandnext.mp3');
          music.play();
          showMessage(9);
        }
      }

    }else{
      if(music){music.pause()}
        var rno = Math.ceil(Math.random()*5);
      music = new Audio('./soundsA/Wrong'+rno+'.mp3');
      music.play();
      console.log('submit clicked incorrect');
      showMessage(rno+3);
    }

  }  
}

function onNxt(){
  console.log('nxt called')
   $('#nxtBtn').unbind('click');
   $('#nxtBtn').attr('style','opacity:0.5')
   resetAll();
}

function getTranslateXY(elm) {
    var style = window.getComputedStyle(elm);
    var matrix = new WebKitCSSMatrix(style.transform); 
    return {x:matrix.m41,y:matrix.m42};
  }

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
     disableAll();
  },  
  onDragEnd:function(e) {
    var i = droppables.length;
      if (this.hitTest($('#tar-rect'), overlapThreshold)) {
         submitEnable=true;
       if(count<10){
          var xPos = count*82-370;
          var yPos = -161;
         }else{
           xPos = (count-10)*82-370;
           yPos = -81;
         }
         
         count++;
         TweenLite.to(this.target, 0.3, {x:xPos, y:yPos});
         refArr.push(this.target);
         if(stage==0){
          $(this.target).find('tspan').html(refArr.length).css( "font-weight", "bold");
        }
        if(stage==0 || stage==1){
          if(music){music.pause();}
          if(count>(level+1)*5){
            music= new Audio('./soundsA/more'+'.mp3'); 
            music.play();
          }else{
            music= new Audio('./soundsA/_'+refArr.length+'.mp3');  
          }          
          music.play();
         }else{
          if(count>(level+1)*5){
            if(music){music.pause();}
            music= new Audio('./soundsA/more'+'.mp3'); 
            music.play();
          }
         }
      }else{
        if(music){music.pause();}
       snapBack(this.target);
      }
      updateMessage(); 
  }

  
});



});
})()
//////////////////////////****
var messageArr = [["You have put more","fruits in the box.","Those extra fruits","you put in the box,",
        "drag them again out","and put them in pink","box now."],

["Now pull out ","fruits from the","pink box and","drag them inside","green box. Click","on me after","putting them."],
['Great!','You have put ','fruits in the box','Please click on','Next to proceed','further.',''],
['Click on your','favourite fruits.','','','','',''],

['Check it again!','','','','','',''],
['Please check','them carefully!','','','','',''],
['Try it again!','','','','','',''],
['Please be','mindful when','you check the','numbers!','','',''],
['Be careful ','friend.','','','','',''],

['Click next to','play again.','','','','','']
];

function updateMessage(){
  if(count>(level+1)*5){
    showMessage(0)
  }else{
    showMessage(1);
  } 
}
function showMessage(num){
  console.log(num=='0')
  switch(num){
    case 0: console.log(num=='0')
      for(var i=0;i<7;i++){
        $('#line'+i).html(messageArr[0][i]);
        $('#line'+i).attr('y',i*30);
      }
    break;
    case 1:
      for(var i=0;i<7;i++){
        if(i==0){
          $('#line'+i).html(messageArr[1][i]+5*(level+1));
        }else{
          $('#line'+i).html(messageArr[1][i]);
        }        
        $('#line'+i).attr('y',i*30);
      }
    break;
    case 2:
      for(var i=0;i<7;i++){
        if(i==1){
          $('#line'+i).html(messageArr[2][i]+5*(level+1));
        }else{
          $('#line'+i).html(messageArr[2][i]);
        }        
        $('#line'+i).attr('y',i*30);
      }
    break;

    default:
      for(var i=0;i<7;i++){
        $('#line'+i).html(messageArr[num][i]);
        $('#line'+i).attr('y',i*30);
      }
    break;
  }
}

function enableAll(){
   $('#g4128').show(); 
  for(var k=0;k<20;k++){
    $('#'+a1[k]).hide();
  }
  for(var i=0;i<5;i++){
    var myObj = $('#'+objArr[i]);
    myObj.bind('click',objClk)
  }
}

function objClk(e){
      updateMessage();
      var kk = objArr.indexOf($(this).attr('id'))+1; 
      $('#refImg').attr('xlink:href','images/fruits_copy_2000'+kk+'_png.png');  
      $('#g4128').hide();  
      if(music){ music.pause();}
      var fruits= ['anar','santra','seb','musambi','aam'];
      var levAud= ['five','ten','fifteen_head','twenty']
      music = new Audio('./soundsA/'+fruits[kk-1]+'.mp3');
      music.play(); 
      music.onended=function(){
        music = new Audio('./soundsA/'+levAud[level]+'.mp3');
        music.play(); 
      }
      $('#'+levelArr[level]).attr('opacity','0.5'); 
      for(var k=0;k<20;k++){
        $('#'+a1[k]).show();
      }
    }

function disableAll(){
  for(var i=0;i<5;i++){
    $('#'+objArr[i]).unbind('click');
  }
}

function arrangeAll(){
  var tot1=refArr.length;
  for(var i=0;i<tot1;i++){
    if(i<10){
      var xPos = i*82-370;
      var yPos = -161;
    }else{
      xPos = (i-10)*82-370;
      yPos = -81;
    }
    TweenLite.to(refArr[i], 0.3, {x:xPos, y:yPos});
    if(stage==0){
      $(refArr[i]).find('tspan').html(i+1);
    }
  }
}




function snapBack(ele){
  var drgInd = a1.indexOf(ele.id);
  TweenLite.to(ele, 0.3, {x:xyArr[drgInd].x, y:xyArr[drgInd].y+0});
  $(ele).find('tspan').html('');
  var count=refArr.length;
  if(count>(level+1)*5){
          showMessage(0)
         }else{
          showMessage(1);
         } 
}

