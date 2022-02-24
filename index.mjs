import words from "./words.json";

// center tile letter
const key = "d";
// the rest of the letters
const letters = ["b", "o", "e", "t", "c", "j"];

letters.push(key);

const wordsWithKey = Object.keys(words).filter((word) => word.includes(key));

const findWords = (words) =>
  words.filter((word) => {
    const lettersInWord = word.split("");
    // all letters word exist in letters array
    return lettersInWord.every((letter) => letters.includes(letter));
  });

const wordsFound = [];

for (let len = 4; len <= 45; len++) {
  const nLetterWords = wordsWithKey.filter((word) => word.length === len);
  const _wordsFound = findWords(nLetterWords);
  wordsFound.push(..._wordsFound);
}

console.log("words :", wordsFound);
console.log("# words found :", wordsFound.length);
