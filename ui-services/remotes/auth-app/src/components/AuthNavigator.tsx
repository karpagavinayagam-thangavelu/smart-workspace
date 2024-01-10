import { Button } from "@smart/core";
import { useNavigate } from "react-router-dom";

export const AuthNavigator = () => {
    const navigate = useNavigate();
    return (
        <Button onClick={() => navigate('/login')}>
            Login
        </Button>
    )
}
