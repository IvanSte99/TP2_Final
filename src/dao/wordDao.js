const Word = require('../models/word');

let words = [];

class WordDao {
  static addWord(word) {
    words.push(word);
  }

  static getPhrase() {
    return words.map((word) => word.word).join(' ');
  }

  static deleteWord(word) {
    const initialLength = words.length;
    words = words.filter((w) => w.word !== word);
    return words.length !== initialLength;
  }

  static getWordCount() {
    const wordCount = {};

    for (const word of words) {
      if (word.word in wordCount) {
        wordCount[word.word]++;
      } else {
        wordCount[word.word] = 1;
      }
    }

    return wordCount;
  }
}

module.exports = WordDao;