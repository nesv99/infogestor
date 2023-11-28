const express = require('express');
const cors = require('cors');
const dataRouter = require('./routes/data');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/data', dataRouter);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});
