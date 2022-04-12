const socket = io();


// DOM element

let message = document.getElementById('Message');
let username = document.getElementById('Username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', function(){

	socket.emit('chat:message', {
		message: message.value,
		username: username.value
	})
	
});


message.addEventListener('keypress', function(){

	socket.emit('chat:typing', username.value);
})

socket.on('chat:message', function(data){

	actions.innerHTML = " ";
	
	output.innerHTML += `<p>
	  <strong>${data.username}</strong>: ${data.message}

	  </p>`

    
});



socket.on('chat:typing', function(data) {

	actions.innerHTML = `<p><em>${data} is typing a message</em></p>`
})

