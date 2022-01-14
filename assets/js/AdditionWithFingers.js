var count=0,res,num1,music,mcount=0;
var qTxt = ['tspan4242','tspan4251','tspan4260']
var hitArea = ['path4141','path4102','path4111','path4121','path4131','path4792','path4782','path4772','path4762','path4752'];
var closeHand = ['g4100','g4750']
var handArr = ['g4092','g4084','g4076','g4064','g4056',  'g4742','g4734','g4726','g4718','g4710'];
var colrArr = ['g4167','g4178','g4190','g4202','g4214','g4866','g4854','g4842','g4830','g4818'];
var oupTxt   = ['g4346','g4381','g4416','g4451','g4486','g4521','g4556','g4591','g4626','g4661'];
var oupTxtBg = ['g4335','g4370','g4405','g4440','g4475','g4510','g4545','g4580','g4615','g4650'];
var musicList=['title','menu','inst1','inst2','inst3'];
var feedTxt = [['If you want to add, then ','start clicking on the ','fingers of left edge.','','','',''],
			['You have added correctly','with the help of the ','fingers. Click on the ','correct answers for the ','numbers as given below.','',''],
			['','','For the next question,','click on me.','','','']];
var negRes = ['Check it again!','Please check them        carefully!','Try it again!','Please be mindful when   you check the numbers.','Be careful friends.','Check it again.'];
var posRes = ['Correct answer.','Excellent!','Accurate.','Great!','Perfect.','Congratulations! You are genius.'];
(function(){
	$('#numboxRect').hide();
	for(var i=0;i<10;i++){
		$('#'+hitArea[i]).bind('click',onhitClick);
		$('#'+oupTxt[i]).bind('click',onNumClick);
		$('#'+oupTxtBg[i]).bind('click',onNumClick);
		$('#'+oupTxtBg[i]).css('cursor','pointer');
		$('#'+oupTxt[i]).css('cursor','pointer');	
		$('#'+hitArea[i]).css('cursor','pointer');		
	}
	$('#mascot').css('cursor','pointer')
	$('#mascot').click(init);
	music = document.getElementById('main_audio');
	music.onended=checkMusic;
	setText(0);
	setMouthId('#path5089');
	init();	
})()

function checkMusic(){
	mouthAnimation('stop');
	if(mcount==2 || mcount==3 ){
		$('#numboxRect').attr('filter','url(#f1)');
		$('#numboxRect').show();
	}else{
		$('#numboxRect').attr('filter','');
		$('#numboxRect').hide();
	}
	if(mcount<5){
		music=new Audio('../../../audio/Mact11/'+musicList[mcount]+'.mp3');
		music.play();
		mouthAnimation('neutral');	
	}else{
		mouthAnimation('stop');
	}
	
	
	mcount++;
	music.onended=checkMusic;
}

function onhitClick(e){
	if(music){music.pause();}
	var kk = hitArea.indexOf(e.currentTarget.id);
	if(kk>0 && kk!==5){
		$('#'+handArr[kk-1]).hide();	
	}else if(kk==0){
		$('#'+closeHand[0]).hide();	
	}else if(kk==5){
		$('#'+closeHand[1]).hide();
	}
	$('#'+handArr[kk]).show();
	$('#'+hitArea[kk]).hide();
	$('#'+colrArr[kk]).show();

	count++;
	if(count<=num1){
		$('#'+colrArr[kk]).find('path').attr('fill','#147C00')
	}else{
		$('#'+colrArr[kk]).find('path').attr('fill','#cc0099')
	}
	
	if(count==res){
		$('#'+handArr[kk]).attr('opacity','0.6');
		if(kk>4){
			$('#'+handArr[4]).attr('opacity','0.6');
		}		
		$('#coverNumber').hide();
		setText(1);
		music=new Audio('../../../audio/Mact11/inst4.mp3');
		music.play();
		mouthAnimation('stop');
		mouthAnimation('neutral');
		music.onended=function(){
			music=new Audio('../../../audio/Mact11/inst3_1.mp3');
			music.play();
			mouthAnimation('stop');
			mouthAnimation('neutral');
			music.onended=function(){
				mouthAnimation('stop');
			}		
		}
	}else{
		$('#'+hitArea[count]).show();
	}
}


