import { useContext } from "react";
import { LoggedInUserContext } from "../../LoggedInUserContext";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
    const {setLoggedInUser} = useContext(LoggedInUserContext);
    const navigate = useNavigate();

    return function handleLogOutClick() {
        setLoggedInUser(null);
        navigate('/signin');
    }
}

