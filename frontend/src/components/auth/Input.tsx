
type InputProps = {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  required?: boolean;
  onchange:React.Dispatch<React.SetStateAction<string>>
}

export function Input({ label, type, id, placeholder, required = false,onchange }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        placeholder={placeholder}
        onChange={(e)=>onchange(e.target.value)}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
}