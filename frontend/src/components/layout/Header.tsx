import { Workflow } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { logoutUser } from "../../store/userSlice";
import { logout } from "../../services/authServices";
import { AppDispatch, RootState } from "../../store/store";

/**
 * **Header Component**
 * - Displays the main navigation bar.
 * - Includes login/logout functionality based on authentication state.
 */
export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useSelector((store: RootState) => store.user);

  /** Handles user logout */
  const handleLogout = async () => {
    await logout();
    dispatch(logoutUser());
  };

  return (
    <header className=" text- p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <Workflow className="w-8 h-8 text-indigo-600" />
          <span className="text-xl font-bold text-slate-900">Flowly</span>
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-200">
                About
              </Link>
            </li>
            {!isAuthenticated ? (
              <li>
                <Link to="/authentication" className="hover:text-gray-200">
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <a onClick={handleLogout} className="hover:text-gray-200">
                  Logout
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
