import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

// Esto es para obtener la ruta del archivo actual (por compatibilidad con módulos ES)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta absoluta a la base de datos
const dbPath = path.join(__dirname, './database/pos.db');

// Conectar a la base de datos
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err.message)
    } else {
        console.log('Conectado a la base de datos SQLite');
    }
});

export default db;