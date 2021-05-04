import React from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CommentsList from "./CommentsList";

class CommentArea extends React.Component {
  state = {
    singleBookComments: [],
    isLoading: false,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps !== this.props) {
      try {
        this.setState({ isLoading: true });
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.book.asin,
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
            this.props.book.asin
        );
        if (response.ok) {
          let data = await response.json();
          this.setState({ singleBookComments: data });
          this.setState({ isLoading: false });
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
      <div className="d-flex">
        {this.state.isLoading && (
          <Spinner
            animation="border"
            style={{ position: "absolute", top: "0rem", right: "45%" }}
            variant="primary"
          />
        )}

        {!this.state.isLoading && (
          <Card>
            <Card.Img variant="top" src={this.props.book.img} />
            <Card.Body>
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text style={{ overflowY: "scroll", height: "15rem" }}>
                <CommentsList
                  bookId={this.props.book.asin}
                  bookComments={this.state.singleBookComments}
                />
              </Card.Text>
              <Button variant="primary">Add Comment!</Button>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}
export default CommentArea;
