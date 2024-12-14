import React from "react";

interface TextProps {
  className?: string;
  children: React.ReactNode;
}

const CustomText: React.FC<TextProps> = ({ className = "", children }) => {
  return <p className={className}>{children}</p>;
};

export default CustomText;
