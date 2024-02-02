import React, { FC } from "react";
import cn from "classnames";

interface AvailablePointProps {
  available: boolean;
}

export const AvailablePoint: FC<AvailablePointProps> = ({ available }) => {
  return (
    <div
      className={cn(
        available ? "bg-error" : "bg-success",
        "w-[10px] h-[10px] rounded-full"
      )}
    />
  );
};
