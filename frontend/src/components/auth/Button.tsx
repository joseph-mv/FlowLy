
type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  onClick?: () => void;
};

/**
 * **Button Component**
 * - A reusable button with different styles (primary, secondary).
 * - Supports full width, click handlers, and custom button types.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "primary",
  fullWidth = false,
  onClick,
}) => {

  // Base styles for button
  const baseStyles =
    "inline-flex justify-center items-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200";

  // Style variants for different button types
  const variants = {
    primary:
      "border-transparent text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
    secondary:
      "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {children}
    </button>
  );
};
