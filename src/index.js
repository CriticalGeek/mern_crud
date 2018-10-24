const express = require('express'); // llamo a express y lo almceno en una variable.
const morgan  = require('morgan');  // Modulo de node que sirve para ver las peticiones que llegan desde el navegador o aplicaciones cliente
const path    = require('path');    // Modulo de node que sirve para hacer un ruteo correcto ya que dependiendo del S.O. se puede utilizar el slash o el backslash

const { mongoose } = require('./database');

const app = express(); // Llamo a el onjeto express creado anteriormente y lo almaceno en una variable.

// Settings
app.set('port', process.env.PORT || 3000); // Utiliza el puerto configurado por defecto en el servidor, de lo contrrio utiliza el puerto asignado

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', require('./routes/routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});