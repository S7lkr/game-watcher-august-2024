import { useState } from "react";

export default function usePersistedState(key, initialState) {      // prevents logout on refresh
    const [state, setState] = useState(() => {
        const persistedAuth = localStorage.getItem(key);
        if (!persistedAuth) {
            return typeof(initialState) === 'function' ? initialState() : initialState;     // 'state' wil be either initial
        };
        const authData = JSON.parse(persistedAuth);
        return authData;                                                                    // or this
    });

    const updateState = (value) => {
        const newState = typeof(value) === 'function' ? value(state) : value;
        
        if (newState === null || newState === undefined) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(newState));    // update localStorage
        }
        setState(newState);                                         // and update state
    }
    return [state, updateState];
}