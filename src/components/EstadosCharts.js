import React, { Component,Fragment } from 'react'
import { Chart } from "react-google-charts";

class EstadoCharts extends Component {

    state = {
        datos: this.props.datos,
        nestados: ''
    }
    
    
    render() {

        //console.log(this.props.datos);
        // console.log(this.props.datos[0].nom_agee)
        // console.log(this.props.datos[0].pob)
        // const n = Number(this.props.datos[0].pob)
        // console.log(n);
    
        // eslint-disable-next-line
        // {this.props.datos.map((estados, index) => (
        //      console.log(estados.nom_agee, (index))                                    
        // ))}
    

        return (
            
            <Fragment>
                <div className="col-12 d-lg-flex grapho">
                    <div style={{ }}>
                        <Chart
                            width={900}
                            height={300}
                            chartType="BarChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                            ['Cities', '2010 Population'],
                            [this.props.datos[0].nom_agee, Number(this.props.datos[0].pob)],
                            [this.props.datos[1].nom_agee, Number(this.props.datos[1].pob)],
                            [this.props.datos[2].nom_agee, Number(this.props.datos[2].pob)],
                            [this.props.datos[3].nom_agee, Number(this.props.datos[3].pob)],
                            [this.props.datos[4].nom_agee, Number(this.props.datos[4].pob)],
                            [this.props.datos[5].nom_agee, Number(this.props.datos[5].pob)],
                            [this.props.datos[6].nom_agee, Number(this.props.datos[6].pob)],
                            [this.props.datos[7].nom_agee, Number(this.props.datos[7].pob)],
                            [this.props.datos[8].nom_agee, Number(this.props.datos[8].pob)],
                            [this.props.datos[8].nom_agee, Number(this.props.datos[8].pob)],
                            [this.props.datos[9].nom_agee, Number(this.props.datos[9].pob)],
                            [this.props.datos[10].nom_agee, Number(this.props.datos[10].pob)],
                            [this.props.datos[11].nom_agee, Number(this.props.datos[11].pob)],
                            [this.props.datos[12].nom_agee, Number(this.props.datos[12].pob)],
                            [this.props.datos[13].nom_agee, Number(this.props.datos[13].pob)],
                            [this.props.datos[14].nom_agee, Number(this.props.datos[14].pob)],
                            [this.props.datos[15].nom_agee, Number(this.props.datos[15].pob)],
                            [this.props.datos[16].nom_agee, Number(this.props.datos[16].pob)],
                            [this.props.datos[17].nom_agee, Number(this.props.datos[17].pob)],
                            [this.props.datos[18].nom_agee, Number(this.props.datos[18].pob)],
                            [this.props.datos[19].nom_agee, Number(this.props.datos[19].pob)],
                            [this.props.datos[20].nom_agee, Number(this.props.datos[20].pob)],
                            [this.props.datos[21].nom_agee, Number(this.props.datos[21].pob)],
                            [this.props.datos[22].nom_agee, Number(this.props.datos[22].pob)],
                            [this.props.datos[23].nom_agee, Number(this.props.datos[23].pob)],
                            [this.props.datos[24].nom_agee, Number(this.props.datos[24].pob)],
                            [this.props.datos[25].nom_agee, Number(this.props.datos[25].pob)],
                            [this.props.datos[26].nom_agee, Number(this.props.datos[26].pob)],
                            [this.props.datos[27].nom_agee, Number(this.props.datos[27].pob)],
                            [this.props.datos[28].nom_agee, Number(this.props.datos[28].pob)],
                            [this.props.datos[29].nom_agee, Number(this.props.datos[29].pob)],
                            [this.props.datos[30].nom_agee, Number(this.props.datos[30].pob)],
                            [this.props.datos[31].nom_agee, Number(this.props.datos[31].pob)],                                                
                            ]}

                            options={{
                            title: 'Population of Mexico ',
                            chartArea: { width: '30%' },
                            hAxis: {
                                title: 'Cities',
                                minValue: 0,
                            },
                            vAxis: {
                                title: 'Total Population',
                            },
                            }}
                            legendToggle
                        />
                    </div>
                </div> 
            </Fragment>            
        )
    }
}

export default EstadoCharts