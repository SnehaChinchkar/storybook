import React from 'react';

type CaptionProps = {
  children: React.ReactNode;
  className?: string;
};

export const Caption = ({ children, className = '' }: CaptionProps) => {
  return <span className={`font-caption text-sm text-muted ${className}`}>{children}</span>;
};
