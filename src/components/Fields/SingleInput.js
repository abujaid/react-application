import React from "react";

export default function SingleInput({
  type,
  name,
  label,
  id,
  className,
  value,
  controlFunc,
  htmlFor,
  placeholder
}) {
  return (
    <div className="form-group">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        className={className}
        value={value}
        placeholder={placeholder}
        onChange={controlFunc}
      />
    </div>
  );
}
