import React, { Component,Fragment } from 'react';


import Navbar from '../components/Navbar';
import BadgeForm from '../components/BadgeForm'
import Calendari from '../components/Calendari'
import Badge from '../components/Badge'
import Video from '../components/Video'

class badgeNew extends Component {

    state = {

        form: {
            firstName: 'David',
            lastName: 'Lechuga Huerta',
            email: 'lechugazteca@hotmail.com',
            jobTitle: 'Developer jr',
            project:'Twitgov',
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    render() {
        return (
            <Fragment>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Calendari />
                        </div>                            
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />    
                         </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                email={this.state.form.email}
                                jobTitle={this.state.form.jobTitle}
                                project={this.state.form.project}
                            />
                            <Video
                            />
                        </div>
                    </div>      
                </div> 
            </Fragment>
        )
    }
}
export default badgeNew