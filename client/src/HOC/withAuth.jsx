import { useAuthContext } from "../contexts/AuthContext";

export default function withAuth(Component) {   // receives comp!
    const ComponentWrapper = (props) => {
        const authContext = useAuthContext();
        return <Component {...props} auth={authContext} />;        // injects props to the received comp
    }
    return ComponentWrapper;                    // returns comp!
}