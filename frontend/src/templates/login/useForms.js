import {useState} from 'react';

export default function useForm() {
    const [values, setValues] = useState({});

    const handleChange = (event) => {
        const cloneValues = {...values};
        cloneValues[event.target.name] = event.target.value;
        setValues(cloneValues);
    }

    const handleSubmit = (callback) => (event) => {
        event.preventDefault();
        callback();
    }


    return [{values}, handleChange, handleSubmit]
}


