//***************************************************************************//  
var curAns,qid=0,score=0;	

(function(){
	setQuestion(qid);	
})();

function setQuestion(j){ 
		curAns=-1;
		//console.log((j+1)+" of "+questions.length);
		setInitialStyle();
		$('#tspan490').html((j+1)+". "+questions[j].quest);
		if(questions[j].quest1!=undefined){
			$('#tspan492').html(questions[j].quest1); 
		}else{
			$('#tspan492').html(""); 
		}
		$('#tspan287').html(questions[j].choices[0]);
		$('#tspan338').html(questions[j].choices[1]);
		$('#tspan391').html(questions[j].choices[2]);
		$('#tspan444').html(questions[j].choices[3]);

		$('#box, #g311,#g364,#g417').click(function(){
			$('#btn_submit,#btn_next ').css('cursor','pointer');
			switch($(this).attr('id')){
				case 'box':
					$('circle').attr('cy',448.5);
					curAns=0;
				break;
				case 'g311':
					$('circle').attr('cy',489.3);
					curAns=1;
				break;
				case 'g364':
					$('circle').attr('cy',530.1);
					curAns=2;
				break;
				case 'g417':
					$('circle').attr('cy',570.9);
					curAns=3;
				break;
			}
			$('#radioSel').css('display','block');
		});
		
		if(qid==questions.length-1){
			$('#btn_next').css('display','none'); 
		}
}
function setInitialStyle() {
	$('#corSym').css('display','none');
	$('#incSym').css('display','none');
	$('#radioSel').css('display','none');
	$('#popup').css('display','none');
	//$('#conclusion_ost').css('display','none');
	$('#conclusion_ost, #tspan490,#tspan492,#tspan287,#tspan338,#tspan391,#tspan444 ').attr('class','disabled1');
	$('#conclusion_ost').css('cursor','pointer');
	$('#btn_submit,#btn_next ').css('cursor','default');
	$('#box, #g311,#g364,#g417').css('cursor','pointer');
	$('#radioSel circle').css('fill','#333333');	
	$('#btn_submit').css('display','block');
	$('#cover-rect').css('display','none');
	$('#tspan234').html(headTitle);
}
$('#btn_submit').click(function(){
		if(curAns>-1){
			$('#box, #g311,#g364,#g417').unbind('click');
			$(this).css('display','none');
			$('#radioSel circle').css('fill','#777777');
			var y0 = 65+curAns*35;
			var corAns = questions[qid].correctAnswer;
			if(corAns==curAns){
				$('#corSym').css('display','block');
				$('#corSym').attr('transform','translate(-170,'+y0+')');
				var music = new Audio('../../../../audio/mcq/MCQcorrect.mp3');
      	score++;
			}else{
				$('#corSym').css('display','block');
				$('#incSym').css('display','block');
				var y1 = 65+corAns*35;
				$('#incSym').attr('transform','translate(-170,'+y0+')');
				$('#corSym').attr('transform','translate(-170,'+y1+')');
				music = new Audio('../../../../audio/mcq/MCQincorrect.mp3');
			}
			music.play();
		}
		if(qid==questions.length-1){
			music = new Audio('../../../../audio/mcq/mcqendsfx.mp3');
			music.play();
			$('#popup').css('display','block');
			
			$('#tspan636').html('Score = '+score*10);
			$('#conclusion_ost').css('display','block');
		}
	});

$('#conclusion_ost').click(function(){
	window.location.href=mainFilePath;
})
$('#btn_next').click(function(){
	qid++;
	if(qid<=questions.length-1){
		setQuestion(qid);
	}
});