import { useState } from "react";

/**
 * 
 * @param {object} initialValues 
 * @param {function} submitCallback 
 * @returns 
 */
export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);

    // TODO: Add support for checkbox
    const changeHandler = (e) => {       
        setValues(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        submitCallback(values);
    }
    return {
        values,
        changeHandler,
        submitHandler,
    }
}