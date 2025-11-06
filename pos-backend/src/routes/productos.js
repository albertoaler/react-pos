import express from 'express';
import db from '../db.js'

const router = express.Router();

// Obtener todos los productos
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM productos';

    db.all(sql, [], (err, rows) => {
        if(err) return res.status(500).json({ error: err.message });

        res.json(rows);
    });
});

// Obtener un producto por ID
router.get('/:id', (req, res) => {
    const sql = 'SELECT * FROM productos WHERE id = ?';
    const { id } = req.params;

    db.get(sql, [id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ message: 'Producto no encontrado'});

        res.json(row)
    });
});

// Crear un producto nuevo
router.post('/', (req, res) => {
    const { nombre, precio, categoria, stock } = req.body;
    const sql = 'INSERT INTO productos (nombre, precio, categoria, stock) VALUES (?, ?, ?, ?)';

    db.run(sql, [nombre, precio, categoria, stock], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: this.lastID, nombre, precio, categoria, stock });
    });
});

// Actualizar un producto existente
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, precio, categoria, stock } = req.body;
    const sql = 'UPDATE productos SET nombre = ?, precio = ?, categoria = ?, stock = ? WHERE id = ?';

    db.run(sql, [nombre, precio, categoria, stock, id], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        if(this.changes === 0 ) return res.status(404).json({ message: 'Producto no encontrado' });

        res.json({ message: 'Producto actualizado correctamente'});
    });
});

// Eliminar un producto
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM productos WHERE id = ?';

    db.run(sql, [id], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ message: 'Producto no encontrado' });

        res.json({ message: 'Producto eliminado correctamente' });
    });
});

export default router;