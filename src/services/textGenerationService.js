const axios = require('axios');

class TextGenerationService {
    static async generateRandomWords(count) {
      try {
        const response = await axios.get(
          `https://texto.deno.dev/palabras?cantidad=${count}`
        );
        return response.data.palabras;
      } catch (error) {
        throw new Error('No se pudo obtener las palabras aleatorias.');
      }
    }
  }
  
  module.exports = TextGenerationService;