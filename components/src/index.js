import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Sam"
        timeAgo="Today at 6:00PM"
        content="Nice post"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Alex"
        timeAgo="Yesterday"
        content="Cool and nice reading"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Jane"
        timeAgo="A month ago"
        content="This is a very long comment for this blog post."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
