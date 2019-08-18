
import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

// perform the pool connection
pool.getConnection().then(
    connection => {
        pool.releaseConnection(connection);
        console.log('DB is connected');
    });

export default pool;

