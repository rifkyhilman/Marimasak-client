const express = require('express');
const router = express.Router();
const Resep = require('../models/resep');
const Admin = require('../models/admin');

// GET /list - Menampilkan daftar resep
router.get('/list', async (req, res) => {
  try {
    const resepList = await Resep.find();
    const formattedResepList = resepList.map((resep) => {
      return {
        id: resep._id,
        nama_resep: resep.nama_resep,
        pictureUrl: resep.pictureUrl,
        kategori_daerah: resep.kategori_daerah,
        tingkat_kesulitan: resep.tingkat_kesulitan,
        waktu_pembuatan: resep.waktu_pembuatan,
      };
    });
    res.json({
      error: false,
      message: 'success',
      count: formattedResepList.length,
      resep: formattedResepList,
    });
  } catch (error) {
    console.error('Kesalahan saat mengambil daftar resep:', error.message);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
});

// POST /resep - Menambahkan resep baru (hanya untuk admin)
router.post('/resep', async (req, res) => {
  try {
    const { username, password, resepData } = req.body;
    const admin = await Admin.findOne({ username, password });
    if (!admin) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const resepBaru = await Resep.create(resepData);
    res.status(201).json(resepBaru);
  } catch (error) {
    console.error('Kesalahan saat menambahkan resep:', error.message);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
});

// GET /detail/:id - Menampilkan detail resep berdasarkan ID
router.get('/detail/:id', async (req, res) => {
  try {
    const resep = await Resep.findById(req.params.id);
    if (!resep) {
      return res.status(404).json({ error: 'Resep tidak ditemukan' });
    }
    const formattedResep = {
      id: resep._id,
      nama_resep: resep.nama_resep,
      pictureUrl: resep.pictureUrl,
      kategori_daerah: resep.kategori_daerah,
      tingkat_kesulitan: resep.tingkat_kesulitan,
      waktu_pembuatan: resep.waktu_pembuatan,
      peralatan: resep.peralatan,
      bahan_makanan: resep.bahan_makanan,
      cara_pembuatan: resep.cara_pembuatan,
    };
    res.json({
      error: false,
      message: 'success',
      resep: formattedResep,
    });
  } catch (error) {
    console.error('Kesalahan saat mengambil detail resep:', error.message);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
});

// GET /kategori/:kategori_daerah - Menampilkan daftar resep berdasarkan kategori_daerah
router.get('/kategori/:kategori_daerah', async (req, res) => {
    try {
      const kategori = req.params.kategori_daerah;
      const resepList = await Resep.find({ kategori_daerah: kategori });
      const formattedResepList = resepList.map((resep) => {
        return {
          id: resep._id,
          nama_resep: resep.nama_resep,
          pictureUrl: resep.pictureUrl,
          kategori_daerah: resep.kategori_daerah,
          tingkat_kesulitan: resep.tingkat_kesulitan,
          waktu_pembuatan: resep.waktu_pembuatan,
        };
      });
      res.json({
        error: false,
        message: 'success',
        count: formattedResepList.length,
        resep: formattedResepList,
      });
    } catch (error) {
      console.error('Kesalahan saat mengambil daftar resep berdasarkan kategori_daerah:', error.message);
      res.status(500).json({ error: 'Terjadi kesalahan server' });
    }
  });  

module.exports = router;