function LongestString(str) {
  let longestWord = "";
  const pp = str.split(" ");
  pp.forEach(element => {
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  });

  return longestWord;
}

function replaceWord() {
  let str = document.querySelector(".text").textContent;
  const word = LongestString(str);
  str = str.replace(word, word.bold());
  document.querySelector(".text").innerHTML = str;

  return word;
}
