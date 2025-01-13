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
import { Checkbox } from "@/components/ui/checkbox";
import { Category, Props } from "@/types/category";
import { Region } from "@/types/region";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DateTimePicker24h } from "@/components/datetimepicker";
import { useState } from "react";

export function CreateProjectDialog({
  triggerClassName,
  categories,
  regions,
}: Props) {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  const handleSubmit = () => {
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="mx-5">
        <Button variant="outline" className={triggerClassName}>
          Create Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create project</DialogTitle>
          <DialogDescription>
            Create your project here, click create when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-black">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter project name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="goalAmount" className="text-black">
              Goal Amount
            </Label>
            <Input
              id="goalAmount"
              placeholder="Enter the project's goal amount"
              className="col-span-3"
            />
          </div>

          <Label htmlFor="category" className="text-black ">
            Category
          </Label>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category: Category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox id={`category-${category.id}`} />
                <Label
                  className="text-black"
                  htmlFor={`category-${category.id}`}
                >
                  {category.name}
                </Label>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="region" className="text-black ">
              Region
            </Label>
            <div className="col-span-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="w-full" variant="outline">
                    Select Region
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {regions.map((region: Region) => (
                    <DropdownMenuItem key={region._id} value={region._id}>
                      {region.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-black">Start Time</Label>
          <div className="col-span-3">
            <DateTimePicker24h onChange={setStartDate} />
          </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-black">End Time</Label>
          <div className="col-span-3">
            <DateTimePicker24h onChange={setEndDate} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
