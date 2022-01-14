var objArr,music,count=0;


(function(){

window.addEventListener('load', function() {
 'use strict';
 objArr=[	'g5199','g5222','g5245','g5268','g5291','g5314','g5337','g5360','g5383','g5406',
  			'g5429','g5452','g5475','g5498','g5521','g5544','g5567','g5590','g5613','g5636',
  			'g5659','g5682','g5705','g5728','g5751','g5774','g5797','g5820','g5843','g5866',
  			'g5889','g5912','g5935','g5958','g5981','g6004','g6027','g6050','g6073','g6096',
  			'g6119','g6142','g6165','g6188','g6211','g6234','g6257','g6280','g6303','g6326'];
  init();
})
})();

function init(){
	music = document.getElementById('main_audio');
	music.onended= function(){
	    music = new Audio('../../../../pages/audio/counting/english/vo1_cl0.mp3');
	    music.play();
	    music.onended=function(){
	      
	    }
	}
	for(var i=0;i<50;i++){
		if(i%10==0){
			$('#'+objArr[i]).find('tspan').html(i+1);
			$('#'+objArr[i]).find('text').attr('opacity','0.5')
		}else{
			$('#'+objArr[i]).find('tspan').html('')
		}
		$('#'+objArr[i]).click(function(e){
			
			if(count== objArr.indexOf($(this).attr('id'))){
				//correct Click
				updatePosition();
				count++;	
				$(this).find('tspan').html(count);
				$(this).find('text').css('opacity','1');
				console.log(count);
				if(music){
					music.pause();
				}
				music=new Audio('../../../../pages/audio/counting/english/'+count+'.mp3');
				music.play();
				music.onended=function(){
					if(count%10==0){
						music=new Audio('../../../../pages/audio/counting/english/Correct'+(Math.floor(count/10)-1)+'.mp3');
						music.play();
						music.onended=function(){
							updatePosition();	
						}					
					}
				}
							
			}else{
				//in-correct Click
				//var music=new Audio('');
					//music.play();
			}
			
		})
	}
}

function updatePosition(){
	var kk=105*Math.floor(count/10);
	if(kk>450){
		$('#outline').hide();
		music=new Audio('../../../../pages/audio/counting/english/correct1to50'+'.mp3');
		music.play();		
	}
	$('#outline').attr('transform','translate('+kk+',0)');
}











