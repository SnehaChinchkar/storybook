import React from 'react';

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export const Paragraph = ({ children, className = '' }: ParagraphProps) => {
  return <p className={`font-body text-base ${className}`}>{children}</p>;
};
