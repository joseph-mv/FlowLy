import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps={
    children:React.ReactNode
}

const ProtectedRoute:React.FC<ProtectedRouteProps> = ({children}) => {

  const { isAuthenticated } = useSelector((store: RootState) => store.user);
return isAuthenticated ? children : <Navigate to="/authentication" />;
};

export default ProtectedRoute;
