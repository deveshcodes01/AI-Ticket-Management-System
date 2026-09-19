import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CheckAuth({ children, protectedRoute }) {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (protectedRoute) {
            if (!token) {
                navigate("/login");
            }
        } else {
            if (token) {
                navigate("/");
            }
        }
    }, [navigate, protectedRoute, token]);

    if ((protectedRoute && !token) || (!protectedRoute && token)) {
        return <div>loading...</div>;
    }
    return children;
}

export default CheckAuth;