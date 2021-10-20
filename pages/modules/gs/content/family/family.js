var cov1='#cov-rect';
      var objArr = ['mother','father','son','bahadur','wife','daughter'];
     


var cov,tarArr,main_audio,music,tim,tot,myCol,objArr,randArr,curObj,path='./family/',id;
var corFeed=['Absolutly correct.','You identified colour correct.','Very good.'];
var negFeed=['Its incorrect.','Oops you missed it.','Try again.'];
function newFamily(){
	init();
		$('#cov-rect').hide();
		$('#ost_mc').hide();
}

function init() {
	// body...
	
	$('#mother, #wife, #father,#son,#daughter,#bahadur,#next_mc').css('cursor','pointer');
	//$('#bln_mc').css('display','none')
	music= document.getElementById('main_audio');;
	$('#main_audio').on('ended', function(){
		music = new Audio(path+'menu'+'.mp3');
    	music.play();
    	music.onended=function(){
    		music = new Audio(path+'inst1'+'.mp3');
    		$('#ost_mc').show();
    		music.play();
    		music.onended=function(){
				$('#cov-rect').hide();
				$('#t01x').html('Click on the ');
				$('#t02x').html('next member.');
				$('#t03x').html('');
				$('#t04x').html('');
				$('#t05x').html('');
				$('#ost_mc').hide();
    		}    		
    	}
 	})
	
	 $('#mother, #wife, #father,#son,#daughter,#bahadur').click(function(e){
	 	$('#ost_mc').hide();
         var id=e.currentTarget.id;
         var objId = (objArr.indexOf(id));// console.log(objId);
         for(var i=0;i<7;i++){
            $('#'+data[i]).addClass('inactive');
         }
         $('#'+id).removeClass('inactive')
         
         var dn= dL+eval('d'+objId)+dR;
         $('#Layer_1 path').attr('d',dn);
         updateText(objId);
      });
	 $('#next_mc').click(function(){
	 	window.location.href="./family_mcq.html";
	 })
      	
}



