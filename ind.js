let array = [
  {
    comment: [
      {
        commentId: 01,
        comment: 'hi',
        issLiked: false,
        likeCount: 02,
      },
      {
        commentId: 02,
        comment: 'comment 2',
        issLiked: true,
        likeCount: 03,
      },
    ],
    commentCount: 2,
    content: 'Hi',
    countryCode: 'PK',
    createdAt: '2d ago',
    fassetid: 25486,
    id: 274,
    isDelete: false,
    isFollowing: true,
    isHide: false,
    isLiked: true,
    name: 'fassetUser',
    reaction: [[Object]],
    reactionCount: 16,
    updatedAt: '2d ago',
    userId: 6,
  },
  {
    comment: [
      {
        commentId: 03,
        comment: 'comment 3',
        issLiked: false,
        likeCount: 06,
      },
    ],
    commentCount: 6,
    content: 'Here',
    countryCode: 'PK',
    createdAt: '2d ago',
    fassetid: 25486,
    id: 272,
    isDelete: false,
    isFollowing: true,
    isHide: false,
    isLiked: true,
    name: 'fassetUser',
    reaction: [[Object]],
    reactionCount: 7,
    updatedAt: '2d ago',
    userId: 6,
  },
];

const addNewComments = () => {
  let postIndex = array.findIndex(item => item.id == 272);
  let relatedObject = array[postIndex];
  relatedObject.comment.push({commentId: 4, comment: 'comment 5'});
  relatedObject.commentCount++;
  array[postIndex] = relatedObject;
};

const handleCommentLike = () => {
  let object = array.find(itm => itm.id == 272);
  let result = object.comment.find(comment => comment.commentId == 03);
  result.issLiked = !result.issLiked;
  result.likeCount = result.issLiked
    ? result.likeCount + 1
    : result.likeCount - 1;
  let index = array.findIndex(item => item.id == 272);
  array[index] = object;
  console.log(array[1].comment);
};

handleCommentLike();
