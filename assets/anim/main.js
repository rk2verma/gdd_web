const fireworksContainer = document.querySelector(".fireworks-container"),
fireworksConfig={hue:{min:0,max:345},delay:{min:15,max:15},
rocketsPoint:50,opacity:.5,
speed:10,acceleration:1.2,friction:.97,
gravity:1.5,particles:90,trace:3,explosion:6,
autoresize:!0,brightness:{min:50,max:80,decay:{min:.015,max:.03}},
boundaries:{x:150,y:150,width:100,height:100,visible:!1},
	mouse:{click:!0,move:!1,max:1}},
backgroundConfig={backgroundColor:"#000000",backgroundImage:"",
backgroundSize:"cover",backgroundPosition:"0 0",backgroundRepeat:"no-repeat",container:!1,fps:!1};if(document.addEventListener("keydown",(e=>{"F11"===e.code&&(e.preventDefault(),
	fireworksContainer.requestFullscreen?fireworksContainer.requestFullscreen():fireworksContainer.webkitRequestFullscreen&&fireworksContainer.webkitRequestFullscreen())})),
document.location.hash)try{const e=b64DecodeUnicode(document.location.hash.slice(1)).split(",").map(Number).filter((e=>"number"==typeof e));if(17!==e.length)throw Error();fireworksConfig.hue.min=e[0],fireworksConfig.hue.max=e[1],fireworksConfig.delay.min=e[2],fireworksConfig.delay.max=e[3],fireworksConfig.brightness.min=e[4],fireworksConfig.brightness.max=e[5],fireworksConfig.brightness.decay.min=e[6],fireworksConfig.brightness.decay.max=e[7],fireworksConfig.rocketsPoint=e[8],fireworksConfig.opacity=e[9],fireworksConfig.speed=e[10],fireworksConfig.acceleration=e[11],fireworksConfig.friction=e[12],fireworksConfig.gravity=e[13],fireworksConfig.particles=e[14],fireworksConfig.trace=e[15],fireworksConfig.explosion=e[16]}catch(e){history.pushState(null,"","/")}const fireworks=new Fireworks(fireworksContainer,fireworksConfig);fireworks.start();