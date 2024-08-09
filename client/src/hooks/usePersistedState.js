import { useState } from "react";

export default function usePersistedState(key, initialState) {      // prevents logout on refresh
    const [state, setState] = useState(() => {
        const persistedAuth = localStorage.getItem(key);
        if (!persistedAuth) {
            return typeof(initialState) === 'function'  // 'state' wil be either this
                ? initialState()
                : initialState
        };
        const authData = JSON.parse(persistedAuth);
        return authData;    // or this
    });

    const updateState = (value) => {
        localStorage.setItem(key, JSON.stringify(value));   // update localStorage

        setState(value);                                    // and update state
    }
    return [state, updateState];
}