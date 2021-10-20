var cls;
(function(){
//document.onload=function(){
	var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
	init();
//}


})();

function init(){
	console.log("doc loaded");
  $('#homeBtnId').css('margin-right','0px')
	test();
}

function test() {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  cls = urlParams.get('id');
  
  //const displayType = urlParams.get('type');
  ModifyText(cls);
  addSubjectListener();
	  
  }
  function ModifyText(cls){

  	switch(cls){
  		case '0':
  			$('.f09fc816-c030-4cf9-b9da-0df32c29732b').html('Class-KG');
  			$('.f09fc816-c030-4cf9-b9da-0df32c29732b').attr('transform','scale(1.6,1) translate(40 59)');
  			$('#ve').hide();
  			$('#asse').hide();
  			
  		break;
  		case '1':
  			$('.f09fc816-c030-4cf9-b9da-0df32c29732b').html('Class-1');
  			$('#ve').hide();
  			
  		break;
  		case '2':
  			$('.f09fc816-c030-4cf9-b9da-0df32c29732b').html('Class-2');
  		break;
  		case '3':
  			$('.f09fc816-c030-4cf9-b9da-0df32c29732b').html('Class-3');
  		break;
  		case '4':
  			$('.f09fc816-c030-4cf9-b9da-0df32c29732b').html('Class-4');
  		break;
  		case '5':
  			$('.f09fc816-c030-4cf9-b9da-0df32c29732b').html('Class-5');
  		break;
  		case '6':
  			$('.f09fc816-c030-4cf9-b9da-0df32c29732b').html('Adolescense & Adults');
  			$('.f09fc816-c030-4cf9-b9da-0df32c29732b').attr('transform','scale(1.6,1) translate(40 59)');
  			$('#b638414a-93ce-44ce-bcbb-06149e4f0ca1').attr('transform','scale(0.8,1) translate(0 0)');
  			$('.a357e410-74aa-44cc-a75e-94e545b793ca').attr('transform','scale(2.21,1) translate(-30 0)');
  			$('.topBanner').attr('viewBox','0 0 638.56 75.35');
  		break;
  	}
  }

  function addSubjectListener(){
  	$('#homeBtnId, #eng, #gs, #cs,#hin,#mat,#asse,#ve').click(function(e){
  		switch(e.currentTarget.id){
  			case 'homeBtnId':
  				location.href = '../classhome.html';
  			break;
  			default :
  				location.href = '../modules/interface.html?sub='+e.currentTarget.id+'&cls='+cls;
  			break;
  		}
  	});

	


  }
