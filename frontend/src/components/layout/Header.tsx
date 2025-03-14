import { Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { logout } from "../../services/authServices";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { logoutUser } from "../../store/userSlice";

export default function Header() {
  const dispatch=useDispatch<AppDispatch>()
  const {isAuthenticated}=useSelector((store:RootState)=>store.user)

  const handleLogout=async()=>{
    await logout()
    dispatch(logoutUser())
  }
  
  return (
    <header className=" text- p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Workflow className="w-8 h-8 text-indigo-600" />
          <span className="text-xl font-bold text-slate-900">Flowly</span>
        </div>

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
            {!isAuthenticated ?<li>
              <Link to="/authentication" className="hover:text-gray-200">
                Login
              </Link>
            </li> :
            <li>
              <a  onClick={handleLogout} className="hover:text-gray-200">
                Logout
              </a>
            </li>}
          </ul>
        </nav>
      </div>
    </header>
  );
}
