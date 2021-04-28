import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import SingleBook from "./SingleBook";


class BookList extends React.Component {
  state = {
    query: ''
  }

  render() {

  return <>
  <div className='ml-1'>
    <input type="search"  value={this.state.query} onChange={ e => this.setState({query: e.target.value})} />
  </div>
  <div className='row'>
      {
      this.props.books
        .filter(book => 
            book.title.toLowerCase().includes(this.state.query)
        )
        .map((book) => SingleBook(book))
      }
      
  </div>
  </>
  }
}



export default BookList