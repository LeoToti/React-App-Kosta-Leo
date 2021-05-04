import React from "react";
import { ListGroup } from "react-bootstrap";

class CommentsList extends React.Component {
  render() {
    return (
      <>
        <ListGroup>
          {this.props.bookComments.length > 0
            ? this.props.bookComments.map((comment) => (
                <ListGroup.Item>
                  {" "}
                  {comment.comment}.<p>{"*".repeat(comment.rate)}</p>
                </ListGroup.Item>
              ))
            : "There are no comments yet."}
        </ListGroup>
      </>
    );
  }
}

export default CommentsList;