/*

ost_mc.ost_txt.text = "Now click alternately on each/every member of the family.";
TempSound.load(new URLRequest("audio/OAct17/menu.mp3"))
ost_mc.ost_txt.text = "Click on the next member.";
TempSound.load(new URLRequest("audio/OAct17/inst1.mp3"));
TempSound.load(new URLRequest("audio/OAct17/inst2.mp3"));

*/		


      var data = [ "mother", "father", "son","bahadur", "wife", "daughter","dog"];
      var data0 = [0,1,3,4,2,5,6],data1=[1,0,3,4,2,5,6],data2=[2,3,4,1,0,5,6],
          data3 = [3,4,1,0,2,5,6],data4=[4,3,1,0,2,5,6],data5=[5,3,4,1,0,2,6],

          time0 = [0,3,6,9,12.8,16,19.8],time1=[0,3,6.4,9.6,13.1,16.6,20.6],
          time2=[0,3.2,6.3,9.3,12.4,15.8,19], time3 = [0,3.3,6.6,10,13.3,16.4,19.5],
          time4=[0,3,6.3,10,13.9,16.9,20.3],time5=[0,3.8,6.6,9.8,13.3,16.6,19.8], 

          tGrp0=[[0],[1],[2,3],[4],[5,6],[8,9],[10]],

          text0 = ['Hello! I am Rohini Bahadur.',
                  ' This is my husband Sameer Bahadur.',
                  ' This is',

                  ' my son Amitabh Bahadur.',
                  ' This is my daughter-in-law Kareena Bahadur.',
                   'This',

                   ' is my grand-son Ritik Bahadur.',
                   '',
                   ' This is my grand-daughter Aishwarya ',
                   
                   'Bahadur',
                   ' and this is our dog Tommy.'],
          tGrp1=[[0],[1],[2,3],[4],[5,6],[8,9],[10]],
          
          text1 = ['Hello! I am Sameer Bahadur.',
                  ' This is my wife Rohini Bahadur. ',
                   'This is my',

                   ' son Amitabh Bahadur.',
                   'This is my daughter-in-law Kareena Bahadur.',
                   'This',

                   'is my grand-son Ritik Bahadur.',
                   '',
                   ' This is my grand-daughter Aishwarya',

                   'Bahadur',
                   'and this is our dog Tommy.'];
           tGrp2=[[0],[1],[2,3],[4],[5,6],[8,9],[10]],      
           text2 = ['Hello! I am Ritik Bahadur.',
                  ' This is my father Amitabh Bahadur. ',
                   'This is my',

                   ' mother Kareena Bahadur.',
                   'This is my grandfather Sameer Bahadur.',
                   'This is',

                   'is my grandmother Rohini Bahadur.',
                   ' This is my sister Aishwarya Bahadur ',
                   '',

                   'and this is our dog Tommy.',
                   '']; 
           tGrp3=[[0],[1],[2,3],[4],[5,6],[7],[8,9]],
                  
           text3 = ['Hello! I am Amitabh Bahadur.',
                  ' This is my wife Kareena Bahadur. ',
                   'This is my ',

                   'father Sameer Bahadur. ',
                   'This is my mother Rohini Bahadur.',
                   'This is my son ',

                   'Ritik Bahadur.',
                   'This is my daughter Aishwarya Bahadur ',
                   'and this is our dog',

                   'Tommy.',
                   ''];                 
          tGrp4=[[0],[1],[2,3],[5,6],[7],[8,9],[10]],           
          text4 = [' Hello! I am Kareena Bahadur.',
                  ' This is my husband Amitabh Bahadur. ',
                   'This',

                   ' is my father-in-law Sameer Bahadur. ',
                   '',
                   'This is my mother-in-law Rohini',

                   'Bahadur.',
                   'This is my son Ritik Bahadur.',
                   ' This is my daughter Aishwarya',

                   'Bahadur',
                   'and this is our dog Tommy.']; 
           tGrp5=[[0],[1],[2,3],[4],[6],[7],[9]],      
           text5 = ['Hello! I am Aishwarya Bahadur.',
                  ' This is my father Amitabh Bahadur. ',
                   'This',

                   'is my mother Kareena Bahadur. ',
                   'This is my grandfather Sameer Bahadur.',
                   '',

                   'This is my grandmother Rohini Bahadur.',
                   'This is my brother Ritik Bahadur ',
                   '',

                   'and this is our dog Tommy.',
                   ''];                 


      var dL = ' M 383 -69 Q 383 -82 376 -91 Q 369 -100 358 -100 L -357 -100 Q -368 -100 -375 -91 Q -382 -82 -382 -69 L -382 -14 Q -382 -1 -375 8 Q -368 17 -357 17 '
      var dR=' Q 369 17 376 8 Q 383 -1 383 -14 L 383 -69 Z' ;

      var d0 = 'L -222 20 L -266 80  L -192 19  L 358 17 ',
          d1 = 'L -141 20 L -164 50  L -115 19  L 358 17 ',
          d2 = 'L -141 20 L -92 140  L -115 19  L 358 17 ',
          d3 = 'L  41 17  L  20 30   L 65 18    L 358 17 ',
          d4 = 'L  81 20  L  111 50  L 99 19    L 358 17 ',
          d5 = 'L 191 20  L  200 140  L 215 19   L 358 17 ';

  function updateText(id){
    var ids=['t01','t01a','t01b','t02','t02a','t02b','t03','t03a','t03b','t04','t04a'];
    for(var i=0;i<11;i++){
       //console.log(ids[i],eval('text'+id)[i]);
       $('#'+ids[i]).html(eval('text'+id)[i]);
    }
    if(music){
    	music.pause();
    }
    music = new Audio(path+objArr[id]+'.mp3');
    		music.play();
    		music.onended=function(){
				music = new Audio(path+'inst2'+'.mp3');
				$('#t01x').html('Click on the ');
				$('#t02x').html('next member.');
				$('#t03x').html('');
				$('#t04x').html('');
				$('#t05x').html('');
				$('#ost_mc').show();
				music.play();
				$('#next_mc').show()	    		
    		}
    		var pos=0;
    	music.addEventListener('timeupdate', function () {
                var currentTimeS = music.currentTime;
                //console.log(currentTimeS);
                var timeset = eval('time'+id)[pos]; //this might be changed
                if (currentTimeS>= timeset) {
                    //console.log('Equal time!',timeset,pos);
                    updateColor(id,pos);
                    pos++;                    
                }

            }, false);	
  }
  function updateColor(id,pos){
  	var ids=['t01','t01a','t01b','t02','t02a','t02b','t03','t03a','t03b','t04','t04a'];
  	for(var i=0;i<11;i++){
  		$('#'+ids[i]).css('fill','#000000');  		
  	}
  	for(var i=0;i<7;i++){
            $('#'+data[i]).addClass('inactive');
         }
    $('#'+data[id]).removeClass('inactive');
    var kk=eval('data'+id);
    $('#'+data[kk[pos]]).removeClass('inactive');
    var pp=eval('tGrp'+id)[pos]; console.log('tGrp'+id,pp.length)
         for(var i=0;i<pp.length;i++){
         	$('#'+ids[pp[i]]).css('fill','#CA0000')
         }
  	
  }

  