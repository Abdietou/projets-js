const sentence = "Hello World";
const forbiddenwords = ['truffe', 'truffes', 'confiture', 'débiles'];

function isPalindrom(mot) {
  const reversed = mot.split('').reverse().join('');
  console.log("result" ,  mot === reversed)
  return mot === reversed;
}

function containsForbiddenWords(message) {
  const messageWords = message.split(' ');
  let detectedForbiddenWords = [];

  for (let index = 0; index < messageWords.length; index++) {
    const word = messageWords[index];
    if (forbiddenwords.includes(word)) {
      detectedForbiddenWords.push(word);
    }
  }

  if (detectedForbiddenWords.length > 0) {
    return true;
  }
  console.log(message);
  return false;
}

function removeForbiddenWords(message) {
  const hasForbiddenWords = containsForbiddenWords(message);
  if (!hasForbiddenWords) {
    return message;
  }
  const words = message.split(" ");
  const result = words.map((w) => {
    if (forbiddenwords.includes(w)) {
      return 'xxx';
    } else {
      return w;
    }
  });

  console.log('result: ', result.join(' '));
  return result.join(' ');
}

export default {
    isPalindrom,
    containsForbiddenWords,
    removeForbiddenWords
}

// module.exports = {
//     isPalindrom,
//     containsForbiddenWords,
//     removeForbiddenWords
// }