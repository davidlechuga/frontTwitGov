import React, { Component,Fragment } from 'react'
import EstadosCharts from '../components/EstadosCharts'

export default class BadgeList extends Component {

    state = {
        datos: this.props.datos
    }

    
    render() {    
        // console.log(this.props.datos);
        // console.log(this.props.datos[0]);
        
        
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className=" col-12 table_styles">
                            <div className="row rtthead">
                            <h5>Estado</h5> <h5> Población</h5>
                        </div>
                        {this.props.datos.map((estados, index) => ( 
                            <div className="row rtthead" key={index}> 
                                <div className="col-6 ctbody"> 
                                    <span>{estados.nom_agee}</span> 
                                </div>
                                <div className="col-6 ctbody"> 
                                    <span>  {estados.pob}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                        <EstadosCharts
                            datos={this.state.datos}
                        />

                    </div>
                </div>
            </Fragment>
        )
    }
}

