var music;
var mainFilePath="./family.html";
var headTitle = "Parts of Face";
var questions = [{
    quest: "Who is Amitabh Bahadur's mother?",
    quest1: "",
    choices: ['Rohini Bahadur', 'Aishwarya Bahadur', 'Sameer Bahadur', 'Kareena Bahadur'],
    correctAnswer: 0
  },
  {
    quest: "Who is Rohini Bahadur's grand daughter?",
    quest1: "",
    choices: ['Aishwarya Bahadur', 'Ritik Bahadur', 'Amitabh Bahadur', 'Kareena Bahadur'],
    correctAnswer: 0
  },
  {
    quest: "Who is Ritik Bahadur's father?",
    quest1: "",
    choices: ['Aishwarya Bahadur', 'Sameer Bahadur', 'Amitabh Bahadur', 'Kareena Bahadur'],
    correctAnswer: 2
  }, 
   
  {
    quest: "Who is Aishwarya Bahadur's grandfather?",
    quest1: "",
    choices: ['Rohini Bahadur', 'Sameer Bahadur', 'Amitabh Bahadur','Kareena Bahadur'],
    correctAnswer: 1
  }, 
  {
    quest: "Who is Sameer Bahadur's Daughter-in-law?",
    quest1: "",
    choices: ['Rohini Bahadur', 'Ritik Bahadur', 'Amitabh Bahadur', 'Kareena Bahadur'],
    correctAnswer: 3
  }];


  var curAns,qid=0,score=0; 

(function(){
  setQuestion(qid); 
})();

function setQuestion(j){ 
    curAns=-1;
    //console.log((j+1)+" of "+questions.length);
    setInitialStyle();
    $('#tspanQ').html((j+1)+". "+questions[j].quest);
    if(questions[j].quest1!=undefined){
      $('#tspanQ1').html(questions[j].quest1); 
    }else{
      $('#tspan492').html(""); 
    }
    $('#optxt1').html(questions[j].choices[0]);
    $('#optxt2').html(questions[j].choices[1]);
    $('#optxt3').html(questions[j].choices[2]);
    $('#optxt4').html(questions[j].choices[3]);
    music = document.getElementById('main_audio');
    music.onended=function(){
      music = new Audio('./family/inst3.mp3');
      music.play();
      music.onended=function(){
        music = new Audio('./family/inst4.mp3');
        music.play();
        music.onended=function(){
          music = new Audio('./family/mcq1.mp3');
          music.play();
        }
      }
    }

    $('#choice1, #choice2,#choice3,#choice4').click(function(){
      $('#btn_submit,#btn_next ').css('cursor','pointer');
      switch($(this).attr('id')){
        case 'choice1':
          $('circle').attr('cy',86);
          curAns=0;
        break;
        case 'choice2':
          $('circle').attr('cy',121);
          curAns=1;
        break;
        case 'choice3':
          $('circle').attr('cy',156);
          curAns=2;
        break;
        case 'choice4':
          $('circle').attr('cy',191);
          curAns=3;
        break;
      }
      $('#radioSel').css('display','block');
      music.pause();
    });
    
    if(qid==questions.length-1){
      $('#btn_next').css('display','none'); 
    }
}
function setInitialStyle() {
  $('#popup_mc').css('display','none');
  $('#patch_mc').css('display','none');
  
  $('#corSym').css('display','none');
  $('#incSym').css('display','none');
/*  */
  $('#radioSel').css('display','none');
 
  //$('#conclusion_ost').css('display','none');
  $('#conclusion_ost, #tspan490,#tspan492,#tspan287,#tspan338,#tspan391,#tspan444 ').attr('class','disabled1');
  $('#conclusion_ost').css('cursor','pointer');
  $('#btn_submit,#btn_next ').css('cursor','default');
  $('#popup_sub_btn, #choice1, #choice2,#choice3,#choice4').css('cursor','pointer');
  $('#radioSel circle').css('fill','#333333');  
  $('#btn_submit').css('display','block');
  $('#cover-rect').css('display','none');
  $('#tspan234').html(headTitle);
}
$('#btn_submit').click(function(){
    if(curAns>-1){
      $('#choice1, #choice2,#choice3,#choice4').unbind('click');
      $(this).css('display','none');
      $('#radioSel circle').css('fill','#777777');
      var y0 = 65+curAns*30;
      var corAns = questions[qid].correctAnswer;
      if(corAns==curAns){
        $('#corSym').css('display','block');
        $('#corSym').attr('transform','translate(-170,'+y0+')');
        var music = new Audio('../../../../audio/mcq/MCQcorrect.mp3');
        score++;
      }else{
        $('#corSym').css('display','block');
        $('#incSym').css('display','block');
        var y1 = 65+corAns*30;
        $('#incSym').attr('transform','translate(-170,'+y0+')');
        $('#corSym').attr('transform','translate(-170,'+y1+')');
        music = new Audio('../../../../audio/mcq/MCQincorrect.mp3');
      }
      music.play();
    }
    if(qid==questions.length-1){
      music = new Audio('../../../../audio/mcq/mcqendsfx.mp3');
      music.play();
      $('#popup_mc').css('display','block');
      
      $('#myScore').html(score*10);
      $('#conclusion_ost').css('display','block');
    }
  });

$('#popup_sub_btn').click(function(){
  window.location.href=mainFilePath;
})
$('#btn_next').click(function(){
  qid++;
  if(qid<=questions.length-1){
    setQuestion(qid);
    music = new Audio('./family/mcq'+(qid+1)+'.mp3');
    music.play();
  }
});
/*

Now we will see 
how right you are
about bahadur
family.


Read the
questions carefully
and select the
correct answer 
from the given 
options. Click on
"Submit".

*/

