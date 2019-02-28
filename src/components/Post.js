import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    state = {
        name: '',
        email: '',
        address: '',
    }

      handleChaage = (e) => {
         console.log(e.target.name) 
         this.setState({
            [e.target.name]: e.target.value
        })
      }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;

        axios.post(`https://jsonplaceholder.typicode.com/users`, { data })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    render(){
        return (
            <div className="container post">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Enter Name</label>
                    <input id="name" onChange={this.handleChaage} name="name" type="text" />

                    <label htmlFor="email">Enter your email</label>
                    <input id="email" onChange={this.handleChaage} name="email" type="email" />

                    <label htmlFor="address">Address</label>
                    <input id="address" onChange={this.handleChaage} name="address" type="text" />

                    <button>Submit</button>
                </form>
            </div>
        )
    }      
}

export default Post