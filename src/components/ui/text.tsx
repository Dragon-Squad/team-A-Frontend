import React from "react";

interface TextProps {
  className?: string;
  textClassName?: string;
  children?: React.ReactNode;
  withSpan?: boolean;
  spanClassName?: string;
  additionalText?: React.ReactNode;
  additionalTextHref?: string;
  onAdditionalTextClick?: () => void;
}

const CustomText: React.FC<TextProps> = ({
  className = "",
  textClassName = "",
  children,
  withSpan = false,
  spanClassName = "",
  additionalText,
  additionalTextHref,
  onAdditionalTextClick,
}) => {
  return (
    <div className={className}>
      <p className={textClassName}>{children}</p>
      {withSpan && additionalText && (
        <>
          {additionalTextHref ? (
            <a href={additionalTextHref}>
              <a className={spanClassName}>{additionalText}</a>
            </a>
          ) : (
            <span
              className={spanClassName}
              onClick={onAdditionalTextClick}
              style={{ cursor: "pointer" }}
            >
              {additionalText}
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default CustomText;
