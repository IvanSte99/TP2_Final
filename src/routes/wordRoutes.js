const express = require('express');
const router = express.Router();
const WordController = require('../controllers/wordController');

router.post('/', WordController.addWord);
router.get('/phrase', WordController.getPhrase);
router.delete('/:word', WordController.deleteWord);
router.get('/wordCount', WordController.getWordCount);
router.get('/generateRandomWords', WordController.generateRandomWords);

module.exports = router;
