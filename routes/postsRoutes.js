const express = require('express');
const router = express.Router();
const posts = require('../controllers/postsController');

router.get('/api/v1/getFivePosts', async (req, res) => {
    try {
        const data = await posts.renderedData;
        res.send(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('error fetching posts')
    }
})

module.exports = router;