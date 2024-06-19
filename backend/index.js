import express from 'express';
import sql from 'mssql';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const config = {
    // eslint-disable-next-line no-undef
    user: process.env.DB_USER,
    // eslint-disable-next-line no-undef
    password: process.env.DB_PASSWORD,
    // eslint-disable-next-line no-undef
    server: process.env.DB_SERVER,
    // eslint-disable-next-line no-undef
    database: process.env.DB_NAME,
    options: {
        encrypt: false,
        // enableArithAbort: true
        trustServerCertificate: true,
    }
};

// Conexión a la base de datos
sql.connect(config, err => {
    if (err) console.error(err);
    else console.log('Connected to SQL Server');
});

app.get('/productos', async (req, res) => {
    try {
        const request = new sql.Request();
        const result = await request.query('SELECT * FROM Productos');
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching products');
    }
});

// Manejo de errores global
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));