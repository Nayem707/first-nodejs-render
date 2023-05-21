const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('hello my first upload node js file!');
});

const port = 8080;
app.listen(port, () => console.log(`http://localhost:${port}`));
