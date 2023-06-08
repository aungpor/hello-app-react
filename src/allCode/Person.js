import React from 'react'
class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "Nama",
            lname: "Chocolate",
            age: 20
        }
    }

    changeName = () => {
        this.setState({
            fname: "Spicy",
            lname: "Lemon"
        })
    }
    

    render() {
        return (
            <div>
                <p>Hello, my name is {this.state.fname} {this.state.lname} ({this.state.age})</p>
                <button
                    type="button"
                    onClick={this.changeName}
                >Change Name</button>
            </div>
        );
    }
}

export default Person