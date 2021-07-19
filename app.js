const sentence = "Hello World";

function isPalindrom(mot) {
  const reversed = mot.split('').reverse().join('');
  console.log("result" ,  mot === reversed)
  return mot === reversed;
}

module.exports = {
    isPalindrom
}