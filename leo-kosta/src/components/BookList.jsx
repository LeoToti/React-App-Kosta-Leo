

import books from "../data/fantasy.json";
import SingleBook from "./SingleBook";








const BookList = (props) => (



  <div className='row'>
      {
      props.books.map((book) => SingleBook(book))
      }
      
  </div>


);


export default BookList