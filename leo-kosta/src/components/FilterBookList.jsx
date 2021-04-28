










class FilterBookList extends React.Component {

    state = {
        book: { // INITIAL STATE

            title: '',
            img: '',
            asin: '',
            price: '',
            catregory: ''
            
        }
    }

    

    handleChange = (e) => {
        // e.target.value
        // e.target.id
        let id = e.target.id
        console.log('the field I need to change in the reservation object is', id)
        // id can be "name", "phone", "smoking"
        this.setState({
            book: {
                ...this.state.book,
                [id]: id = e.target.value
            }
        })
    }

}