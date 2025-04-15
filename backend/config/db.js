
const connectDB = async () => {
  require('dotenv').config(); // load biến môi trường từ .env

  const mongoose = require('mongoose');
  const uri = process.env.MONGODB_URI;
  
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection failed:', err));
};

export default connectDB;