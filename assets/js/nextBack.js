var tocData,curPage=-1,resolution;
var btnRef=['#back_btn','#next_btn'];

function setData(refVar,pp,res) { 
	tocData = refVar;
	curPage=pp;
	loadPage();	
	addListener();
}
function onNext(){
	curPage++;
	loadPage();
}
function onBack(){
	curPage--;	
	loadPage();
}
function loadPage(){
	var b=(tocData[curPage].ref);
	//console.log(b);
	//b='./eng/content/alphabet/Ch1.html?id=1';
	
  $('#toc_container').height($(window).innerHeight()-$('.header').height()-$('.footer').height());
	document.getElementById("toc_container").innerHTML='<object  type="text/html" data="'+b+'"></object>';
	$('#toc_container object').width('100%');
  			$('#toc_container object').height('100%');
  			$('#toc_container object').css('padding','0');

  		updateSize();
	//document.getElementById("toc_container").innerHTML='<object  type="text/html" data="'+b+'/toc.html?cls='+a+'"></object>';	
	//testFn();
	updateBtn(curPage,tocData.length);	
}
$(window).resize(function(){updateSize();});
function updateSize(){
			var wid = 	$(window).width();
  		var hei = 	$(window).height();
  		var ratio = wid/hei; //console.log(wid,hei,ratio,' is ratio')
  		 if(ratio>2.5){
  		 	$('#toc_container').width('60%');
  		 }else if(ratio>2.3){
  		 	$('#toc_container').width('68%');
  		 }else if(ratio>2.1){
  		 	$('#toc_container').width('76%');
  		 }else if(ratio>1.9){
  		 	$('#toc_container').width('84%');
  		 }else if(ratio>1.7){
  		 	$('#toc_container').width('92%');
  		 }else if(ratio>1.5){
  		 	$('#toc_container').width('100%');
  		 }
  		 //$('#toc_container').height($(window).innerHeight()-$('.header').height()-$('.footer').height());
  		//console.log('resizing');
}
function updateBtn(a,b){
	$(btnRef[0]).show();
	$(btnRef[1]).show();
	//$('#'+btnRef[1]).show();
	//$('#toc').hide();
	//console.log(a,b,a==3)
	if(a==0){
		$(''+btnRef[0]+' a').removeClass('active');
		$(''+btnRef[1]+' a').addClass('active');
		if(a==(b-1)){
			$(''+btnRef[1]+' a').removeClass('active');
		}
	}else if(a==(b-1)){
		$(''+btnRef[0]+' a').addClass('active');
		$(''+btnRef[1]+' a').removeClass('active');
	}else{
		$(''+btnRef[0]+' a').addClass('active');
		$(''+btnRef[1]+' a').addClass('active');
	}
}
function addListener(){
	$(btnRef[0]).click(function() {
		if($(btnRef[0]+' a').hasClass('active')){
			onBack();	
		}		
	})
	$(btnRef[1]).click(function() {
		if($(btnRef[1]+' a').hasClass('active')){
			onNext();
		}
	})
}
//setBtnRef();


/*
https://images.unsplash.com/photo-1633684801944-e6f68e10e439?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDY0NjI0OQ&ixlib=rb-1.2.1&q=85

https://images.unsplash.com/photo-1634020016130-ab5eca714e69?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDY0NjI0OQ&ixlib=rb-1.2.1&q=85
https://images.unsplash.com/photo-1618824834789-eb5d98e150f8?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDY0NjI0OQ&ixlib=rb-1.2.1&q=85
https://images.unsplash.com/photo-1632094623683-9d0bf4819c89?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDY0NjI0OQ&ixlib=rb-1.2.1&q=85
background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 28" width="56" height="28"%3E%3Cpath fill="%239C92AC" fill-opacity="0.4" d="M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z"%3E%3C/path%3E%3C/svg%3E');

<svg viewBox="0 0 512 512" width="100" title="arrow-alt-circle-right">
  <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z" />
</svg>


<svg viewBox="0 0 512 512" width="100" title="arrow-alt-circle-left">
  <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12z" />
</svg>

<svg viewBox="0 0 512 512" width="100" title="arrow-circle-left">
  <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z" />
</svg>

<svg viewBox="0 0 512 512" width="100" title="arrow-circle-right">
  <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z" />
</svg>

<svg viewBox="0 0 384 512" width="100" title="traffic-light">
  <path d="M384 192h-64v-37.88c37.2-13.22 64-48.38 64-90.12h-64V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v32H0c0 41.74 26.8 76.9 64 90.12V192H0c0 41.74 26.8 76.9 64 90.12V320H0c0 42.84 28.25 78.69 66.99 91.05C79.42 468.72 130.6 512 192 512s112.58-43.28 125.01-100.95C355.75 398.69 384 362.84 384 320h-64v-37.88c37.2-13.22 64-48.38 64-90.12zM192 416c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm0-128c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm0-128c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48z" />
</svg>

*/
