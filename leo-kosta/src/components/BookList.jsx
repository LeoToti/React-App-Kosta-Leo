import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CommentArea from "./CommentArea";
import { Navbar, Nav, Form, Button, FormControl, Card } from "react-bootstrap";
import MyBadge from "./MyBadge";

class BookList extends React.Component {
  state = {
    query: "",
    selectedQuery: "",
    selected: true,
    selectedBook: "",
  };
  search = "";
  render() {
    return (
      <>
        <div
          style={{ position: "fixed", top: "0", zIndex: "1", width: "99vw" }}
        >
          {/* <input type="search"  value={this.state.query} onChange={ e => this.setState({query: e.target.value})} /> */}
          <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home" style={{ color: "blanchedalmond" }}>
              Book-Mania
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home" style={{ color: "blanchedalmond" }}>
                  Home
                </Nav.Link>
                <Nav.Link href="#link" style={{ color: "blanchedalmond" }}>
                  Link
                </Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="search"
                  placeholder="Search"
                  onChange={(e) => (this.search = e.target.value)}
                  className="mr-sm-2"
                  id="search"
                />
                <Button
                  variant="outline-success"
                  onClick={(e) => this.setState({ selectedQuery: this.search })}
                >
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div className="container mt-5 mx-0">
          <div className="row " style={{ width: "99vw" }}>
            <div className="col-10 mt-5">
              <div className="row">
                {this.props.books
                  .filter((book) =>
                    book.title
                      .toLowerCase()
                      .includes(this.state.selectedQuery.toLowerCase())
                  )
                  .map((book) => (
                    <div className="col-3 mt-1 ">
                      <Card key={"book:" + book.title}>
                        <Card.Img
                          variant="top"
                          src={book.img}
                          onClick={() =>
                            this.setState({
                              selected: true,
                              selectedBook: book,
                            })
                          }
                        />
                        <MyBadge book={book} />
                        <Card.Body>
                          <Card.Title>{book.title}</Card.Title>
                          {/* <Card.Text>{book.category}</Card.Text> */}
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
              </div>
            </div>
            <div
              className="col-2 "
              style={{
                top: "6.3rem",
                right: "0.5rem",
                position: "fixed",
              }}
            >
              <div>
                {this.state.selectedBook && (
                  <CommentArea book={this.state.selectedBook} />
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
