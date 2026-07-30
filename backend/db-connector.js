import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
    waitForConnections: true,
    connectionLimit: 10,
    host: "classmysql.engr.oregonstate.edu",
    user: "cs340_" + process.env.OSU_ID,
    password: process.env.DB_PASSWORD,
    database: "cs340_" + process.env.OSU_ID
});

export { db };