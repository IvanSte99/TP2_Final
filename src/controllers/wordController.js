// controllers/wordController.js
const WordDao = require('../dao/wordDao');
const WordFactory = require('../factories/wordFactory');
const TextGenerationService = require('../services/textGenerationService');

class WordController {
  static async addWord(req, res) {
    const { word } = req.body;

    if (!word || !/^[a-zA-Z]+$/.test(word)) {
      return res.status(422).json({ errorMsg: 'Palabra no válida' });
    }

    const newWord = WordFactory.createWord(word);
    WordDao.addWord(newWord);

    res.status(200).json(newWord);
  }

  static getPhrase(req, res) {
    const phrase = WordDao.getPhrase();
    res.status(200).json({ phrase });
  }

  static deleteWord(req, res) {
    const { word } = req.params;

    if (!word || !/^[a-zA-Z]+$/.test(word)) {
      return res.status(422).json({ errorMsg: 'Palabra no válida' });
    }

    const wordDeleted = WordDao.deleteWord(word);

    if (wordDeleted) {
      res.status(200).json({ word });
    } else {
      res.status(404).json({ errorMsg: 'Palabra no encontrada' });
    }
  }

  static getWordCount(req, res) {
    const wordCount = WordDao.getWordCount();
    res.status(200).json(wordCount);
  }

  static async generateRandomWords(req, res) {
    const { count } = req.query;

    try {
      const randomWords = await TextGenerationService.generateRandomWords(
        count
      );
      for (const word of randomWords) {
        const newWord = WordFactory.createWord(word);
        WordDao.addWord(newWord);
      }
      res.status(200).json({ count: randomWords.length, words: randomWords });
    } catch (error) {
      res.status(500).json({ errorMsg: error.message });
    }
  }
}

module.exports = WordController;
