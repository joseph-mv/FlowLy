/**
 * **HeroImage Component**
 * - Displays the workflow editor illustration.
 */
const HeroImage = () => {
    return (
      <div className="flex-1 w-full max-w-2xl lg:max-w-none">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/banner.png"
            alt="Workflow Editor Interface"
            className="w-full h-auto rounded-2xl brightness-70 contrast-200"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 mix-blend-multiply"></div>
        </div>
      </div>
    );
  };

  export default HeroImage