import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        {...props}
      />
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
    </div>
  );
};

export default Checkbox;