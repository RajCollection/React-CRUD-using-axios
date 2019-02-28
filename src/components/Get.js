import React, { Component } from 'react'
import axios from 'axios'
import { Spinner } from 'reactstrap';

class Get extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          users: []
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
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
                            <span onClick={this.toggle} className="card-title">{user.name}</span>
                            
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
            <div className="center"><Spinner style={{ width: '5rem', height: '5rem' }} type="grow" /></div>
        )
        return (
            
            <div className="container">
                <h4 className="center users">Users</h4>
                {userList}
                
            </div>
        )
    }      
}

export default Get