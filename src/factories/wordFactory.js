const Word = require('../models/word');

class WordFactory {
  static createWord(word) {
    return new Word(word);
  }
}

module.exports = WordFactory;