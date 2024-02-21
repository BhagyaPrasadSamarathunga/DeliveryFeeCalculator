import React from 'react';
import './Button.css';

export default function Button({onClick, title, style, isDisable, accessibilityLabel}:
  {onClick:()=>void; title:string; style?: React.CSSProperties; isDisable: boolean; accessibilityLabel: string}) {
  return (
      <button 
        aria-label={accessibilityLabel}
        disabled={isDisable}
        data-testid={'button'}
        className={isDisable ?'Button-disable':'Button'}
        style={style}
        onClick={onClick}> {title} </button>
  );
}