import React from "react";
import FetchProjectCard from "./Card/FetchProjectCard";
import { CreateProjectDialog } from "./Dialog/CreateProjectDialog";
import { useCategory } from "@/hooks/use-category";
import { useRegion } from "@/hooks/use-region";

const DisplayProject: React.FC = () => {
  const { data: categories } = useCategory();
  const { data: regions } = useRegion();

  return (
    <div className="flex flex-col h-full w-full bg-gray-100 overflow-auto">
      <div className="m-10">
        <div className="flex justify-end mt-10">
          <CreateProjectDialog
            triggerClassName="bg-primary-orange text-white hover:bg-orange-600 px-4 py-1 my-4"
            categories={categories || []}
            regions={regions || []}
          ></CreateProjectDialog>
        </div>
        <FetchProjectCard
          categories={categories || []}
          regions={regions || []}
        />
      </div>
    </div>
  );
};

export default DisplayProject;
