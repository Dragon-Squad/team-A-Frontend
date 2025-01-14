"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";

interface DropdownMenuCheckboxGroupProps {
  buttonText: string;
  options: { id: string; name: string }[];
  selectedValues: string[];
  onValuesChange: (values: string[]) => void;
}

export function CustomDropdownMenuCheckboxes({
  buttonText,
  options,
  selectedValues = [], // Default to empty array
  onValuesChange,
}: DropdownMenuCheckboxGroupProps) {
  const handleCheckboxChange = (id: string, isChecked: boolean) => {
    if (isChecked) {
      onValuesChange([...selectedValues, id]); // Add value to the array
    } else {
      onValuesChange(selectedValues.filter((value) => value !== id)); // Remove value from the array
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{buttonText}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options.map((option) => (
          <DropdownMenuCheckboxItem
            key={option._id}
            checked={selectedValues.includes(option._id)} // Ensure this is safe
            onCheckedChange={(isChecked) =>
              handleCheckboxChange(option._id, isChecked)
            }
          >
            {option.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
