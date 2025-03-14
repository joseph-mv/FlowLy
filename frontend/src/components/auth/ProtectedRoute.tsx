import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RootState } from "../../store/store";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

/**
 * **ProtectedRoute Component**
 * - Restricts access to authenticated users.
 * - If `isAuthenticated`, renders the protected content (`children`).
 * - Otherwise, redirects users to the authentication page.
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useSelector((store: RootState) => store.user);
  
  return isAuthenticated ? children : <Navigate to="/authentication" />;
};

export default ProtectedRoute;
