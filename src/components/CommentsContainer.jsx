import React from "react";
import Comment from "./Comment";

const CommentsData = [
  {
    name: "Aditya Nuwal",
    text: "Lorem ipsum dolor sit amet, conse",
    replies: [],
  },
  {
    name: "Aditya Nuwal",
    text: "Lorem ipsum dolor sit amet, conse",
    replies: [
      {
        name: "Aditya Nuwal",
        text: "Lorem ipsum dolor sit amet, conse",
        replies: [],
      },
      {
        name: "Aditya Nuwal",
        text: "Lorem ipsum dolor sit amet, conse",
        replies: [
          {
            name: "Aditya Nuwal",
            text: "Lorem ipsum dolor sit amet, conse",
            replies: [],
          },
          {
            name: "Aditya Nuwal",
            text: "Lorem ipsum dolor sit amet, conse",
            replies: [
              {
                name: "Aditya Nuwal",
                text: "Lorem ipsum dolor sit amet, conse",
                replies: [],
              },
              {
                name: "Aditya Nuwal",
                text: "Lorem ipsum dolor sit amet, conse",
                replies: [
                  {
                    name: "Aditya Nuwal",
                    text: "Lorem ipsum dolor sit amet, conse",
                    replies: [],
                  },
                  {
                    name: "Aditya Nuwal",
                    text: "Lorem ipsum dolor sit amet, conse",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Aditya Nuwal",
    text: "Lorem ipsum dolor sit amet, conse",
    replies: [],
  },
  {
    name: "Aditya Nuwal",
    text: "Lorem ipsum dolor sit amet, conse",
    replies: [],
  },
  {
    name: "Aditya Nuwal",
    text: "Lorem ipsum dolor sit amet, conse",
    replies: [],
  },
  {
    name: "Aditya Nuwal",
    text: "Lorem ipsum dolor sit amet, conse",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    );
  });
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
