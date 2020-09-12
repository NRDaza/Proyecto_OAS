import mysql from 'mysql'
import conexion_db from './conexion_db'

const conx = mysql.createPool(conexion_db.database);

conx.getConnection((err, connection) => {
    if (err) throw err;
    connection.release();
    console.log('DB is connected');
});

export default conx;