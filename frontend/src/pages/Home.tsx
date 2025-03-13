import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">

      {/* Hero Section */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center py-16 lg:py-24 gap-12">
            {/* Left Column - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Design. Automate.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Optimize
                </span>{' '}
                – Your Workflows with Flowly.
              </h1>
              
              <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0">
                A powerful, intuitive drag-and-drop workflow builder to streamline tasks and boost productivity.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/workspace" className="inline-flex items-center px-6 py-3 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:shadow-indigo-200">
                  Create a Workspace
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to='/works-flow-list' className="inline-flex items-center px-6 py-3 rounded-full text-slate-700 bg-white hover:bg-slate-50 transition border border-slate-200 shadow-lg hover:shadow-xl">
                  Your Workflows
                  <Layers className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Column - Illustration */}
            <div className="flex-1 w-full max-w-2xl lg:max-w-none">
              <div className="relative rounded-2xl  overflow-hidden shadow-2xl">
                <img
                  src="/banner.png"
                  alt="Workflow Editor Interface"
                  className="w-full h-auto rounded-2xl brightness-70 contrast-200"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;