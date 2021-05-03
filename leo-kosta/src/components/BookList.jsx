import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CommentArea from "./CommentArea";
import { Navbar, Nav, Form, Button, FormControl, Card } from "react-bootstrap";

class BookList extends React.Component {
  state = {
    query: "",
    selectedQuery: "",
    selected: true,
    selectedBookId: "",
  };

  render() {
    return (
      <>
        <div>
          {/* <input type="search"  value={this.state.query} onChange={ e => this.setState({query: e.target.value})} /> */}
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="search"
                  placeholder="Search"
                  value={this.state.query}
                  onChange={(e) => this.setState({ query: e.target.value })}
                  className="mr-sm-2"
                  id="search"
                />
                <Button
                  variant="outline-success"
                  onClick={(e) =>
                    this.setState({ selectedQuery: this.state.query })
                  }
                >
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="container mx-0">
          <div className="row " style={{ width: "99vw" }}>
            <div className="col-10">
              <div className="row">
                {this.props.books
                  .filter((book) =>
                    book.title
                      .toLowerCase()
                      .includes(this.state.selectedQuery.toLowerCase())
                  )
                  .map((book) => (
                    <div className="col-3">
                      <Card key={book.asin}>
                        <Card.Img
                          className="img-fluid"
                          variant="top"
                          src={book.img}
                          onClick={() =>
                            this.setState({
                              selected: true,
                              selectedBookId: book.asin,
                            })
                          }
                        />
                        <Card.Body>
                          <Card.Title>{book.title}</Card.Title>
                          <Card.Text>{book.category}</Card.Text>
                          {/* {this.state.selected && (
                            <CommentArea bookId={book.asin} />
                          )} */}
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
              </div>
            </div>
            <div
              className="col-2 "
              style={{ top: "5rem", right: "1rem", position: "fixed" }}
            >
              <div className="row">
                {this.state.selectedBookId && (
                  <CommentArea bookId={this.state.selectedBookId} />
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BookList;
