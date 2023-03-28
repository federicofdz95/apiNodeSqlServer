import sql from 'mssql';
import { config } from 'dotenv'
config();

const dbSetting = {    
    user : process.env.USER,
    password : process.env.PASS,
    server : process.env.SERVER,
    database : process.env.DB,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
      },
      options: {        
        trustServerCertificate: true,
        encrypt: false,
      },
};


export async function getConn() {

    try {
        const pool = await sql.connect(dbSetting);
        return pool;    
    } catch (error) {
        console.log(error);
    }
        
}

export { sql };
