import { Workflow } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
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
            <li>
              <Link to="/contact" className="hover:text-gray-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