function generateNumber(){
	res = 1+Math.ceil(Math.random()*9);
	num1 = Math.ceil(Math.random()*(res-1));
	var num2 = res-num1;
	$('#'+qTxt[0]).html(num1);
	$('#'+qTxt[1]).html(num2);
	$('#'+qTxt[2]).html('');
	if(res<6){
		$('#'+closeHand[1]).attr('opacity','0.6');
	}else{
		$('#'+closeHand[1]).attr('opacity','1');
	}
	$('#coverMascot').show();
	$('#coverNumber').show();
}

function init(){
	setText(0);
	for(var i=0;i<10;i++){
		$('#'+handArr[i]).attr('opacity','1');
		$('#'+handArr[i]).hide();
		$('#'+hitArea[i]).attr('opacity','0');
		$('#'+hitArea[i]).hide();		
		$('#'+colrArr[i]).hide();
		$('#'+oupTxt[i]).find('tspan').html(i+1);
	}
	$('#'+closeHand[1]).show();
	$('#'+closeHand[0]).show();
	$('#'+closeHand[1]).attr('opacity','1');
	$('#'+closeHand[0]).attr('opacity','1');
	count=0;
	if(count<10){
		for(var i=0;i<10;i++){
			$('#'+hitArea[i]).hide();
		}
		$('#'+hitArea[count]).show();
	}	
	generateNumber();
}


function onNumClick(e){
	if(music){music.pause();}
	var kk = oupTxtBg.indexOf(e.currentTarget.id);
	if(kk==-1){
		kk=oupTxt.indexOf(e.currentTarget.id);
	}
	if(kk+1==res){
		$('#coverMascot').hide();
		$('#coverNumber').show();
		setText(2);

	}else{
		setText(3)
	}
	$('#'+qTxt[2]).html(kk+1);
}

function setText(kk){
	var ss = Math.floor(Math.random()*6);
	$('#tspan4689').html('');
	$('#tspan4691').html('');
	$('#tspan4693').html('');
	switch(kk){
		case 2:
			$('#tspan4681').html(posRes[ss].substr(0,25));
			$('#tspan4683').html(posRes[ss].substr(25,25));
			$('#tspan4685').html(feedTxt[kk][2]);
			$('#tspan4687').html(feedTxt[kk][3]);
			music=new Audio('../../../audio/Mact11/Correct'+(ss+1)+'.mp3');
			music.play();
			mouthAnimation('stop');
			mouthAnimation('neutral');
			music.onended=function(){
				music=new Audio('../../../audio/Mact11/next.mp3');
				music.play();
				mouthAnimation('stop');
				mouthAnimation('neutral');
				music.onended=function(){
					mouthAnimation('stop');
				}
			}
		break;
		case 3:
			$('#tspan4681').html(negRes[ss].substr(0,25));
			$('#tspan4683').html(negRes[ss].substr(25,25));
			$('#tspan4685').html('');
			$('#tspan4687').html('');
			music=new Audio('../../../audio/Mact11/Wrong'+(ss+1)+'.mp3');
			music.play();
			mouthAnimation('stop');
			mouthAnimation('neutral');
			music.onended=function(){
				mouthAnimation('stop');				
			}
		break;
		default:
			$('#tspan4681').html(feedTxt[kk][0]);
			$('#tspan4683').html(feedTxt[kk][1]);
			$('#tspan4685').html(feedTxt[kk][2]);
			$('#tspan4687').html(feedTxt[kk][3]);
			$('#tspan4689').html(feedTxt[kk][4]);
			$('#tspan4691').html(feedTxt[kk][5]);
			$('#tspan4693').html(feedTxt[kk][6]);
		break;
	}
	
}


//Accurate!  Excellent!

