import { Button } from "@headlessui/react";
import React from "react";

type CustomButtonProps = {
  title: string;
  color?: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconSize?: number;
  onClick: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  color = "#e2e8f0",
  Icon,
  iconSize = 24,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      style={{
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5rem 1rem",
        borderRadius: "0.375rem",
        color: "#fff",
        fontSize: "1rem",
        fontWeight: "500",
        gap: "0.5rem",
        cursor: "pointer",
        border: "none",
        margin: 10,
      }}
      className="hover:opacity-90"
    >
      {Icon && (
        <Icon
          style={{
            width: iconSize,
            height: iconSize,
          }}
        />
      )}
      {title}
    </Button>
  );
};

export default CustomButton;
