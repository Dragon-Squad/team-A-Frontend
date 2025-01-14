import React, { useState } from "react";
import FetchActiveProjectCard from "./Card/FetchActiveProjectCard";
import { useProjects } from "@/hooks/use-project";
import { useCategory } from "@/hooks/use-category";
import { useRegion } from "@/hooks/use-region";
import { CustomDropdownMenuRadioGroup } from "./DropdownMenu/DropdownMenuRadioGroup";
import { CustomDropdownMenuCheckboxes } from "./DropdownMenu/DropdownMenuCheckboxes";

function DonorDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [charityName, setCharityName] = useState("");
  const [categoryIds, setCategoryIds] = useState<string[]>([]);
  const [regionId, setRegionId] = useState<string>("");
  const { data: projects } = useProjects(
    searchTerm,
    charityName,
    categoryIds,
    regionId,
  );

  const { data: categories } = useCategory();
  const { data: regions } = useRegion();

  // console.log(projects);

  return (
    <div className="flex flex-col h-screen w-full bg-gray-100 overflow-auto">
      <div className="m-10">
        <input
          type="text"
          placeholder="Search for active projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full mb-4 text-black bg-white"
        />
        <input
          type="text"
          placeholder="Search for active projects based on charity name..."
          value={charityName}
          onChange={(e) => setCharityName(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full mb-4 text-black bg-white"
        />

        <div className="flex space-x-4 mb-4">
          <CustomDropdownMenuRadioGroup
            buttonText="Select Region"
            options={regions || []}
            selectedValue={regionId}
            onValueChange={setRegionId}
          />
          <CustomDropdownMenuCheckboxes
            buttonText="Select Category"
            options={categories || []}
            selectedValue={categoryIds}
            onValuesChange={setCategoryIds}
          />
        </div>

        <FetchActiveProjectCard activeProjects={projects} />
      </div>
    </div>
  );
}

export default DonorDashboard;
