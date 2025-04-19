type InputProps = {
    label: string;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
  };
  
  export const TextInput = ({ label, placeholder, disabled, error }: InputProps) => (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        disabled={disabled}
        placeholder={placeholder}
        className={`border p-2 rounded ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
  