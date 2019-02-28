import React from 'react'

const Home = () => {
    return(
        <div className="container">
            <h4 className="center">axios</h4>
            <div class="row">
                <div class="col s12 m12">
                    <div class="card blue-grey lighten-2">
                    <div class="card-content white-text">
                        <span class="card-title">React CRUD with axios</span>
                        <p>Axios is promise-based and thus we can take advantage of async and await for more readable asynchronous code. We can also intercept and cancel requests, and there’s built-in client side protection against cross site request forgery. But the best part about Axios? The easy to use API!</p><br/>

                        <p>Using it inside a React project is simple! In this example we’ll use Axios to access the common JSON Placeholder API within a React application. We can start by adding Axios to our project:</p>
                    </div>

                    <div class="card-content white-text">
                        <span class="card-title">Install</span>
                        <p>npm install axios --save</p><br/>
                    </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col s12 m12">
                    <div class="card blue-grey lighten-2">
                        <div class="card-content white-text">
                            <span class="card-title">GET Requests</span>
                            <p>If we then create a new component named PersonList, we’d be able to hook into the componentDidMount lifecycle hook and perform a GET request after importing axios.</p><br/>
                            <pre>{`
                                componentDidMount(){
                                    axios.get('https://jsonplaceholder.typicode.com/users')
                                    .then(res => {
                                        console.log(res.data)
                                        this.setState({
                                            users: res.data
                                        })
                                    })
                                }
                  
                            `}</pre>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col s12 m12">
                    <div class="card blue-grey lighten-2">
                        <div class="card-content white-text">
                            <span class="card-title">Post Request</span>
                           
                            <pre>{`
                                 handleSubmit = (event) => {
                                    event.preventDefault();
                                    const data = this.state;
                            
                                    axios.post('https://jsonplaceholder.typicode.com/users', { data })
                                    .then(res => {
                                        console.log(res);
                                        console.log(res.data);
                                    })
                                }
                            `}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        
}

export default Home