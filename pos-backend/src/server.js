import express from 'express';
import cors from 'cors';
import productosRouter from './routes/productos.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas principales
app.use('/api/productos', productosRouter);

// Puerto
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Servidor del POS funcionando correctamente');
});