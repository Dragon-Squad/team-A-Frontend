"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropdownMenuRadioGroupProps {
  buttonText: string;
  options: { id: string; name: string }[];
  selectedValue?: string;
  onValueChange: (value: string) => void;
}

export function CustomDropdownMenuRadioGroup({
  buttonText,
  options,
  selectedValue,
  onValueChange,
}: DropdownMenuRadioGroupProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{buttonText}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedValue}
          onValueChange={onValueChange}
        >
          {options.map((option) => (
            <DropdownMenuRadioItem key={option._id} value={option._id}>
              {option.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
