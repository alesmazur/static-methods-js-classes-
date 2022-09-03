// lets makes some class

class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }
  upvote() {
    this.votesQty += 1;
  }
  static mergeComments(first, second) {
    return `${first} , ${second}`;
  }
}
// lets apply ctatic method, but for entire Class and not for its instance
// actually we can check in browsers concole that is static method store in constructor of entire Class but this static method not inheriting by each instance of the Class
console.log(
  Comment.mergeComments(
    "Hi, this is first comment",
    "hi there, that is second one."
  )
);
// lets check it out: do exact instance of the Class inherit static method?

const myComment = new Comment("This is my comment");

console.dir(myComment);
// at above we don't see mergeComments method

console.dir(Comment);
// at above we see mergeComments method in Comment class
