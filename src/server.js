const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { PORT } = require('./config');
const userRoutes = require('./routes/userRoutes');
const questionsRoutes = require('./routes/questionsRoutes');
const answersRoutes = require('./routes/answersRoutes');
const likesRoutes = require('./routes/likesRoutes');

// --------------------------------------------------
const app = express();

// --------------------------------------------------
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// ------------------------------------------------
app.get('/', (req, res) => {
  res.send('Gera pradzia');
});
// ------------------------------Routes---------------
app.use('/api/', userRoutes);
app.use('/api/', questionsRoutes);
app.use('/api/', answersRoutes);
app.use('/api/', likesRoutes);

// -404
app.all('*', (req, res) => {
  res.status(404).json({ error: 'Page not found' });
});
// ------------------------------------------------
app.listen(PORT, () => console.log('Server is running on port', PORT));
