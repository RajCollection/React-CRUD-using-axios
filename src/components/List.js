import React, { Component } from 'react'
import axios from 'axios'

class List extends Component {

    state = {
        users: []
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data)
                this.setState({
                    users: res.data
                })
            })
    }
    render(){
        const { users } = this.state;

        const userList = users.length ? (
            users.map(user => {
                console.log(user)
                return (
                    <div className="user card" key={user.id}>
                        <div className="card-content">
                            <span className="card-title">{user.name}</span>
                            <p><b>Email:</b> {user.email}</p>
                            <p><b>Company:</b> {user.company.name}</p>
                            <p><b>Phone:</b> {user.phone}</p>
                            <p><b>Website:</b> {user.website}</p>
                            <p><b>Address:</b> {user.address.city}, {user.address.street}, {user.address.suit}, {user.address.zipcode}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No users yet</div>
        )
        return (
            <div className="container">
                <h4 className="center">Users</h4>
                {userList}
            </div>
        )
    }      
}

export default List