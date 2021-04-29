import React from 'react'
import {Card} from 'react-bootstrap'


class SingleBook  extends React.Component  {
   

  render() {
      
    return  ( 
    <>
          <Card key={this.props.book.asin} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.book.img} />
            <Card.Body>
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text>
                {this.props.book.category}
              </Card.Text>
            </Card.Body>
          </Card>
        </>
        )
          }
        
}

export default SingleBook
