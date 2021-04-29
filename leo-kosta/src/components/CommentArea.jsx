import React from "react"
import {ListGroup,Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentsList from "./CommentsList";

class CommentArea extends React.Component {

    state = {comments:[],
             singeBookComments:[]   }

    componentDidMount = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/",{
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMWY1MWIxZjBmYjAwMTVkOTE3OTEiLCJpYXQiOjE2MTkwMDkzNjEsImV4cCI6MTYyMDIxODk2MX0.ImlVBcPHsjaDy0c6wfO0Kybjg-u2nPcdNJtgMQlreVc"
              }
            }
            )
            if(response.ok) {
                let data = await response.json()             
                this.setState({comments:data})
                console.log(this.state.comments)
                console.log(this.state.comments.filter(comment => comment.elementId === this.props.bookId))
                console.log(this.props.bookId)
                console.log(this.state.comments[0].elementId)
                let BookComments = this.state.comments.filter(comment => comment.elementId === this.props.bookId)
                this.setState({singleBookComments:BookComments})
            }else {
                alert("error11")
            }

        } catch (error) {
            alert(error)
        }
    }

render () {

    return (
        <>
<Button variant="primary">Add Comment!</Button>
 <CommentsList bookId={this.props.bookId} bookComments={this.state.singeBookComments} />
</>

)
}
}
export default CommentArea