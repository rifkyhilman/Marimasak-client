const express = require('express');
const connectDB = require('./src/database/db');
const resepRoutes = require('./src/routes/resep-route');
const usersRoutes = require('./src/routes/user-route.js');
const Admin = require('./src/models/admin');
const path = require('path');
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
connectDB();

// Buat tabel admin secara otomatis
Admin.findOne().then((admin) => {
  if (!admin) {
    Admin.create({ username: 'admin', password: 'admin' })
      .then(() => console.log('Admin berhasil ditambahkan'))
      .catch((error) => console.error('Gagal menambahkan admin:', error));
  }
});

// Buat Routes awal
app.use(cors());
app.use('/api', resepRoutes, usersRoutes);

// Dokumentasi FIle HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

// Server Berjalan
const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
