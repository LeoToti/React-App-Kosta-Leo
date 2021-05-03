import React from "react";
import { ListGroup, Button } from "react-bootstrap";

class CommentsList extends React.Component {
  render() {
    return (
      <>
        <ListGroup>
          {this.props.bookComments.map((comment) => (
            <ListGroup.Item> {comment.comment} </ListGroup.Item>
          ))}
        </ListGroup>
        <div>
          <Button variant="primary">Add Comment!</Button>
        </div>
      </>
    );
  }
}

export default CommentsList;
