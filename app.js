import React from "react";
import ReactDOM from "react-dom";


var CommentBox = React.createClass({
  render: function (){
    return (
      <div className = "CommentBox">
        Hello, world! This is ReactJS
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox/>,
  document.getElementById('content')
);
