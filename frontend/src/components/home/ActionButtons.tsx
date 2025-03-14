import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

/**
 * **ActionButtons Component**
 * - Provides CTA buttons for navigation.
 */
const ActionButtons = () => {
    return (
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Link
          to="/workspace"
          className="inline-flex items-center px-6 py-3 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:shadow-indigo-200"
        >
          Create a Workspace
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
  
        <Link
          to="/works-flow-list"
          className="inline-flex items-center px-6 py-3 rounded-full text-slate-700 bg-white hover:bg-slate-50 transition border border-slate-200 shadow-lg hover:shadow-xl"
        >
          Your Workflows
          <Layers className="ml-2 w-5 h-5" />
        </Link>
      </div>
    );
  };

export default ActionButtons