import React  from 'react';
import './TextInput.css';
export default function TextInput({onInputChange, accessibilityLabel, accessible, inputType, placeHolder}:
  {onInputChange: (value:string)=>void; accessibilityLabel: string; accessible: boolean; inputType: string; placeHolder:string}) {
  return (
    <div className='Input-container'>
      <input
        placeholder={placeHolder}
        aria-label={accessibilityLabel} 
        aria-required={accessible} 
        data-testid={'text-input'} 
        className='Text-input' 
        type={inputType} 
        onChange={(e)=>onInputChange(e.target.value)}
      />
    </div>
  );
}