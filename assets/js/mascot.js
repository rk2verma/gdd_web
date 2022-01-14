var animInterval,p0,p1,mouthId;
var animState=false;
function mouthAnimation(cond){ 
	//console.log('condition is '+cond)
	if(animInterval){
		clearInterval(animInterval);
	}
	var happy0 = 'M 6.95 -1.25 L 7.075 -0.95 L 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q 0.196 4.313 7.075 -0.95 M -7.175 -0.3 L -7.325 0.05';
	var happy1 = 'M 9.0432 -3.51 L 8.9491 -1.7847 L 9.1987 -0.1377 M -9.0029 -2.0277 L -8.8685 -0.0837 Q 0.1171 5.1813 8.9453 -1.7991 Q 1.1731 14.9553 -8.8877 -0.1107 M -9.2141 1.8603 L -8.8685 -0.1107 Z';
	var sad0   = 'M 6.95 -1.25 L 7.075 -0.95 L 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q -0.446 -1.829 7.075 -0.95 M -7.175 -0.3 L -7.325 0.05';
	var sad1   = 'M 6.95 -1.25 L 7.075 -0.95 L 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q -0.623 -2.228 7.075 -0.95 Q -0.324 2.132 -7.152 -0.302 M -7.175 -0.3 L -7.325 0.05 Z';
	var neu0   = 'M 6.95 -1.25 L 7.075 -0.95 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q 0.09296875 2.497265625 7.075 -0.95 M -7.175 -0.3 L -7.325 0.05'
	var neu1   = 'M 6.95 -1.25 L 7.075 -0.95 L 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q 0.093 2.4973 7.075 -0.95 Q 0.263 7.843 -7.152 -0.302 M -7.175 -0.3 L -7.325 0.05 Z'
	var stt    = 'M 6.95 -1.25 L 7.075 -0.95 7.275 -0.5 M -7 -0.65 L -7.175 -0.3 Q 0.09296875 2.497265625 7.075 -0.95 M -7.175 -0.3 L -7.325 0.05';
	switch(cond){ 
		case 'happy' :
			p0=happy0;p1=happy1;
			animInterval = setInterval(animatemascot,300);
		break;
			case 'sad' :
			p0=sad0;p1=sad1;
			animInterval = setInterval(animatemascot,300);
		break;
			case 'neutral' :
			p0=neu0;p1=neu1;
			animInterval = setInterval(animatemascot,300);
		break;
			case 'stop' :
			clearInterval(animInterval);
			$(mouthId).attr('d',stt);
		break;
	}
}

function animatemascot(){
	animState=!animState;
	if(animState==false){ 		
		$(mouthId).attr('d',p0);
		$(mouthId).attr('fill','none')
	}else{
		$(mouthId).attr('d',p1)
		$(mouthId).attr('fill','#888')
	}
}
function setMouthId(id){
	mouthId = id;
}