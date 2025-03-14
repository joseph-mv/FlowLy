
import HeroImage from '../components/home/HeroImage';
import ActionButtons from '../components/home/ActionButtons';

/**
 * **Home Page**
 * - Displays the main heading, description, and action buttons.
 */
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
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

              {/* Action Buttons */}
              <ActionButtons/>
            </div>

            {/* Right Column - Illustration */}
            <HeroImage/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;