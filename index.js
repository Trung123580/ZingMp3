const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 8888;
// app.use(cors());
// Page Home
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// ZingMp3Router
const ZingMp3Router = require('./routers/api/ZingRouter');
app.use('/api', cors({ origin: process.env.URL_CLIENT }), ZingMp3Router);

// Page Error
app.get('*', (req, res) => {
  res.send('Nhập Sai Đường Dẫn! Vui Lòng Nhập Lại >.<');
});

app.listen(port, () => {
  console.log(`Start server listen at http://localhost:${port}`);
});
