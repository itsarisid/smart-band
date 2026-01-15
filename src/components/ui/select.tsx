import React, { SelectHTMLAttributes } from 'react';

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: (string | Option)[];
  placeholder?: string;
}

function Select({
  options = [],
  value,
  onChange,
  name,
  placeholder = 'Select an option',
  required = false,
  disabled = false,
  className = '',
  ...props
}: SelectProps) {
  const baseClasses = 'w-full px-4 py-3 text-white bg-transparent border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed';

  const classes = `${baseClasses} ${className}`;

  return (
    <select
      value={value}
      onChange={onChange}
      name={name}
      required={required}
      disabled={disabled}
      className={classes}
      {...props}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((option, index) => {
        const optionValue = typeof option === 'object' ? option.value : option;
        const optionLabel = typeof option === 'object' ? option.label : option;
        return (
          <option key={index} value={optionValue} className="bg-gray-900 text-white">
            {optionLabel}
          </option>
        );
      })}
    </select>
  );
}

export default Select;