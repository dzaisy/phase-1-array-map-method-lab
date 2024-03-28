const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const capFirstLet = word => {
  return word.charAt(0).toUpperCase() + word.slice(1); // finds the 1st letter of the word, capitalises it, and returns the rest of the string
};

const titleCase = title => {
  const words = title.split(' '); // split the title into words
  const capitalisedWords = words.map(capFirstLet); // applies capFirstLet function to every single string in tutorials
  return capitalisedWords.join(' '); // join the words back together
};

const titleCased = () => { // title case all titles in the tutorials array
  return tutorials.map(titleCase);
};