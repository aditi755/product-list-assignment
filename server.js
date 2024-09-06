const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const mongodbUrl = 'mongodb+srv://awdhesh1700:zzsGb5srnHuldEQk@cluster0.aywmy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// MongoDB Connection
mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Routes
app.use('/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
