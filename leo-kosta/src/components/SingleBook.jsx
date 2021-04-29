import React from 'react'
import {Card} from 'react-bootstrap'
import CommentArea from "./CommentArea"





class SingleBook  extends React.Component  {
   state = { selected:false
  }


  render() {
      
    return  ( 
    <>
          <Card key={this.props.book.asin} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.book.img}  onClick={() => this.setState({selected:true})} />
            <Card.Body>
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text>
                {this.props.book.category}
              </Card.Text>  
              { this.state.selected && <CommentArea bookId= {this.props.book.asin}/>  }        
              
            </Card.Body>
          </Card>
        </>
        )
          }
        
}

export default SingleBook
