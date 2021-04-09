import React, { Component } from 'react'
import Tbody from './Tbody'

export default class TableUser extends Component {
    constructor(props){
        super(props)
        this.state={
            data: this.props.data,
            dataKey: this.props.dataKey
        }
    }

    rowTable(values){
        const keys = Object.keys(values)
        return(
            <>
                {console.log(keys)}
            </>
        )
    }
    

    render(){
        return(
            <>
                <thead>
                    {this.state.data.map(values => {
                        return(
                            <tr key={values[this.state.dataKey]}>
                                {this.rowTable(values)}
                            </tr>
                        )
                    })}
                    {/* <tr>
                        <th>NOME</th>
                        <th>CPF/CNPJ</th>
                        <th>E-MAIL</th>
                        <th>TELEFONE</th>
                        <th>MÓDULOS</th>
                        <th>AÇÕES</th>
                    </tr> */}
                </thead>
                <Tbody data={this.state.data} dataKey={this.state.dataKey}/>
            </>
        )
    }

    
}