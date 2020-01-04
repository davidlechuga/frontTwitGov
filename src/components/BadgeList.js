import React, { Component } from 'react'

class BadgeList extends Component {

    
    render() {
        var nombres = this.datos.nom_agee
        console.log(this.datos.nom_agee);
        return (

            <p>
                {nombres}
                
                
                       
            </p>
        )
    }
    
}

export default BadgeList