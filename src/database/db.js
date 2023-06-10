const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://vercel-admin-user:<PASSWORD_HERE>@cluster0.45vhwab.mongodb.net/db_api_marimasak?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('MongoDB Berhasil Terhubung');
  } catch (error) {
    console.error('Kesalahan koneksi MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;