import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Esto es para obtener la ruta del archivo actual (por compatibilidad con módulos ES)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta absoluta a la base de datos
const dbPath = path.join(__dirname, '..', 'database/pos.db');

// --------------- PRUEBA PARA RUTAS ------------------------
console.log('Intentando conectar a: ', dbPath);
console.log('El archivo existe?: ', fs.existsSync(dbPath));

// Conectar a la base de datos
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err.message)
    } else {
        console.log('Conectado a la base de datos SQLite');
    }
});

export default db;