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
    const changeHandler = (e) => {       // saves EVERY SINGLE INPUT from from fields in a state
        setValues(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    // Then, the data collected from 'changeHadler' must be 'submitted' (send to server)
    // we create this func ONLY to prevent page refresh. Otherwise it does exactly the same as 'submitCallBack' (SUBMITs the form)
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