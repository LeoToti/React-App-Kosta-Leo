import React from "react"
import {ListGroup} from "react-bootstrap"

class CommentsList extends React.Component {


render () {
    return (
        <>
        <ListGroup>
            {
            this.props.bookComments.map((comment) => <ListGroup.Item>{comment}</ListGroup.Item>)}
   
 
</ListGroup>
  
        </>
    )
}

}

export default CommentsList