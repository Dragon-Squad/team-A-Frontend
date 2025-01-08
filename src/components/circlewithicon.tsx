import React from "react";

type CircleWithIconProps = {
  size?: number;
  color?: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconSize?: number;
};

const CircleWithIcon: React.FC<CircleWithIconProps> = ({
  size = 50,
  color = "#e2e8f0",
  Icon,
  iconSize = 24,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon
        style={{
          width: iconSize,
          height: iconSize,
          color: "currentColor",
        }}
      />
    </div>
  );
};

export default CircleWithIcon;
