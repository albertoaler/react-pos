CREATE TABLE productos (
    id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
    precio REAL NOT NULL,
    categoria TEXT,
    stock INTEGER DEFAULT 0
);

CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL UNIQUE,
    rol TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE ventas (
    id INTEGER PRIMARY KEY,
    fecha TEXT DEFAULT CURRENT_TIMESTAMP,
    total REAL NOT NULL,
    usuario_id INTEGER,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE detalle_venta (
    id INTEGER PRIMARY KEY,
    venta_id INTEGER,
    producto_id INTEGER,
    cantidad INTEGER NOT NULL,
    subtotal REAL NOT NULL,
    FOREIGN KEY (venta_id) REFERENCES ventas(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);
