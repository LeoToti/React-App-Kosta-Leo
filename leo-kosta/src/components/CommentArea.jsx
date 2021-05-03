import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CommentsList from "./CommentsList";

class CommentArea extends React.Component {
  state = {
    singleBookComments: [],
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps !== this.props) {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.bookId,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMWY1MWIxZjBmYjAwMTVkOTE3OTEiLCJpYXQiOjE2MTkwMDkzNjEsImV4cCI6MTYyMDIxODk2MX0.ImlVBcPHsjaDy0c6wfO0Kybjg-u2nPcdNJtgMQlreVc",
            },
          }
        );
        console.log(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.bookId
        );
        if (response.ok) {
          let data = await response.json();
          this.setState({ singleBookComments: data });
        } else {
          alert("error11");
        }
      } catch (error) {
        alert(error);
      }
    }
  };
  render() {
    return (
      <>
        <CommentsList
          bookId={this.props.bookId}
          bookComments={this.state.singleBookComments}
        />
      </>
    );
  }
}
export default CommentArea;
