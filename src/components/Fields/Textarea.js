import React from 'react';

export default function Textarea({
  name,
  className,
  value,
  htmlFor,
  label,
  description,
  controlFunc
}) {
  return (
    <div className="form-group">
      <label htmlFor={htmlFor}>{label}</label>
      <textarea
        className={className}
        name={name}
        value={description}
        onChange={controlFunc}
      ></textarea>
    </div>
  );
}
