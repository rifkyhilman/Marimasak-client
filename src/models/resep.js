const mongoose = require('mongoose');

const peralatanSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
}, { _id: false });

const bahanMakananSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
}, { _id: false });

const caraPembuatanSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
}, { _id: false });

const resepSchema = new mongoose.Schema({
  nama_resep: {
    type: String,
    required: true,
  },
  pictureUrl: {
    type: String,
    required: true,
  },
  kategori_daerah: {
    type: String,
    required: true,
  },
  tingkat_kesulitan: {
    type: String,
    required: true,
  },
  waktu_pembuatan: {
    type: String,
    required: true,
  },
  peralatan: [peralatanSchema],
  bahan_makanan: [bahanMakananSchema],
  cara_pembuatan: [caraPembuatanSchema],
});

const Resep = mongoose.model('Resep', resepSchema);

module.exports = Resep;