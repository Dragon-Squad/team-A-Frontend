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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function CreateProjectDialog({
  triggerClassName,
  categories,
  regions,
}: Props) {
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
          {categories.map((category: Category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={`category-${category.id}`} />
              <Label className="text-black" htmlFor={`category-${category.id}`}>
                {category.name}
              </Label>
            </div>
          ))}

          <Label htmlFor="region" className="text-black ">
            Region
          </Label>
          <RadioGroup>
            {regions.map((region: Region) => (
              <div key={region._id} className="flex items-center space-x-2">
                <RadioGroupItem
                  id={`region-${region._id}`}
                  value={region._id}
                />
                <Label className="text-black" htmlFor={`region-${region._id}`}>
                  {region.name}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
