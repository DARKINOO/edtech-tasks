const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Mock database of sign language videos
const signLanguageVideos = {
  'hello': 'https://videos-asl.lingvano.com/12-480p.mp4#t=0.05',
  'how': 'https://www.signingsavvy.com/media2/mp4-ld/21/21562.mp4',
  'are': 'https://www.signingsavvy.com/media2/mp4-ld/23/23126.mp4',
  'you': 'https://www.signingsavvy.com/media2/mp4-ld/35/35449.mp4',
  'howareyou': 'https://www.signingsavvy.com/media2/mp4-ld/22/22100.mp4'
};

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/convert', (req, res) => {
  const text = req.body.text.toLowerCase();
  const words = text.split(' ');
  const videoUrls = words.map(word => signLanguageVideos[word] || null);
  res.json({ videoUrls });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});