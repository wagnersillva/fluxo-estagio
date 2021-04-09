import React, {Component} from 'react'


export default class Tbody extends Component {
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
                {keys.map(key =>{
                    return(
                        <td key={key}>{values[key]}</td>
                    )
                })}
            </>
        )
    }

    render() {
        return (
            <tbody>
                {this.state.data.map(values => {
                    return (
                        <tr key={values[this.state.dataKey]}>
                            {console.log(this.state.dataKey)}
                            {this.rowTable(values)}
                            {/* <td className="td-actions">
                                <div>
                                    <FaUserEdit className="icon actionUserEdit" />
                                    <FaEye className="icon actionUserView" />
                                    <FaTimes
                                        className="icon actionUserDelete"
                                        onClick={() => {
                                            handleShowModal(setShow({ modalDelete: true }))
                                            setUserData(value.nome)
                                        }}
                                    />
                                </div>
                            </td> */}
                        </tr>
                    )
                })}
            </tbody>
        )
    }
}