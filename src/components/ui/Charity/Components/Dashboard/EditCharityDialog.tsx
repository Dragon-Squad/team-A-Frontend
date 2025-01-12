import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface EditCharityDialogProps {
  buttonText: string;
  title: string;
  buttonStyle: string;
  submitButtonStyle: string;
  name: string;
  type: string;
  category: string[];
  region: string[];
  onSaveChanges: (
    name: string,
    type: string,
    category: string[],
    region: string[],
  ) => void;
}

export function EditCharityDialog({
  buttonText,
  title,
  buttonStyle,
  submitButtonStyle,
  name,
  type,
  category,
  region,
  onSaveChanges,
}: EditCharityDialogProps) {
  const [nameInput, setNameInput] = useState(name);
  const [typeInput, setTypeInput] = useState(type);
  const [categoryInput, setCategoryInput] = useState(category.join(", "));
  const [regionInput, setRegionInput] = useState(region.join(", "));

  const handleSaveChanges = () => {
    const updatedCategory = categoryInput.split(",").map((cat) => cat.trim());
    const updatedRegion = regionInput.split(",").map((reg) => reg.trim());
    onSaveChanges(nameInput, typeInput, updatedCategory, updatedRegion);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={buttonStyle}>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="mt-1 block text-sm font-medium text-gray-700">
            {title}
          </DialogTitle>
          <DialogDescription>
            Make changes to your charity details here. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 gap-4">
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </Label>
            <Input
              id="name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="mt-1 w-full text-sm font-medium text-gray-700"
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700"
            >
              Type
            </Label>
            <Input
              id="type"
              value={typeInput}
              onChange={(e) => setTypeInput(e.target.value)}
              className="mt-1 w-full text-sm font-medium text-gray-700"
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Categories
            </Label>
            <Input
              id="category"
              value={categoryInput}
              onChange={(e) => setCategoryInput(e.target.value)}
              className="mt-1 w-full text-sm font-medium text-gray-700"
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Label
              htmlFor="region"
              className="block text-sm font-medium text-gray-700"
            >
              Regions
            </Label>
            <Input
              id="region"
              value={regionInput}
              onChange={(e) => setRegionInput(e.target.value)}
              className="mt-1 w-full text-sm font-medium text-gray-700"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            className={submitButtonStyle}
            type="button"
            onClick={handleSaveChanges}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
