class Comment {
    constructor(text) {
        this.text = text,
        this.likesQuantity = 0
    }

    addLike() {
        this.likesQuantity += 1
    }

    static mergeComments(firstComment, secondComment) {
        return firstComment + '  ' + secondComment;
    }
}


const firstComment = new Comment('this is comment');
console.log(firstComment);
firstComment.addLike();

console.log(firstComment.likesQuantity);

let = mergeComments = Comment.mergeComments(firstComment.text, 'qwerty');
console.log(mergeComments);
