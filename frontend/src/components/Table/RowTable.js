import React, { Component } from 'react'

export default class RowTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            dataKey: this.props.dataKey
        }
    }


    RenderColumnTable(value) {
        if(!Array.isArray(value)){
            const keys = Object.keys(value)
            return(
                <>
                    {keys.map((key, index) =>{
                        return(
                            <td key={index}>{value[key]}</td>
                        )
                    })}
                </>
            )
        }else{
            return (
                <>
                    {value.map((value, index) => {
                        return (
                            <>
                                <td key={index}>{value.toUpperCase()}</td>
                            </>
                        )
                    })}      
                </>
            )
        }
    }

    render() {
        return (
            <>
                {this.RenderColumnTable(this.props.data)}
            </>
        )
    }
}