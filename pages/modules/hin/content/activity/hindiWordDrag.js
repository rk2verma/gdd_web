var animInterval,p0,p1;
var animState=false;
function mouthAnimation(cond){ 
	var happy0 = 'M 14.133 -3.903 L 13.983 -1.983 L 14.373 -0.153 M -12.115 -1.785 L -12.32 -0.636 Q -0.064 3.843 13.977 -1.999 Q -0.035 8 -12.299 -0.595 M -12.423 1.066 L -12.32 -0.575 Z';
	var happy1 ='M 14.133 -3.903 L 13.983 -1.983 L 14.373 -0.153 M -12.115 -1.785 L -12.32 -0.636 Q -0.064 3.843 13.977 -1.999 Q 0.55 15.523 -12.299 -0.595 M -12.423 1.066 L -12.32 -0.575 Z';
	var sad0='M 6.95 -1.25 L 7.075 -0.95 L 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q -0.446 -1.829 7.075 -0.95 M -7.175 -0.3 L -7.325 0.05';
	var sad1='M 6.95 -1.25 L 7.075 -0.95 L 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q -0.623 -2.228 7.075 -0.95 Q -0.324 2.132 -7.152 -0.302 M -7.175 -0.3 L -7.325 0.05 Z';
	var neu0='M 6.95 -1.25 L 7.075 -0.95 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q 0.09296875 2.497265625 7.075 -0.95 M -7.175 -0.3 L -7.325 0.05'
	var neu1='M 6.95 -1.25 L 7.075 -0.95 L 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q 0.093 2.4973 7.075 -0.95 Q 0.263 7.843 -7.152 -0.302 M -7.175 -0.3 L -7.325 0.05 Z'
	var stt=' M 6.95 -1.25 L 7.075 -0.95 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q 0.09296875 2.497265625 7.075 -0.95 M -7.175 -0.3 L -7.325 0.05';
	switch(cond){ 
		case 'happy' :
			p0=happy0;p1=happy1;
         if(animInterval>-1) clearInterval(animInterval);
			animInterval = setInterval(animatewith,300);
		break;
			case 'sad' :
			p0=sad0;p1=sad1;
         if(animInterval>-1) clearInterval(animInterval);
			animInterval = setInterval(animatewith,300);
		break;
			case 'neutral' :
			p0=neu0;p1=neu1;
         if(animInterval>-1) clearInterval(animInterval);
			animInterval = setInterval(animatewith,300);
		break;
			case 'stop' :
			clearInterval(animInterval);
			$('#mouthId g g path').attr('g',stt);
		break;
	}
}

function animatewith(){
	animState=!animState;
	if(animState==false){		
		$('#mouthId g g path').attr('d',p0);
		$('#mouthId g g path').attr('fill','#888')
	}else{
		$('#mouthId g g path').attr('d',p1)
		$('#mouthId g g path').attr('fill','#888')
	}
}

mouthAnimation('neutral');

