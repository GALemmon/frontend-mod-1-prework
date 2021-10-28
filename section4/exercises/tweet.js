/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  like() {
    this.numberOfLikes++
  }
  addComment(newComment) {
    this.comments.push(newComment)
  }
};

var tweet1 = new Tweet('GALemmon', 'This is my first tweet!', '13:17 10/28/21', 3, ['Hello', 'Nice to see you!', 'Go home.']);
var tweet2 = new Tweet('GALemmon', 'I have opinions!', '13:19 10/28/21', 5, ['I like your opinions', "I don't like your opinions.", 'Boo!']);
var tweet3 = new Tweet('GALemmon', 'I have other opinions!', '13:22 10/28/21', 4, ['I like these opinions too.', 'Go away']);

console.log('tweet1: ', tweet1);
console.log('tweet2: ', tweet2);
console.log('tweet3: ', tweet3);

tweet1.like();
console.log('tweet1 + like: ', tweet1);

tweet2.addComment('Does this work?');
console.log('tweet2 + comment: ', tweet2);

tweet3.like();
tweet3.addComment('It seems to.');
console.log('tweet3 + like + comment: ', tweet3);
