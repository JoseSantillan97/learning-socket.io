const express = require('express');
const app = express();

// Servidor de sockets
const server = require('http').createServer(app)

// Creación del socket server
const io = require('socket.io')(server);

// Desplegar el directorio publico
app.use( express.static(__dirname + '/public') )

io.on('connection', ( socket ) => {
	socket.emit("mensaje-bienvenida", {
		msn: "Bienvenido Fredy!!",
		fecha: new Date()
	})

	socket.on('mensaje-del-cliente', (data) => {
		console.log('Mensaje del ', data.msg, " Bienvenido " ,data.nombre)
	})

});

server.listen(3000, ()=>{
	console.log('Servidor corriendo en servidor 3000')
});