//*******************************************//
var incTxt = ['?????? ????????????','??????????????? ??????????????? ?????????','?????? ?????? ????????? ????????????','???????????? ????????? ???????????? ???????????? !'];
var corTxt = ['???????????????!','???????????? ???????????????!','???????????????, ???????????? ???????????????!','????????????????????? '];
var txtArr = [[
               ["???????????????","???????????????","????????????","????????????","???????????????","????????? ","????????????????????? ","?????????","????????????","?????????"],
               ["??????????????? ","????????????","??????","??????","????????????","????????????","??????","????????? ","?????????","??????"],

               ["?????????","?????????","?????????","????????????","?????????","????????????","???????????????","????????????","???????????????","????????????"],
               ["????????????","?????????","??????","???????????????","?????????","?????????","?????????","????????????","???????????????","?????????????????????"],

               ["?????????","??????????????? ","??????????????????","???????????????","????????????????????? ","???????????????"],
               ["?????????","???????????????","????????????","????????????????????????","?????????", "????????????"],

               ["????????? ","????????????","??????","????????????","??????","??????","????????????","????????????","?????????","??????????????????"],
               ["????????????","???????????? ","?????????","????????????","?????????????????????","????????????????????????","??????","?????????","??????????????????","????????????"]],

               

               [["?????????","??????","????????????","????????????","???????????????","???????????????","????????????","?????????????????????","?????????","?????????"],
               ["???????????????","???????????????","??????","???????????????","?????????","????????????","???????????????","?????????","????????????","??????"],

               ["???????????????","????????????","??????????????????","???????????????","????????????","??????????????????","?????????","????????????","??????????????????","????????????","???????????????" ],
               ["????????????","????????????","????????????","??????????????????","?????????","???????????????","?????????","????????????","????????????","????????????","?????????????????????"]],

               [["???????????????","???????????????	","????????????","	????????????	????????????","??????????????????","????????????????????????","??????????????????","???????????????????????????","?????????","????????????	","???????????????	","????????????","??????????????????"],
								["???????????????","????????????","??????","????????????","????????????","????????????","????????????????????????","???????????????????????????","?????????","????????????","???????????????","??????????????????","???????????????"],

								["?????????","????????????","???????????????","????????????","????????????","???????????????","??????????????????","????????????","???????????????","???????????????","???????????????","???????????????","?????????????????????","???????????????","???????????????","??????"],
								["????????????","?????????","????????????","????????????	","?????????","?????????????????????","????????????","???????????????","???????????????","????????????","????????????","???????????????","???????????????","????????????	","?????????","????????????"]],

								[["???????????????","????????????","???????????????","?????????","?????????????????????","???????????????","???????????????","????????????","???????????????","???????????????","???????????????","???????????????","??????????????????","???????????????"],
								["???????????????","???????????????","????????????","????????????","??????","?????????","????????????","???????????????","?????????","?????????????????????","??????????????????","????????????","????????????","???????????????"],

								["?????????","????????????","??????","????????????","??????????????????","??????????????????","??????????????????","???????????????","??????????????????","?????????????????????","????????????","???????????????"],
								["???????????????","????????????","????????????","????????????","????????????","????????????","?????????","??????????????????","?????????","????????????","???????????????","????????????"]],

								[["???????????????","??????????????????","???????????????","????????????","????????????","???????????????","????????????","???????????????","?????????????????????","???????????????","???????????????","???????????????","??????????????????","???????????????","???????????????","???????????????"],
								["????????????","????????????","?????????????????????","???????????????","????????????","?????????","????????????","??????????????????","?????????????????????","???????????????","?????????????????????","????????????","????????????","???????????????","????????????","??????"],

								["??????????????????","??????????????????","????????????","???????????????","????????????","???????????????","??????????????????","????????????","??????????????????","???????????????","????????????","???????????????","?????????????????????","???????????????","????????????????????????","?????????"],
								["?????????","?????????????????????","??????","???????????????","????????????","????????????","???????????????","????????????","???????????????","????????????","???????????????","????????????","?????????","?????????","????????????","????????????"]],

								[["???????????????","????????????","????????????????????????","??????????????????","???????????????","????????????","????????????","??????????????????","????????????","?????????","??????","????????????","???????????????","????????????"],
								["????????????","????????????","????????????","???????????????","????????????","?????????????????????","??????","???????????????","???????????????","???????????????","???????????????","?????????","?????????????????????","???????????????"],

								["????????????","???????????????","??????","????????????","???????????????","???????????????","???????????????","??????????????????","???????????????","?????????","????????????","???????????????","???????????????","?????????????????????","???????????????","?????????"],
								["?????????","??????????????????","?????????","?????????","??????????????????","???????????????","???????????????","???????????????","???????????????","???????????????","????????????","???????????????","???????????????","??????????????????","?????????????????????","????????????"]],

							[["???????????????","???????????????","??????","????????????","?????????????????????","???????????????","???????????????","???????????????","????????????","??????????????????","????????????","??????????????????","??????????????????","??????????????????","???????????????","????????????"],
							["????????????","????????????","??????????????????","??????","??????","???????????????","????????????????????????","?????????????????????","????????????","????????????","????????????","??????????????????","????????????","??????????????????","???????????????????????????","?????????????????????"],

							["????????????","?????????","????????????","??????????????????","????????????","??????????????????","????????????????????????","??????????????????","???????????????","????????????","????????????"],
							["??????","??????","?????????","????????????","???????????????","????????????","?????????????????????","????????????","??????????????????","???????????????","???????????????"],

							["???????????????","?????????","????????????","????????????","???????????????","??????????????????","?????????","???????????????"],
							["?????????","?????????????????????","?????????","??????????????????","??????????????????","????????????????????????","???????????????????????????","???????????????"]],

							[["??????","?????????","??????????????????","????????????","?????????","?????????","????????????","??????"],
								["???????????????","??????","????????????","????????????","??????????????????","??????","???????????????","???????????????"],
	
								["?????????","???????????????","????????????","??????????????????","???????????????","??????????????????","??????????????????","?????????","???????????????"],
								["????????????????????????","????????????","???????????????","???????????????????????????","????????????????????????","?????????????????????","??????????????????","?????????????????????","?????????????????????"],

								["?????????????????????","?????????????????????","?????????????????????","?????????????????????","?????????????????????","????????????????????????","?????????????????????","????????????????????????"],
								["??????????????????","???????????????","??????????????????","???????????????","????????????????????????","?????????????????????","","?????????????????????","??????????????????"]]

               ];







 
