var cov,tarArr,main_audio,music,tim,tot,myCol,objArr,randArr,curObj,path='./BAct_C01/',id;
var corFeed=['Absolutly correct.','You identified colour correct.','Very good.'];
var negFeed=['Its incorrect.','Oops you missed it.','Try again.'];
function newColor(colArr,tarArr1,rid,cov1){
	myCol=colArr;
	objArr=tarArr1;
	cov=cov1;
	for(var i=0;i<myCol.length;i++){
		tarArr[i]=tarArr1[i];	
	}	
	id=rid;
	init();
}
function init() {
	// body...
	$('#text340a').hide();
  	$('#text340b').hide();
	$(cov).hide();
	tot=myCol.length;
	var randArr1=new Array(tot);
	var randArr2=new Array(tot);
	randArr = new Array(tot);
	for(var i=0;i<tot;i++){
		randArr1[i]=Math.random();
		randArr2[i]=randArr1[i];
		randArr1.sort(function(a,b){return a-b});	
	}
	$('#text340').html('');
	$('#text340').css('transform','translate(0,10)');
	music= document.getElementById('main_audio');;
	$('#main_audio').on('ended', function(){
		music = new Audio(path+'menu'+id+'.mp3');
    	music.play();
    	music.onended=function(){
    		startActivity();	
    		playSound();
    	}
 	})
	for(i=0;i<tot;i++){
		randArr[i]=randArr2.indexOf(randArr1[i]);
		$(tarArr[i]).css('fill',myCol[randArr[i]]);
		$(tarArr[i]).css('cursor','pointer');
		$(tarArr[i]).bind('click',myclickHandler);
	}	
}

function startActivity(){
	curObj = randArr[Math.floor(Math.random()*tot)];
	if(tim){
		clearInterval(tim);
	}
	tim = setInterval(playSound,3000);
}
function playSound(){ 
	if(curObj==undefined){
		startActivity();
	}
	var ss=curObj+1;
	var audio=new Audio(''+path+ss+'.mp3');
	audio.play();
	$('#text340').html('');
}
function playFeedSound(bool){
	clearInterval(tim);
	if(music){
	   music.pause();
	  }
	var kk=''+Math.floor(Math.random()*3);console.log(kk);
	if(bool){
		var pp=path+'positive';
		$('#text340').html(corFeed[kk]);
	}else{
		pp=path+'negative';
		$('#text340').html(negFeed[kk]);
	}
	music = new Audio(''+pp+''+kk+'.mp3');
    music.play();
    music.onended=function(){ console.log(tot);
    	if(tot>0){
    		playSound();
    	}else{
    		music = new Audio(''+path+'conclusion_1.mp3');
    		$('#text340').html('');
    		$('#text340a').show();
    		$('#text340b').show();
   			$(cov).show();
			music.play();
    	}
    }
}
function myclickHandler(e){
			clearInterval(tim);
			if(curObj==randArr[objArr.indexOf('#'+e.currentTarget.id)]){
				var ind=randArr.indexOf(curObj);
				randArr.splice(ind,1);
				objArr.splice(ind,1);
				tot--;
				playFeedSound(true);
				if(tot>0){
					startActivity();
				}else{
					$(cov).show();
				}
			}else{
				playFeedSound(false)				
			}
		};