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
import { getLocalStorageItem } from "@/utils/helper";
import { EditProject } from "@/types/project";
import { useCreateProject } from "@/hooks/use-project";

export function EditProjectDialog({
  triggerClassName,
  categories,
  regions,
}: Props) {
  const { createProject } = useCreateProject();
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [selectedRegion, setSelectedRegion] = useState<string | undefined>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [goalAmount, setGoalAmount] = useState<string>("");

  const handleCategoryChange = (categoryId: string, isChecked: boolean) => {
    setSelectedCategories((prev) => {
      if (isChecked) {
        return [...prev, categoryId];
      } else {
        return prev.filter((id) => id !== categoryId);
      }
    });
  };

  const handleSubmit = async () => {
    console.log("Name:", name);
    console.log("Goal Amount:", goalAmount);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Selected Region ID:", selectedRegion);
    console.log("Selected Categories IDs:", selectedCategories);
    const projectData: EditProject = {
      charityId: getLocalStorageItem("charityId") ?? "",
      categoryIds: selectedCategories,
      description: description,
      regionId: selectedRegion ?? "",
      title: name,
      goalAmount: parseFloat(goalAmount),
      startDate: startDate?.toString() ?? "",
      endDate: endDate?.toString() ?? "",
    };
    await createProject(projectData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="mx-5">
        <Button variant="outline" className={triggerClassName}>
          Edit Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit project</DialogTitle>
          <DialogDescription>
            Edit your project here, click edit when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-black">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter project name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-black">
              Description
            </Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter project's description"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="goalAmount" className="text-black">
              Goal Amount
            </Label>
            <Input
              id="goalAmount"
              value={goalAmount}
              onChange={(e) => setGoalAmount(e.target.value)}
              placeholder="Enter the project's goal amount"
              className="col-span-3"
            />
          </div>

          <Label htmlFor="category" className="text-black ">
            Category
          </Label>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category: Category) => (
              <div key={category._id} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category._id}`}
                  checked={selectedCategories.includes(category._id)}
                  onCheckedChange={(isChecked) =>
                    handleCategoryChange(category._id, isChecked)
                  }
                />
                <Label
                  className="text-black"
                  htmlFor={`category-${category._id}`}
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
                  <Button className="w-full text-black" variant="outline">
                    {selectedRegion
                      ? regions.find(
                          (region: Region) => region._id === selectedRegion,
                        )?.name
                      : "Select Region"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {regions.map((region: Region) => (
                    <DropdownMenuItem
                      key={region._id}
                      onClick={() => setSelectedRegion(region._id)}
                    >
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
