var count=0,res,num1,music,mcount=0;
var qTxt = ['tspan1386','tspan1395','tspan1404']
var fruitArr =[ ['g1161','g1169','g1177','g1185','g1193','g1201','g1209','g1217','g1225'],
				['g1233','g1241','g1249','g1257','g1265','g1273','g1281','g1289','g1297'],
				['g1305','g1313','g1321','g1329','g1337','g1345','g1353','g1361','g1369','g1377']];
			
var hitArea = ['path4141','path4102','path4111','path4121','path4131','path4792','path4782','path4772','path4762','path4752'];
var closeHand = ['g4100','g4750']
var handArr = ['g4092','g4084','g4076','g4064','g4056',  'g4742','g4734','g4726','g4718','g4710'];
var colrArr = ['g4167','g4178','g4190','g4202','g4214','g4866','g4854','g4842','g4830','g4818'];
var oupTxt   = ['g4346','g4381','g4416','g4451','g4486','g4521','g4556','g4591','g4626','g4661'];
var oupTxtBg = ['g4335','g4370','g4405','g4440','g4475','g4510','g4545','g4580','g4615','g4650'];
var musicList=['title','menu','inst1','inst2','inst3'];
var feedTxt = [['You have to add the','numbers as shown','above. The same ','numbers of fruits have ','been shown beside ','those numbers.'],
			['Add the numbers and ','with the help of the','number pad, enter the','addition. Click on','Submit.',''],
			['','','For the next question,','click on me.','','','']];
var negRes = ['Check it again!','Please check them        carefully!','Try it again!','Please be mindful when   you check the numbers.','Be careful friends.','Check it again.'];
var posRes = ['Correct answer.','Excellent!','Accurate.','Great!','Perfect.','Congratulations! You are genius.'];
var keyBtn = ['g1545','g1564','g1583','g1602','g1621','g1640','g1659','g1678','g1697','g1716','g1526'];
(function(){
	$('#numboxRect').hide();
	for(var j=0;j<9;j++){
		$('#'+fruitArr[0][j]).find('use').attr({'x':'-30','y':'-30'});
		$('#'+fruitArr[1][j]).find('use').attr({'x':'-30','y':'-30'});
		$('#'+fruitArr[2][j]).find('use').attr({'x':'-30','y':'-30'});
	}
	$('#'+fruitArr[2][9]).find('use').attr({'x':'-30','y':'-30'});

	for(var i=0;i<11;i++){
		$('#'+keyBtn[i]).bind('click',onNumClick);
		$('#'+keyBtn[i]).css('cursor','pointer');			
	}
	$('#nextBtn,#submitBtn').css('cursor','pointer')
	$('#submitBtn').click(onSubmit);
	$('#nextBtn').click(onNext);
	music = document.getElementById('main_audio');
	music.onended=checkMusic;
	$('#conclusion_ost').hide();
	setText(0);
	setMouthId('#path1444');
	init();	
	
})()

function onNext(){
	setText(1);
	music=new Audio('../../../audio/Mact12/'+musicList[4]+'.mp3');
		music.play();
		mouthAnimation('neutral');
		music.onended=function(){
			mouthAnimation('stop	');
		}
	init();
}

function checkMusic(){
	mouthAnimation('stop');
		if(mcount<5){
			if(mcount==4){
				setText(1);
			}
		music=new Audio('../../../audio/Mact12/'+musicList[mcount]+'.mp3');
		music.play();
		mouthAnimation('neutral');	
		music.onended=checkMusic;
		}
	mcount++;
	
}

function generateNumber(){
	var kk = Math.ceil(Math.random()*5);
	$('#img').attr('xlink:href','./images/fruits_copy_2000'+kk+'_png.png')
	res = 1+Math.ceil(Math.random()*9);
	num1 = Math.ceil(Math.random()*(res-1));
	var num2 = res-num1;
	for(var i=0;i<9;i++){
		if(i<num1){
			$('#'+fruitArr[0][i]).show();	
		}else{
			$('#'+fruitArr[0][i]).hide();
		}
		if(i<num2){
			$('#'+fruitArr[1][i]).show();	
		}else{
			$('#'+fruitArr[1][i]).hide();
		}
		$('#'+fruitArr[2][i]).hide();
		
	}
	$('#'+fruitArr[2][9]).hide();
	

	$('#'+qTxt[0]).html(num1);
	$('#'+qTxt[1]).html(num2);
	$('#'+qTxt[2]).html('');
	

	$('#rectKey').hide();
	$('#rectNxt').show();
	$('#rectSub').show();

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
	var kk = keyBtn.indexOf(e.currentTarget.id);
	if(kk==0){
		//clear
		$('#'+qTxt[2]).html('');
		$('#rectSub').show();		
	}else{
		$('#rectSub').hide();
		//val is kk-1
		if(res<10){
			$('#'+qTxt[2]).html(kk-1);
		}else{
			if($('#'+qTxt[2]).html()=='' || $('#'+qTxt[2]).html()=='0'){
				$('#'+qTxt[2]).html(kk-1);	
			}else{
				var pm = $('#'+qTxt[2]).html()+''+(kk-1);
				if(pm.length<3){
					$('#'+qTxt[2]).html(pm);
				}else{
					$('#'+qTxt[2]).html(pm.substr(2,1));
				}
			}			
		}		
	}	
}

function onSubmit(){
	if(music){music.pause();}
	if($('#'+qTxt[2]).html()==res){
		$('#rectSub').show();
		$('#rectKey').show();
		$('#rectNxt').hide();
		for(var i=0;i<res;i++){
			$('#'+fruitArr[2][i]).show();
		}
		setText(2);
	}else{
		setText(3)
	}
}

function setText(kk){
	var ss = Math.floor(Math.random()*6);
	
	$('#tspan1473,#tspan1475').html('');
	
	switch(kk){
		case 2:
			$('#tspan1465').html(posRes[ss].substr(0,25));
			$('#tspan1467').html(posRes[ss].substr(25,25));
			$('#tspan1469').html(feedTxt[kk][2]);
			$('#tspan1471').html(feedTxt[kk][3]);
			music=new Audio('../../../audio/Mact12/Correct'+(ss+1)+'.mp3');
			music.play();
			mouthAnimation('stop');
			mouthAnimation('neutral');
			music.onended=function(){
				music=new Audio('../../../audio/Mact12/next.mp3');
				music.play();
				mouthAnimation('stop');
				mouthAnimation('neutral');
				music.onended=function(){
					mouthAnimation('stop');
				}
			}
		break;
		case 3:
			$('#tspan1465').html(negRes[ss].substr(0,25));
			$('#tspan1467').html(negRes[ss].substr(25,25));
			$('#tspan1469,#tspan1471,#tspan1473,#tspan1475').html('');
			
			music=new Audio('../../../audio/Mact12/Wrong'+(ss+1)+'.mp3');
			music.play();
			mouthAnimation('stop');
			mouthAnimation('neutral');
			music.onended=function(){
				mouthAnimation('stop');				
			}
		break;
		default:
			$('#tspan1465').html(feedTxt[kk][0]);
			$('#tspan1467').html(feedTxt[kk][1]);
			$('#tspan1469').html(feedTxt[kk][2]);
			$('#tspan1471').html(feedTxt[kk][3]);
			$('#tspan1473').html(feedTxt[kk][4]);
			$('#tspan1475').html(feedTxt[kk][5]);			
		break;
	}
	
}


//Accurate!  Excellent!


