import React from "react";

interface TextProps {
  className?: string;
  textClassName?: string;
  children: React.ReactNode;
  withSpan?: boolean;
  spanClassName?: string;
  additionalText?: React.ReactNode;
}

const CustomText: React.FC<TextProps> = ({
  className = "",
  textClassName = "",
  children,
  withSpan = false,
  spanClassName = "",
  additionalText,
}) => {
  return (
    <div className={className}>
      <p className={textClassName}>{children}</p>
      {withSpan && additionalText && (
        <span className={spanClassName}>{additionalText}</span>
      )}
    </div>
  );
};

export default CustomText;
