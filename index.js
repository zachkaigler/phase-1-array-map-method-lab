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

/*
const titleCased = (titlesArray) => {
  titlesArray.map(function (title) {
    for (let i = 0; i < title.length; i++) {
      console.log(title.charAt(i));
    }
  }) 
  return tutorials
}
*/

const titleCased = () => {
  tutorials.map(function (elem, index) {
    tutorials[index] = elem.split(' ').map(function (an) {return an.charAt(0).toUpperCase() + an.slice(1)}).join(' ');
  })
  return tutorials
}