var txtFieldsH = ['#tspan427','#tspan436']
var txtFieldsO = ['#tspan457','#tspan480','#tspan503','#tspan526',
                  '#tspan549','#tspan572','#tspan595','#tspan618'];
var displayId,tArr,lArr0,lArr1,rArr0,rArr1,refArr,drgArr,xyArr=[],lev=0,nextPos,aud1,isEnd=false,totLev;

var xy,overlapThreshold = "40%";

 

window.onload=function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  displayId = urlParams.get('id');
  console.log(displayId);
  $('#Layer_7').hide(); // mascot_mc and click instruction
  if(displayId==0){
  	totLev=3;
  }else{
  	totLev=1;
  }
  setActivity(displayId);
  }    

  function setActivity(dId){
  	refArr=[];
		Random_arr(refArr,8);
  	
  	
  	for(i=0;i<8;i++){
  		xyArr[i] = getTranslateXY(document.getElementById($(txtFieldsO[i]).parent().parent().parent().attr('id')));
  	}

  	startGame(0);
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


function startGame(ind){

	tArr=[],drgArr=[];
	lArr0=[];
  Random_arr(lArr0,txtArr[displayId][2*ind].length);
	for(var i=0;i<4;i++){ console.log(displayId,ind,i)
		tArr[refArr[2*i]]  = txtArr[displayId][2*ind][this['lArr0'][i]];
		tArr[refArr[2*i+1]]= txtArr[displayId][2*ind+1][this['lArr0'][i]];		
	}
	$(txtFieldsH[0]).html(txtArr[displayId][2*ind][0].substr(0,1));
	$(txtFieldsH[1]).html(txtArr[displayId][2*ind+1][0].substr(0,1));
	for(i=0;i<8;i++){
		$(txtFieldsO[i]).html(tArr[i]);
		$(txtFieldsO[i]).attr('font-size','20px')
		$(txtFieldsO[i]).parent().parent().parent().attr('class','drgObj')
		drgArr.push($(txtFieldsO[i]).parent().parent().parent()[0]);
		//$('#'+drpArr[i]).attr('class','tarObj');
		//$('#'+drgArr[i]).attr('class','drgObj');
		drgArr[i].x= xyArr[i].x;
		drgArr[i].y= xyArr[i].y;
	}
	//console.log(txtArr[displayId*2][0][0].substr(0,1),txtArr[displayId*2][1][0].substr(0,1),tArr)
	console.log($('#tspan480').parent().parent().parent().attr('id'));
	aud1 = document.getElementById('main_audio');
	aud1.onended=function(){
		init();
	}	
}



function onDrop(dragged) {
  
  xy = getTranslateXY(document.getElementById('highlights')); console.log(xy)
  
  var drgId = dragged.id; //console.log(drgId);
  var drgInd = drgArr.indexOf(drgId);
  //var tarInd = drpArr.indexOf(dropped.id);
  //ansArr[tarInd] = namArr[refArr[drgInd]];
  //checkThis(tarInd,dragged);
  console.log($(dragged).find('tspan').html().substr(0,1),tArr);
 
  var obj = $('#highlights');
      var transformMatrix = obj.css("-webkit-transform") ||
         obj.css("-moz-transform")    ||
         obj.css("-ms-transform")     ||
         obj.css("-o-transform")      ||
         obj.css("transform");
      var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
      var x = matrix[12] || matrix[4];//translate x
      var y = matrix[13] || matrix[5];//translate y
     	console.log(x,y)
     //var pa = matrix[0]+','+matrix[1]+','+matrix[2]+','+matrix[3]+',';
     /* x: 385.1
				y: 287.95 288 343
			*/

     var mm = parseInt(x)+Math.ceil(12*Math.random());
     var pb = 534;
     var pc = ','+matrix[5]+')';
     if(x==385.1){
     	console.log($(dragged).find('tspan').html().substr(0,1), $('#tspan427').html())
     		if($(dragged).find('tspan').html().substr(0,1)==$('#tspan427').html()){
					TweenLite.to(dragged, 0.3, {x:xy.x-470, y:xy.y-390});
					//$(obj).attr('transform','translate('+pb+','+y+')');
					nextPos = 'translate('+pb+','+y+')';
					//$(dragged).unbind
					//($(dragged)[0]).draggable( "disable" )
					correctAns();
					Draggable.get(dragged).disable();
					
     		}else{
     			snapBack($(dragged)[0]);
     			incorrectAns();
     		}
				
     }else{
     		y=Number(matrix[5])+55;
     		if($(dragged).find('tspan').html().substr(0,1)==$('#tspan436').html()){
					TweenLite.to(dragged, 0.3, {x:xy.x-470, y:xy.y-390});
					nextPos = 'translate('+385.1+','+y+')';
					correctAns();
					Draggable.get(dragged).disable();					
     		}else{
     			snapBack($(dragged)[0]);
     			incorrectAns();
     		}     		
     		if(y>500){
     			$(obj).hide();
     			
   				if(lev<totLev){	
   					isEnd=true;    					
					}else{
						// hide everything show message GameOver
						$('#g645').hide();
						$('#g665').find('tspan').html('????????? ??????????????????');
						TweenLite.to($('#g665'),0.3,{x:200,y:200,scale:2})
					}
     		} 			
     	}
   }     

$('#g287').click(function(){
   						lev++;
   						setInitialPosition();
							startGame(lev);
							init();
							$('#highlights').show();
							isEnd=false;
							nextPos= 'translate('+385.1+','+287.95+')';
							updateHighlightPosition();

							$('#Layer_7').hide();
						})
function setInitialPosition(){
	$('#g637 tspan').html('');
	$('#g639 tspan').html('');
	for(var i=0;i<8;i++){
		TweenLite.to(drgArr[i], 0.3, {x:xyArr[i].x, y:xyArr[i].y});
	}
}
function incorrectAns(){
	var ind=Math.floor(Math.random()*4);
	$('#g639 tspan').html(incTxt[ind]);
	TweenLite.fromTo($('#g639'), 0.3, {scale:0.7,x:230},{scale:1.4,x:190});
	aud1 = new Audio("../../../../audio/colWord/incTxt"+ind+".mp3");
	aud1.play();
	aud1.onended=function(){
		$('#g639 tspan').html('');
	}
	
}
function correctAns(){
	var ind=Math.floor(Math.random()*4);
	$('#g637 tspan').html(corTxt[ind]);
	TweenLite.fromTo($('#g637'), 0.3, {scale:0.7,x:-290},{scale:1.4,x:-360});

	aud1 = new Audio("../../../../audio/colWord/corTxt"+ind+".mp3");
	aud1.play();
	aud1.onended=function(){
		$('#g637 tspan').html('');
		console.log($('#highlights').attr("display")=="none")
		if(isEnd){
			$('#Layer_7').show(); 
			aud1= new Audio("../../../../audio/colWord/conclusion.mp3");
			aud1.play();
		}
	}
	updateHighlightPosition();
}
function updateHighlightPosition(){
	$('#highlights').attr('transform',nextPos);
}

function checkThis(tarind,drgobj){
  $('#'+drpArr[tarind]+' path').css('stroke-width','5');
    if(ansArr[tarind]!=namArr[tarind]){
          $('#'+drpArr[tarind]+' path').css('stroke','red'); 
          feedMusic(false,drgobj,tarind);
        }else {
          $('#'+drpArr[tarind]+' path').css('stroke','#0add00'); 
          Draggable.get('#'+drgobj.id).disable();
          feedMusic(true,drgobj,tarind);
          tot--;
          if(tot==0){
            music.onended = function() {
              $('#bound-rect').css('display','none');
              $('#g2533').show();
            };
          }
        }
}

function getTranslateXY(elm) {
    var style = window.getComputedStyle(elm);
    var matrix = new WebKitCSSMatrix(style.transform); 
    return {x:matrix.m41,y:matrix.m42};
  }

function snapBack(ele){
  var drgInd = drgArr.indexOf(ele); 
  TweenLite.to(ele, 0.3, {x:xyArr[drgInd].x, y:xyArr[drgInd].y});
}


function init(){

Draggable.create('.drgObj',{
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
    
    
  },
 
  onDragEnd:function(e) {
    
      if (this.hitTest($('#highlights'), overlapThreshold)) {
        console.log($('#highlights').attr('transform'));
        onDrop(this.target);

        return 0;
      }
    
    snapBack(this.target);
  }
});

}



