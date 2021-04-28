










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
        let search = e.target.value
        console.log('the value of the search field is ', search)
        // id can be "name", "phone", "smoking"
        // this.setState({
        //     book: {
        //         ...this.state.book,
        //         [id]: id = e.target.value
        //     }
        // })
    }

}