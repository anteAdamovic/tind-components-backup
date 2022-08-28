import React from "react";
import { Button as PRButton } from 'primereact/button';

interface ButtonProps {
  type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'help';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

function getButtonSizeClass(size: string) {
  switch (size) {
    case 'large': {
      return 'p-button-lg';
    }
    case 'small': {
      return 'p-button-sm';
    }
    default: {
      return 'p-button';
    }
  }
}

export const Button = ({
  type = 'primary',
  size = 'medium',
  label,
  onClick
}: ButtonProps) => {
  const classList = `tc-button-${type} tc-button-${size} p-button-${type} ${getButtonSizeClass(size)}`;

  return (
    <PRButton
      label={label}
      className={classList}
      onClick={onClick}
    />
  );
};