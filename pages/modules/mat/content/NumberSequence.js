var msgFeed=[[['In this section, you ','will learn to identify ','the numbers and ','keep them in the ','order. ',''],
			['Now, click on the ','numbers and keep ','them in proper order.','','',''],['You have successfully',
'kept the numbers 1-50','in the right order. If you','want to play another','game click on ‘Home’.']],

			[['','','','','',''],['','','','','',''],[]]],
	audArr = [['InthisSection','nowClickonTheNum'],['','']],
wrongFeed = [['Look carefully!','','','','',''],['Be careful, Friend!','','','','',''],['Do it again!','','','','',''],
			 ['No, it is not correct! ','Take another chance.','','','',''],['Um, there must be ','something wrong!','','','',''],
				['The order of the ','numbers is not proper.','','','','']	];




var dId,nextNum,baseNum,refArr=[],
oupArr= ['tspan1049','tspan1070','tspan1091','tspan1112','tspan1133','tspan1154','tspan1175','tspan1196','tspan1217','tspan1238',
'tspan1259','tspan1280','tspan1301','tspan1322','tspan1343','tspan1364','tspan1385','tspan1406','tspan1427','tspan1448',
'tspan1469','tspan1490','tspan1511','tspan1532','tspan1553','tspan1574','tspan1595','tspan1616','tspan1637','tspan1658',
'tspan1679','tspan1700','tspan1721','tspan1742','tspan1763','tspan1784','tspan1805','tspan1826','tspan1847','tspan1868',
'tspan1889','tspan1910','tspan1931','tspan1952','tspan1973','tspan1994','tspan2015','tspan2036','tspan2057','tspan2078'];

inpArr=['tspan2099','tspan2120','tspan2141','tspan2162','tspan2183','tspan2204','tspan2225','tspan2246','tspan2267','tspan2288',
'tspan2309','tspan2330','tspan2351','tspan2372','tspan2393','tspan2414','tspan2435','tspan2456','tspan2477','tspan2498',
'tspan2519','tspan2540','tspan2561','tspan2582','tspan2603','tspan2624','tspan2645','tspan2666','tspan2687','tspan2708',
'tspan2729','tspan2750','tspan2771','tspan2792','tspan2813','tspan2834','tspan2855','tspan2876','tspan2897','tspan2918',
'tspan2939','tspan2960','tspan2981','tspan3002','tspan3023','tspan3044','tspan3065','tspan3086','tspan3107','tspan3128'];

(function(){


window.onload=function() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
  	displayId = urlParams.get('id');
  	dId = displayId;
  	ModifyText(displayId);
  	setMouthId('#path3235');	
  	music = document.getElementById('main_audio');
  
  	music.onended= function(e){
  		music = new Audio('./numSeq/'+audArr[dId][0]+'.mp3');
		music.play();	
		$('#path3235').removeClass('K L O U');
		mouthAnimation('neutral');
		music.onended=function(){
			setText(1);	
			music = new Audio('./numSeq/'+audArr[dId][1]+'.mp3');
			music.play();
			shuffleArray(refArr);
			init();
			music.onended=function(){
				mouthAnimation('stop');
			}
		}
  	}  	
  }
})()			


function ModifyText(displayId){
	for(var i=0;i<50;i++){
		$('#'+inpArr[i]).html('');
		$('#'+oupArr[i]).html('');
		if(i<9){
			$('#'+oupArr[i]).parent().parent().attr('transform','translate(-65,-8.35)');
		}else{
			$('#'+oupArr[i]).parent().parent().attr('transform','translate(-68,-8.35)');
		}		
		
		if(dId==0){
			refArr[i]=i+1;			
		}else{
			refArr[i]=i+51;
		}
	}
	switch(displayId){
		case '0':
			$('#g3260 , #g3279').hide();
			$('#tspan3143').html('1 - 50').hide();
			$('#tspan3145').html('Number').hide();
			setText(0);			
			nextNum = 1;
			baseNum = 1;
		break;
		case '1':
			$('#tspan3143').html('51 - 100').hide();
			$('#tspan3145').html('Number').hide();
			baseNum = 51;
			nextNum = 51;
		break;
	}	
}

function setText(tid){
	$('#tspan3181').html(msgFeed[dId][tid][0]);
	$('#tspan3183').html(msgFeed[dId][tid][1]);
	$('#tspan3185').html(msgFeed[dId][tid][2]);
	$('#tspan3187').html(msgFeed[dId][tid][3]);
	$('#tspan3189').html(msgFeed[dId][tid][4]);
	$('#tspan3191').html(msgFeed[dId][tid][5]);	
}

function setwrongText(tid){
	$('#tspan3181').html(wrongFeed[tid][0]);
	$('#tspan3183').html(wrongFeed[tid][1]);
	$('#tspan3185').html(wrongFeed[tid][2]);
	$('#tspan3187').html(wrongFeed[tid][3]);
	$('#tspan3189').html(wrongFeed[tid][4]);
	$('#tspan3191').html(wrongFeed[tid][5]);	
}




function init(){
	
	for(var i=0;i<50;i++){
		if(refArr[i]<10){
			$('#'+inpArr[i]).parent().parent().attr('transform','translate(-65,-8.35)');
		}else{
			$('#'+inpArr[i]).parent().parent().attr('transform','translate(-68,-8.35)');
		}
		$('#'+inpArr[i]).html(refArr[i]);
		$('#'+inpArr[i]).parent().parent().parent().click(onClickMethod);
	}	
}

function onClickMethod(e){
	
	if($(e.target).parent().find('tspan').html()==nextNum){
		$('#'+oupArr[nextNum-baseNum]).html(nextNum);		
		if(music){
			music.pause();		
		}
		music=new Audio('../../../../pages/audio/counting/english/'+nextNum+'.mp3');
		
		mouthAnimation('happy');
		
		nextNum++;
		if(dId==0){
			if(nextNum==51){
				//end Game
				setText(2);
				music=new Audio('./numSeq/50'+'.mp3');
				music.play();
				endGame();
			}else{
				//continue
				music.play();
			}
		}else{
			if(nextNum==101){
				//end Game
				setText(2);
				music = new Audio('./numSeq/100'+'.mp3');
				music.play();	
				endGame();
			}else{
				// continue
			}
		}
		music.onended=function(){
			mouthAnimation('stop');
		}
	}else{
		if(music){
			music.pause();		
		}
		var num = Math.floor(Math.random()*6)
		setwrongText(num)
		music = new Audio('./numSeq/wrong'+num+'.mp3');
		music.play();
		mouthAnimation('sad')
		music.onended=function(){
				mouthAnimation('stop');
			}
	}
}
function endGame(){
	for(var i=0;i<50;i++){
		$('#'+inpArr[i]).parent().parent().parent().unbind('click');
	}
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/////////////////////////////////////////////////


//////////////////////////////////////////