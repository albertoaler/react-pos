const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
const db = new sqlite3.Database('./database/pos.db', (err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err.message);
  } else {
    console.log('✅ Conectado a la base de datos SQLite');
  }
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor POS funcionando 🚀');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
