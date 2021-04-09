import React from 'react';
import Button from '../Button/Button'

export default function GroupButton(props){
    return (
        <div className="group-Submit-Cancel">
            <Button className="cancel" onClick={props.ButtonCancel} valueButtton={props.ValueButtonCancel}/>
            <Button type="submit" className="success" onClick={props.ButtonSubmit} valueButtton={props.ValueButtonSubmit}/>
        </div>
    )
}