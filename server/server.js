const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');

const userRoutes = require('./routes/users');
const skillRoutes = require('./routes/skills');
const requestRoutes = require('./routes/requests');
const messageRoutes = require('./routes/messages');
const ratingRoutes = require('./routes/ratings');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/ratings', ratingRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
