var modal = document.querySelector('.container__modal');
var contenedor = document.querySelector('.container__main');
var cancelar = document.querySelector('.cancelar');
var send = document.querySelector('#send');
var Message = document.querySelector('#Message');


setTimeout(display,5000);



function display(){

	modal.style.display ="block";

	contenedor.style.backdropFilter="blur(2px)";
	contenedor.style.backgroundColor = "whitesmoke"
 
    cancelar.style.border = " 2px solid whitesmoke";
    cancelar.style.borderRadius = "50%";
  

}

   cancelar.addEventListener('click',()=>{

   	  modal.style.display = "none";
   });


		


   
 
 