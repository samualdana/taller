function clickB(e){

	var activoB = document.getElementById("activeB");
	var altB = e.getAttribute("alt")+"";
	var video = document.getElementById("video");

	if(activoB !=null){
		activoB.id = "inactiveB";
		activoB.style.background="gray";
	}
	e.id= "activeB";
	e.style.background="blue";

	switch(altB){

	case 'play':video.play();break;
	case 'pause':video.pause();break;
	case 'p_faster':video.playbackRate = 2;break;
	case 'p_slower':video.playbackRate = 0.5;break;
	case 'n_speed':video.playbackRate = 1;break;
	
	}
}
function clickT(e){

	var activoT = document.getElementById("activeT");
	var altT = e.getAttribute("alt")+"";
	var video = document.getElementById("video");

	if(activoT !=null){
		activoT.id = "inactiveB";
		activoT.style.textDecoration="none";
	}
	e.id= "activeT";
	e.style.textDecoration="underline";

	switch(altT){

	case 'start':video.currentTime = 0 ;video.play();break;
	case '10':video.currentTime = 10 ;video.play();break;
	case '20':video.currentTime = 20 ;video.play();break;
	case '30':video.currentTime = 30 ;video.play();break;
	case '40':video.currentTime = 40 ;video.play();break;
	case 'end':video.currentTime = video.duration;break;
	
	}
}
function tiempoActual(){
	var horas=0,minutos=0;
	var tiempo = document.getElementById("tiempo");
	var tiempoActual = video.currentTime+"";
	if ((tiempoActual/60) > 60 && (tiempoActual/60) >1) {
		minutos = (tiempoActual.split(".")[0])/60;
		segundos = (tiempoActual.split(".")[0])-(minutos*60);
		tiempo.innerHTML = "Tiempo actual : "+minutos+":"+segundos;
	}else {
		segundos = tiempoActual.split(".")[0];
		tiempo.innerHTML = (segundos<10)?"Tiempo actual : "+"00:0"+segundos:"Tiempo actual : "+"00:"+segundos;
	}
	}
