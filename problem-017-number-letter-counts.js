/*
Problem 17: Number letter counts

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?

Note: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/
const PADDING = 2;
const alphabet = [
  ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
  ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
];
const alphabetCent = [
  'hundred',
  'thousand',
  'million',
  'billion'
]

function numberLetterCounts(limit) {
  let sum = 0;
  let threeDigits;
  let digitsGropus;
  let tmp;

  while (limit > 0) {
    // divide limit into groups of three digits
    digitsGropus = divideNumber(limit);

    for (let group = 0; group < digitsGropus.length; group++) {
      threeDigits = digitsGropus[group];
      
      // check if they're only zeros: case xxx
      if (threeDigits[0] == '0' && threeDigits[1] == '0' && threeDigits[2] == '0') continue;
      // case xxN
      else if (threeDigits[0] == '0' && threeDigits[1] == '0' && threeDigits[2] != '0')
        sum += alphabet[0][parseInt(threeDigits[2])].length;
      // case xNx and xNN
      else if (threeDigits[0] == '0' && threeDigits[1] != '0') {
        // xNx
        if (threeDigits[2] == '0')
          sum += (threeDigits[1] == '1') ? alphabet[0][10].length : alphabet[1][parseInt(threeDigits[1]) - 2].length;
        // xNN
        else {
          tmp = parseInt(threeDigits[1] + threeDigits[2]);
          if (tmp > 19)
            sum += alphabet[1][parseInt(threeDigits[1]) - 2].length + alphabet[0][parseInt(threeDigits[2])].length;
          else
            sum += alphabet[0][tmp].length;
        }
      }
      // case N--
      else if (threeDigits[0] != '0') {
        // add hundred word
        sum += alphabet[0][parseInt(threeDigits[0])].length + alphabetCent[0].length;
        // case Nxx
        if (threeDigits[1] == '0' && threeDigits[2] == '0') continue;
        // case NxN
        else if (threeDigits[1] == '0' && threeDigits[2] != '0')
          sum += 'and'.length + alphabet[0][parseInt(threeDigits[2])].length;
        // case NNx
        else if (threeDigits[1] != '0' && threeDigits[2] == '0')
          sum += 'and'.length + ((threeDigits[1] != '1') ? alphabet[1][parseInt(threeDigits[1]) - 2].length : alphabet[0][10].length);
        // case NNN
        else if (threeDigits[1] != '0' && threeDigits[2] != '0') {
          sum += 'and'.length;
          tmp = parseInt(threeDigits[1] + threeDigits[2]);
          if (tmp > 19)
            sum += alphabet[1][parseInt(threeDigits[1]) - 2].length + alphabet[0][parseInt(threeDigits[2])].length;
          else
            sum += alphabet[0][tmp].length;
        }
      }
      sum += (group > 0) ? alphabetCent[group].length : 0;
    }
    limit--;
  }

  return sum;
}

function divideNumber(number) {
  // convert to string
  // let strNumber = ('' + number).split("").reverse().join("");
  let strNumber = ('' + number).split("");
  let res = [];
  let higherIndex = strNumber.length - 1;
  // divide
  for (let i = 0; i < Math.ceil(strNumber.length / 3); i++)
    for (let j = 0; j < 3; j++) {
      if (strNumber[higherIndex] != undefined)
        res[i] = (res[i] == undefined) ? strNumber[higherIndex] : strNumber[higherIndex] + res[i];
      else // padding zeros
        res[i] = '0' + res[i];
      higherIndex--;
    }
  return res;
}

// numberLetterCounts(5) should return a number.
// numberLetterCounts(5) should return 19.
// numberLetterCounts(150) should return 1903.
// numberLetterCounts(1000) should return 21124.

console.log(numberLetterCounts(1000));