// Simple static file server for the Prativa on Canvas site.
// Serves files from /app (one directory up).
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const ROOT = path.resolve(__dirname, '..');

// No-cache headers in preview so updates always show.
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

app.use(express.static(ROOT, { extensions: ['html'] }));

app.listen(PORT, HOST, () => {
  console.log(`Static site serving ${ROOT} on http://${HOST}:${PORT}`);
});
