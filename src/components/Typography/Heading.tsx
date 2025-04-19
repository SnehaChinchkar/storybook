import React, { ElementType } from 'react';

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

export const Heading = ({ level = 1, children, className = '' }: HeadingProps) => {
  const tagName = `h${level}` as keyof HTMLElementTagNameMap;
  const Tag = tagName as ElementType;

  return <Tag className={`font-heading text-h${level} ${className}`}>{children}</Tag>;
};
