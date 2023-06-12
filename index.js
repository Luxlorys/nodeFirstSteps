const express = require('express');
const postsRoutes = require('./routes/postsRoutes');

const app = express();
const port = 3000;

app.listen(port, (req, res) => {
    console.log(`working on port ${port}`);
});

app.use(postsRoutes);