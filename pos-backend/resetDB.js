import db from './src/db.js'

db.serialize(() => {
  db.run('DELETE FROM productos');
  console.log('Base de datos reiniciada.');
});
