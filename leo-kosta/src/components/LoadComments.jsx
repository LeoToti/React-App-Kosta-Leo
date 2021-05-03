import 'bootstrap/dist/css/bootstrap.min.css';

const LoadComments = async function () {



    
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
                return data       
            
            }else {
                alert("error11")
            }

        } catch (error) {
            alert(error)
        }
        
    }





export default LoadComments