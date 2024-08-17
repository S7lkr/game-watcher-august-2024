import { useState } from "react";

export default function useIsFetching() {
    const [isFetching, setIsFetching] = useState(false);
    const toggleIsFetching = () => setIsFetching(oldState => !oldState);

    return [isFetching, toggleIsFetching];
}