const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const journalRoutes = require('./routes/journalRoutes');


dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use('/api/journals', journalRoutes);


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Digital Journal Backend Running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
