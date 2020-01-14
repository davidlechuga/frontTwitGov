import React, { Component,Fragment } from 'react'

class Badgeform extends Component {
    
    //INICIALIZAMOS ESTADO y HACEMOS LEVANTAMIENTO DEL ESTADO.
    // state = {
    //     // firstName: '',
    //     // lastName: '',
    //     // email: '',
    //     // jobTitle: '',
    //     // project:'',
    // }

// handleChange = e => {
//     //     console.log({
//     //         name: e.target.name,
//     //         value: e.target.value
//     //     });
//     //     this.setState({
//     //     // las llaves es para que cambie el estado del input correspondiente.
//     //    [e.target.name] : e.target.value
//     //     })
// }

handleClick = e => {
console.log("button was click");

}
handleSubmit = e => {
e.preventDefault();

console.log(" I have already sent the form.");

}


render() {
return (
    <Fragment>
        <h1> Web Development Services </h1>
        
        <form onSubmit={this.handleSubmit}>
            
            <div className="form-group">
                <label> Frist Name  </label>
                    <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        onChange={this.props.onChange}
                        value={this.props.formValues.firstName}
                    // value lo convierte de no controlados a controlados

                    />
            </div>
                
            <div className="form-group">
                <label> Last Name  </label>
                    <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        onChange={this.props.onChange}
                        value={this.props.formValues.lastName}

                    />
            </div>
                
            <div className="form-group">
                <label> Email  </label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        onChange={this.props.onChange}
                        value={this.props.formValues.email}     
                    />
            </div>
            <div className="form-group">
                <label> JobTitle  </label>
                    <input
                        className="form-control"
                        type="text"
                        name="jobTitle"
                        onChange={this.props.onChange}
                        value={this.props.formValues.jobTitle}

                    />
            </div>
            <div className="form-group">
                <label> Project </label>
                    <input
                        className="form-control"
                        type="text"
                        name="project"
                        onChange={this.props.onChange}
                        value={this.props.formValues.project}
                    />
            </div>
                
            
            <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleClick}
                > Save
            </button>    

        </form>  
    </Fragment>
    )
    }
}

export default Badgeform